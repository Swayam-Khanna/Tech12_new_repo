import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { upload } from "../middlewares/upload";

const router: IRouter = Router();

router.post("/careers/apply", (req, res, next) => {
  upload.single("resume")(req, res, async (err) => {
    if (err) {
      res.status(400).json({ success: false, error: err.message });
      return;
    }

    const { name, email, phone, role, experience, portfolio, coverNote } = req.body;

    if (!name || !email || !phone || !role) {
      res.status(400).json({ success: false, error: "Name, email, phone, and role are required." });
      return;
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailHost = process.env.EMAIL_HOST || "smtp.zoho.in";
    const emailPort = Number(process.env.EMAIL_PORT) || 465;
    const receiver = "techavbt@gmail.com";

    if (!emailUser || !emailPass) {
      req.log.error("Email credentials are not configured");
      res.status(500).json({ success: false, error: "Email service not configured." });
      return;
    }

    const isGmail = emailHost.includes("gmail") || emailUser.endsWith("@gmail.com");
    const transporter = nodemailer.createTransport(
      isGmail
        ? {
            service: "gmail",
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          }
        : {
            host: emailHost,
            port: emailPort,
            secure: emailPort === 465,
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          }
    );

    const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname || "resume.pdf",
        content: req.file.buffer,
        contentType: req.file.mimetype,
      });
    }

    const mailOptions = {
      from: `"AVBT Careers" <${emailUser}>`,
      to: receiver,
      replyTo: email,
      subject: `New Career Application: ${role} — from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; background: #0B0F19; color: #ffffff; padding: 32px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
            <h2 style="color: #38BDF8; margin: 0; font-size: 22px;">New Job / Internship Application</h2>
          </div>
          <p style="color: #94A3B8; font-size: 14px; margin-top: 0;">An applicant has submitted their resume through the AVBT Technologies Careers portal.</p>
          <hr style="border-color: rgba(255,255,255,0.1); margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; width: 140px;">Applicant Name</td>
              <td style="padding: 10px 0; color: #ffffff; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8;">Selected Role</td>
              <td style="padding: 10px 0; color: #22C55E; font-weight: bold;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8;">Email Address</td>
              <td style="padding: 10px 0; color: #38BDF8;"><a href="mailto:${email}" style="color: #38BDF8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8;">Phone Number</td>
              <td style="padding: 10px 0; color: #ffffff;">${phone}</td>
            </tr>
            ${experience ? `
            <tr>
              <td style="padding: 10px 0; color: #94A3B8;">Experience Level</td>
              <td style="padding: 10px 0; color: #ffffff;">${experience}</td>
            </tr>` : ""}
            ${portfolio ? `
            <tr>
              <td style="padding: 10px 0; color: #94A3B8;">Portfolio / GitHub</td>
              <td style="padding: 10px 0; color: #38BDF8;"><a href="${portfolio}" target="_blank" style="color: #38BDF8;">${portfolio}</a></td>
            </tr>` : ""}
            ${coverNote ? `
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; vertical-align: top;">Note / Message</td>
              <td style="padding: 10px 0; color: #CBD5E1;">${coverNote.replace(/\n/g, "<br/>")}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #94A3B8;">Resume Attached</td>
              <td style="padding: 10px 0; color: #E2E8F0;">${req.file ? `📎 ${req.file.originalname} (${Math.round(req.file.size / 1024)} KB)` : "None attached"}</td>
            </tr>
          </table>
          <hr style="border-color: rgba(255,255,255,0.1); margin: 24px 0 16px;" />
          <p style="color: #64748B; font-size: 12px; margin: 0;">Sent automatically from AVBT Technologies Careers Portal to techavbt@gmail.com</p>
        </div>
      `,
      attachments,
    };

    try {
      await transporter.sendMail(mailOptions);
      req.log.info({ name, email, role }, "Career application email sent to techavbt@gmail.com");
      res.json({ success: true, message: "Application submitted successfully." });
    } catch (sendErr) {
      req.log.error({ sendErr }, "Failed to send career application email");
      res.status(500).json({ success: false, error: "Failed to submit application. Please try again or email us directly." });
    }
  });
});

export default router;
