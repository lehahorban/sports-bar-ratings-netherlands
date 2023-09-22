import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  const config = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: process.env.USER,
    to: email,
    subject: "New application",
    text: `Name: ${name}\nTelephone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error) {
    console.log(error);
    return new NextResponse(500, {
      message: "An error occurred while sending email.",
    });
  }
}
