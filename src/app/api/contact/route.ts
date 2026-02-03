import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
    name: string;
    email: string;
    projectType: string;
    budgetRange?: string;
    message: string;
}

// Placeholder for email service integration
// To integrate with a real email service (e.g., Resend, SendGrid, Nodemailer):
// 1. Install the email service package: npm install resend
// 2. Set up your API key in environment variables
// 3. Replace the sendEmail function below with your implementation
async function sendEmail(_data: ContactFormData): Promise<boolean> {
    // TODO: Implement actual email sending
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'hello@amelie.com',
    //   subject: `New contact from ${data.name}`,
    //   html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p>...`
    // });

    console.log("📧 Email would be sent to: hello@amelie.com");
    console.log("   (Replace this with actual email service)");

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 500));

    return true;
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

        if (!body.projectType) {
            errors.push("Project type is required");
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

        // Log submission to console
        console.log("\n" + "=".repeat(50));
        console.log("📬 New Contact Form Submission");
        console.log("=".repeat(50));
        console.log(`Name: ${body.name}`);
        console.log(`Email: ${body.email}`);
        console.log(`Project Type: ${body.projectType}`);
        console.log(`Budget Range: ${body.budgetRange || "Not specified"}`);
        console.log(`Message: ${body.message}`);
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log("=".repeat(50) + "\n");

        // Send email (placeholder)
        await sendEmail(body);

        return NextResponse.json(
            {
                success: true,
                message: "Message received! I'll get back to you within 24-48 hours."
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
