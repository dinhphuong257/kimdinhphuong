import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendSecretConfig = process.env.RESEND_API_KEY;
const resend = resendSecretConfig ? new Resend(resendSecretConfig) : null;

// The email where you want to receive messages from your portfolio
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_EMAIL || process.env.GMAIL_USER || "";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
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

        if (!resend || !receiverEmail) {
            console.error("Missing RESEND_API_KEY or CONTACT_RECEIVER_EMAIL configuration.");
            return NextResponse.json(
                {
                    error: "Email service is temporarily unavailable. Missing Resend Configuration."
                },
                { status: 500 }
            );
        }

        const safeName = body.name.trim();
        const safeSenderEmail = body.email.trim();
        const safeMessage = body.message.trim();

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Requires verified domain in production, 'onboarding@resend.dev' works for testing if verifying single email
            to: receiverEmail,
            replyTo: safeSenderEmail,
            subject: `[Portfolio] Tin nhắn mới từ ${safeName}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h3 style="color: #4f46e5;">Bạn có một tin nhắn mới từ Portfolio!</h3>
                    <p style="color: #333;"><strong>Người gửi:</strong> ${safeName}</p>
                    <p style="color: #333;"><strong>Email:</strong> ${safeSenderEmail}</p>
                    <hr style="border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="color: #555; white-space: pre-wrap;">${safeMessage}</p>
                </div>
            `,
        });

        if (error) {
            console.error("Email delivery failed:", error);
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
