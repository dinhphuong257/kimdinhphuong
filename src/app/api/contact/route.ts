import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface MailConfig {
    smtpEmail: string;
    smtpPassword: string;
    receiverEmail: string;
    smtpHost?: string;
    smtpPort?: number;
    smtpSecure: boolean;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function getEnvValue(keys: string[]) {
    for (const key of keys) {
        const value = process.env[key]?.trim();
        if (value) {
            return value;
        }
    }
    return "";
}

function getMailConfig(): MailConfig {
    const smtpEmail = getEnvValue(["SMTP_EMAIL", "SMTP_USER", "EMAIL_USER", "GMAIL_USER"]);
    const smtpPassword = getEnvValue([
        "SMTP_PASSWORD",
        "SMTP_PASS",
        "EMAIL_PASSWORD",
        "GMAIL_APP_PASSWORD",
        "GMAIL_PASS",
    ]);
    const receiverEmail = getEnvValue([
        "CONTACT_RECEIVER_EMAIL",
        "RECEIVER_EMAIL",
        "TO_EMAIL",
    ]) || smtpEmail;
    const smtpHost = getEnvValue(["SMTP_HOST"]);
    const smtpPortRaw = getEnvValue(["SMTP_PORT"]);
    const smtpPort = smtpPortRaw ? Number(smtpPortRaw) : undefined;
    const smtpSecureValue = getEnvValue(["SMTP_SECURE"]);
    const smtpSecure = smtpSecureValue ? smtpSecureValue.toLowerCase() === "true" : (smtpPort === 465);

    return {
        smtpEmail,
        smtpPassword,
        receiverEmail,
        smtpHost: smtpHost || undefined,
        smtpPort,
        smtpSecure,
    };
}

function getMissingConfig(config: MailConfig) {
    const missing: string[] = [];
    if (!config.smtpEmail) missing.push("SMTP email");
    if (!config.smtpPassword) missing.push("SMTP password");
    if (!config.receiverEmail) missing.push("Receiver email");
    return missing;
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        // Validate required fields
        const errors: string[] = [];

        if (!body.name?.trim()) {
            errors.push("Name is required");
        }

        if (!body.email?.trim()) {
            errors.push("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
            errors.push("Invalid email format");
        }

        if (!body.message?.trim()) {
            errors.push("Message is required");
        } else if (body.message.trim().length < 20) {
            errors.push("Message should be at least 20 characters");
        }

        if (errors.length > 0) {
            return NextResponse.json(
                { error: errors.join(", ") },
                { status: 400 }
            );
        }

        const mailConfig = getMailConfig();
        const missingConfig = getMissingConfig(mailConfig);

        if (missingConfig.length > 0) {
            console.error(`Missing email configuration: ${missingConfig.join(", ")}`);
            return NextResponse.json(
                {
                    error: "Email service is temporarily unavailable. Please try again later."
                },
                { status: 500 }
            );
        }

        const { smtpEmail, smtpPassword, receiverEmail, smtpHost, smtpPort, smtpSecure } = mailConfig;
        const safeName = escapeHtml(body.name.trim());
        const safeSenderEmail = escapeHtml(body.email.trim());
        const safeMessage = escapeHtml(body.message.trim());

        const transporter = smtpHost
            ? nodemailer.createTransport({
                host: smtpHost,
                port: smtpPort ?? 587,
                secure: smtpSecure,
                auth: {
                    user: smtpEmail,
                    pass: smtpPassword,
                },
            })
            : nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: smtpEmail,
                    pass: smtpPassword,
                },
            });

        await transporter.verify();

        const result = await transporter.sendMail({
            from: `Portfolio Contact <${smtpEmail}>`,
            to: receiverEmail,
            replyTo: body.email,
            subject: `[Portfolio] New message from ${body.name}`,
            text: [
                "You have a new message from your portfolio!",
                `Sender: ${body.name}`,
                `Email: ${body.email}`,
                "Message:",
                body.message.trim()
            ].join("\n"),
            html: `
                <h3>You have a new message from your portfolio!</h3>
                <p><strong>Sender:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeSenderEmail}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage.replace(/\n/g, '<br>')}</p>
            `,
            headers: {
                "X-Auto-Response-Suppress": "OOF, AutoReply"
            }
        });

        if (result.rejected.length > 0) {
            console.error("Email rejected by SMTP provider:", result.rejected);
            return NextResponse.json(
                { error: "Email delivery failed. Please try again later." },
                { status: 502 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been sent successfully! I will get back to you as soon as possible."
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "An error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
