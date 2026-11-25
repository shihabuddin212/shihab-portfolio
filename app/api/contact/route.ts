import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Please send a valid message." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { error: "Name must be between 2 and 100 characters." },
      { status: 400 },
    );
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 5,000 characters." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO) {
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    return NextResponse.json(
      { error: "The contact service is temporarily unavailable." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again or email me directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thanks — your message has been sent." });
}
