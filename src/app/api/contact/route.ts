import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function getMissingEnvVars() {
    const required = ["SMTP_EMAIL", "SMTP_PASSWORD", "CONTACT_RECEIVER_EMAIL"];
    return required.filter((key) => !process.env[key]?.trim());
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

        const missingEnvVars = getMissingEnvVars();
        if (missingEnvVars.length > 0) {
            console.error(`Missing email environment variables: ${missingEnvVars.join(", ")}`);
            return NextResponse.json(
                {
                    error: "Email service is not configured correctly. Please try again later."
                },
                { status: 500 }
            );
        }

        const smtpEmail = process.env.SMTP_EMAIL as string;
        const smtpPassword = process.env.SMTP_PASSWORD as string;
        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL as string;
        const safeName = escapeHtml(body.name.trim());
        const safeSenderEmail = escapeHtml(body.email.trim());
        const safeMessage = escapeHtml(body.message.trim());

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpEmail,
                pass: smtpPassword
            }
        });

        await transporter.verify();

        const result = await transporter.sendMail({
            from: `Portfolio Contact <${smtpEmail}>`,
            to: receiverEmail,
            replyTo: body.email,
            subject: `[Portfolio] Tin nhắn mới từ ${body.name}`,
            text: [
                "Bạn có một tin nhắn mới từ Portfolio!",
                `Người gửi: ${body.name}`,
                `Email: ${body.email}`,
                "Nội dung:",
                body.message.trim()
            ].join("\n"),
            html: `
                <h3>Bạn có một tin nhắn mới từ Portfolio!</h3>
                <p><strong>Người gửi:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeSenderEmail}</p>
                <p><strong>Nội dung:</strong></p>
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
                message: "Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể."
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Đã có lỗi xảy ra. Hãy thử gửi lại sau." },
            { status: 500 }
        );
    }
}
