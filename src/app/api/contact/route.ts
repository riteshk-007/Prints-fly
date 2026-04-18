import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/lib/nodemailer";

const BRAND_COLOR = "#E91E8C";
const NAVY_DEEP = "#0A1172";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, company, industry, product, quantity, city, message } = data;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    // 1. Send Email to Admin
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; }
          .header { background: ${NAVY_DEEP}; color: white; padding: 25px; text-align: center; }
          .content { padding: 30px; }
          .footer { background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #777; }
          .row { margin-bottom: 15px; border-bottom: 1px solid #f0f0f0; padding-bottom: 5px; }
          .label { font-weight: bold; color: ${NAVY_DEEP}; width: 120px; display: inline-block; }
          .value { color: #555; }
          .message-box { background: #fef1f8; border-left: 4px solid ${BRAND_COLOR}; padding: 15px; margin-top: 10px; }
          .badge { background: ${BRAND_COLOR}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0;">New Enquiry Received</h2>
            <p style="margin:5px 0 0; opacity:0.8;">PrintsFly Business Lead</p>
          </div>
          <div class="content">
            <div class="row">
              <span class="label">Name:</span>
              <span class="value">${name}</span>
            </div>
            <div class="row">
              <span class="label">Email:</span>
              <span class="value">${email}</span>
            </div>
            <div class="row">
              <span class="label">Phone:</span>
              <span class="value">+91 ${phone}</span>
            </div>
            <div class="row">
              <span class="label">Company:</span>
              <span class="value">${company || "N/A"}</span>
            </div>
            <div class="row">
              <span class="label">Industry:</span>
              <span class="value">${industry || "N/A"}</span>
            </div>
            <div class="row">
              <span class="label">Product:</span>
              <span class="value">${product || "N/A"}</span>
            </div>
            <div class="row">
              <span class="label">Quantity:</span>
              <span class="value">${quantity || "N/A"}</span>
            </div>
            <div class="row">
              <span class="label">Location:</span>
              <span class="value">${city || "N/A"}</span>
            </div>
            <div style="margin-top:20px;">
              <span class="label">Project Details:</span>
              <div class="message-box">${message || "No specific message provided."}</div>
            </div>
          </div>
          <div class="footer">
            Sent from PrintsFly Website Contact Form
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Send Thank You Email to User
    const userHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; }
          .header { background: ${BRAND_COLOR}; color: white; padding: 30px; text-align: center; }
          .content { padding: 35px; text-align: center; }
          .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 13px; color: #666; }
          .btn { background: ${BRAND_COLOR}; color: white !important; padding: 12px 30px; text-decoration: none; border-radius: 30px; display: inline-block; font-weight: bold; margin-top: 20px; }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">PrintsFly</div>
            <h2 style="margin:0;">Thank You, ${name.split(" ")[0]}!</h2>
          </div>
          <div class="content">
            <p style="font-size: 18px; color: ${NAVY_DEEP}; font-weight: 500;">We've received your enquiry.</p>
            <p>Thanks for reaching out to PrintsFly. Our team is excited to learn more about your project and will get back to you within 24 business hours.</p>
            <p>In the meantime, feel free to check out our latest portfolio or reply directly to this email if you have any urgent questions.</p>
            <a href="https://printsfly.com" class="btn">Visit Website</a>
          </div>
          <div class="footer">
            <p style="margin:0;"><strong>PrintsFly - Premium Printing Solutions</strong></p>
            <p style="margin:5px 0;">Quality. Speed. Innovation.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Admin Notification
    await transporter.sendMail({
      ...mailOptions,
      subject: `🚀 New Lead: ${name} from ${company || "Website"}`,
      html: adminHtml,
    });

    // User Thank You
    await transporter.sendMail({
      from: mailOptions.from,
      to: email,
      subject: `Thank you for contacting PrintsFly!`,
      html: userHtml,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
