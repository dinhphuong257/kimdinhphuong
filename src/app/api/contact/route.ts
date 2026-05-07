import { NextRequest, NextResponse, after } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const resendSecretConfig = process.env.RESEND_API_KEY;
const resend = resendSecretConfig ? new Resend(resendSecretConfig) : null;

// Gmail SMTP Configuration
const gmailUser = process.env.GMAIL_USER || process.env.SMTP_EMAIL;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD;

const transporter = (gmailUser && gmailAppPassword) ? nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailUser,
        pass: gmailAppPassword,
    },
}) : null;

// The email where you want to receive messages from your portfolio
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_EMAIL || process.env.GMAIL_USER || "";

function getEmailTemplate(name: string, email: string, message: string, isFallback: boolean = false) {
    const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
    const indigo = "#4f46e5";
    const dark = "#0f172a";
    const gray = "#64748b";
    
    return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fcfcfc; padding: 60px 20px; color: ${dark}; margin: 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 540px; background-color: #ffffff; border-radius: 16px; border: 1px solid #f1f5f9; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.02);">
            <!-- Header -->
            <tr>
                <td style="padding: 30px 40px; border-bottom: 1px solid #f8fafc;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td align="right">
                                <span style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; color: ${gray}; text-transform: uppercase; letter-spacing: 0.05em;">${timestamp}</span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <!-- Content -->
            <tr>
                <td style="padding: 40px;">
                    <p style="margin: 0 0 12px 0; font-size: 13px; font-weight: 600; color: ${indigo}; letter-spacing: 0.05em; text-transform: uppercase;">Thông báo Hệ thống</p>
                    <h2 style="margin: 0 0 35px 0; font-size: 26px; font-weight: 700; letter-spacing: -0.03em; color: ${dark}; line-height: 1.2;">Bạn có một yêu cầu liên hệ mới</h2>
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td style="padding-bottom: 28px;">
                                <p style="margin: 0 0 8px 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 10px; color: ${gray}; text-transform: uppercase; font-weight: 700; letter-spacing: 0.12em;">Người gửi</p>
                                <p style="margin: 0; font-size: 17px; color: ${dark}; font-weight: 600;">${name}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 40px;">
                                <p style="margin: 0 0 8px 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 10px; color: ${gray}; text-transform: uppercase; font-weight: 700; letter-spacing: 0.12em;">Địa chỉ Email</p>
                                <p style="margin: 0; font-size: 17px; color: ${indigo}; font-weight: 600;">${email}</p>
                            </td>
                        </tr>
                    </table>
                    
                    <div style="height: 1px; background-color: #f8fafc; margin: 0 0 35px 0;"></div>
                    
                    <p style="margin: 0 0 16px 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 10px; color: ${gray}; text-transform: uppercase; font-weight: 700; letter-spacing: 0.12em;">Nội dung tin nhắn</p>
                    <div style="font-size: 16px; line-height: 1.85; color: #334155; white-space: pre-wrap; margin-bottom: 50px; background-color: #fafafa; padding: 30px; border-radius: 12px; border: 1px solid #f1f5f9;">${message}</div>
                    
                    <!-- Action -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <a href="mailto:${email}" style="display: inline-block; background-color: ${dark}; color: #ffffff; padding: 16px 36px; border-radius: 12px; font-size: 15px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">Phản hồi ngay &nbsp;&rarr;</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <!-- Footer -->
            <tr>
                <td style="padding: 35px 40px; background-color: #fbfbfc; border-top: 1px solid #f8fafc; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; text-align: center;">
                    <p style="margin: 0 0 10px 0; font-size: 13px; color: ${gray}; font-weight: 500;">
                        Tin nhắn được gửi qua trí tuệ Portfolio ${isFallback ? '(Chế độ SMTP)' : ''}
                    </p>
                    <p style="margin: 0; font-size: 11px; color: #94a3b8; letter-spacing: 0.03em;">
                        &copy; ${new Date().getFullYear()} Kim Đình Phương Studio. Đã được tối ưu hóa.
                    </p>
                </td>
            </tr>
        </table>
    </div>
    `;
}

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

        if (!resend && !transporter) {
            console.error("Missing email service configuration (Resend or Gmail).");
            return NextResponse.json(
                {
                    error: "Email service is temporarily unavailable. Please try again later or contact me via social media."
                },
                { status: 500 }
            );
        }

        if (!receiverEmail) {
            console.error("Missing receiver email configuration.");
            return NextResponse.json(
                { error: "Receiver email is not configured." },
                { status: 500 }
            );
        }

        const safeName = body.name.trim();
        const safeSenderEmail = body.email.trim();
        const safeMessage = body.message.trim();

        // Background email delivery for near-instant response time
        after(async () => {
            let emailSent = false;
            let deliveryError = null;

            // 1. Try Resend first if available
            if (resend) {
                try {
                    const { data, error } = await resend.emails.send({
                        from: "Portfolio Contact <onboarding@resend.dev>",
                        to: receiverEmail,
                        replyTo: safeSenderEmail,
                        subject: `[Portfolio] Tin nhắn mới từ ${safeName}`,
                        html: getEmailTemplate(safeName, safeSenderEmail, safeMessage),
                    });

                    if (!error) {
                        emailSent = true;
                    } else {
                        deliveryError = error;
                        console.error("Resend delivery failed:", error);
                    }
                } catch (err) {
                    console.error("Resend exception:", err);
                    deliveryError = err;
                }
            }

            // 2. Fallback to Nodemailer/Gmail if Resend failed or was not configured
            if (!emailSent && transporter) {
                try {
                    await transporter.sendMail({
                        from: `"Portfolio Contact" <${gmailUser}>`,
                        to: receiverEmail,
                        replyTo: safeSenderEmail,
                        subject: `[Portfolio] Tin nhắn mới từ ${safeName}`,
                        text: `Người gửi: ${safeName}\nEmail: ${safeSenderEmail}\n\nTin nhắn:\n${safeMessage}`,
                        html: getEmailTemplate(safeName, safeSenderEmail, safeMessage, true),
                    });
                    emailSent = true;
                } catch (err) {
                    console.error("Gmail delivery failed:", err);
                    deliveryError = err;
                }
            }

            if (emailSent) {
                console.log(`Email successfully delivered for ${safeName}`);
            } else {
                console.error(`Urgent: All email delivery methods failed for ${safeName}. Last error:`, deliveryError);
            }
        });

        // Simulated delay for better UX (shortened to 2s)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Respond to the user
        return NextResponse.json(
            {
                success: true,
                message: "Tin nhắn của bạn đã được gửi thành công!"
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
