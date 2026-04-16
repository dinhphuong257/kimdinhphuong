import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

        // Configure your actual email SMTP here
        // Please set SMTP_EMAIL and SMTP_PASSWORD in your .env.local file
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL || 'your_email@gmail.com',
                pass: process.env.SMTP_PASSWORD || 'your_app_password'
            }
        });

        // ⚠️ IF YOU DONT HAVE .ENV YET, THIS MIGHT FAIL IN PRODUCTION
        // This is a setup for real email sending.
        if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
            await transporter.sendMail({
                from: process.env.SMTP_EMAIL,
                to: "kimdinhphuong.vn@gmail.com", // Your receiving email
                subject: `[Portfolio] Tin nhắn mới từ ${body.name}`,
                html: `
                    <h3>Bạn có một tin nhắn mới từ Portfolio!</h3>
                    <p><strong>Người gửi:</strong> ${body.name}</p>
                    <p><strong>Email:</strong> ${body.email}</p>
                    <p><strong>Nội dung:</strong></p>
                    <p>${body.message.replace(/\\n/g, '<br>')}</p>
                `
            });
        } else {
            console.log("No SMTP credentials found in .env, falling back to console log:");
            console.log(body);
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
