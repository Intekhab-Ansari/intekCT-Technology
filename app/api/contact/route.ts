import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, budget, message, service } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message fields are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log("New IntekCT Lead Submission:", {
      name,
      email,
      budget: budget || "Not specified",
      service: service || "General inquiry",
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    // Note: If RESEND_API_KEY is configured in production, email dispatch can be triggered here.
    // For MVP and demonstration, we return a successful response immediately.

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting IntekCT! Our DevSecOps team has received your project inquiry and will reach out within 2 hours.",
      leadId: `LEAD-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error("Error in /api/contact route:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your message." },
      { status: 500 }
    );
  }
}
