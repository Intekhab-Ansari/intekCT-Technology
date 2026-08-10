import { NextResponse } from "next/server";
import { generateAIResponse, ChatMessage } from "@/lib/ai-provider";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request payload: 'messages' array is required." },
        { status: 400 }
      );
    }

    const replyText = await generateAIResponse(messages);

    return NextResponse.json({
      message: {
        role: "assistant",
        content: replyText,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in /api/chat route:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error in AI Assistant processing.",
        fallbackMessage: "I encountered a transient network issue. Please try asking again or feel free to book a call via our contact section below!",
      },
      { status: 500 }
    );
  }
}
