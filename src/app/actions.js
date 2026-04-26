"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  // SMTP Configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Verify connection configuration
    await transporter.verify();

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to yourself
      replyTo: email,
      subject: `[TechBarred] New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">New TechBarred Inquiry</h2>
          <div style="margin-bottom: 15px;">
            <strong>Name:</strong> ${name}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Email:</strong> ${email}
          </div>
          <div style="margin-bottom: 20px; padding: 15px; background-color: #f8fafc; border-radius: 4px;">
            <strong>Message:</strong><br/>
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #64748b;">
            This email was sent from the TechBarred contact form.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("SMTP Error:", error);
    return { error: "Failed to send email. Please try again later." };
  }
}
