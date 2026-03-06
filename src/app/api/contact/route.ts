import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  fullName: z.string().min(2).max(100),
  company: z.string().min(1).max(100),
  email: z.string().email().max(200),
  service: z.string().min(1).max(100),
  budget: z.string().min(1).max(50),
  details: z.string().min(20).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await db.contactInquiry.create({
      data: {
        fullName: data.fullName,
        company: data.company,
        email: data.email,
        service: data.service,
        budget: data.budget,
        details: data.details,
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
