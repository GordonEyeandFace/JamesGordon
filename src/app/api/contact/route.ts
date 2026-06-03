import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  procedureOfInterest?: string;
  message?: string;
  newsletter?: boolean;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const fullName = payload.fullName?.trim();
  const phoneNumber = payload.phoneNumber?.trim();
  const emailAddress = payload.emailAddress?.trim();
  const procedureOfInterest = payload.procedureOfInterest?.trim();
  const message = payload.message?.trim() ?? '';
  const newsletter = Boolean(payload.newsletter);

  if (!fullName || !phoneNumber || !emailAddress || !procedureOfInterest) {
    return NextResponse.json(
      { message: 'Please complete all required fields.' },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? '587');
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO_EMAIL;
  const contactFromName = process.env.CONTACT_FROM_NAME ?? 'Gordon Eye & Face Website';

  if (!smtpHost || !smtpUser || !smtpPass || !contactTo) {
    return NextResponse.json(
      { message: 'Email configuration is incomplete.' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const newsletterStatus = newsletter ? 'Yes' : 'No';
  const subject = `New consultation request from ${fullName}`;
  const confirmationSubject = 'We received your consultation request';
  const bookingUrl = 'https://calendly.com/drjamesgordon/consult';
  const logoUrl =
    'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section/0-gordon-eye-and-face-logo.png';

  const text = [
    'New consultation request received',
    '',
    `Full Name: ${fullName}`,
    `Phone Number: ${phoneNumber}`,
    `Email Address: ${emailAddress}`,
    `Procedure of Interest: ${procedureOfInterest}`,
    `Newsletter Opt-In: ${newsletterStatus}`,
    '',
    'Message:',
    message || '(No message provided)',
    '',
    `Book Consultation: ${bookingUrl}`,
  ].join('\n');

  const html = `
    <div style="margin:0;padding:0;background:#f7f5f2;font-family:Arial,Helvetica,sans-serif;color:#2A2E37;">
      <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
        <div style="background:#000000;border-radius:24px 24px 0 0;padding:28px 32px;text-align:center;color:#ffffff;">
          <div style="font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#CEB776;font-weight:700;margin-bottom:10px;">
            Gordon Eye &amp; Face
          </div>
          <h2 style="margin:0;font-size:28px;line-height:1.1;text-transform:uppercase;letter-spacing:0.04em;">
            New Consultation Request
          </h2>
          <p style="margin:12px 0 0;font-size:15px;line-height:1.6;color:#f7f5f2;">
            A patient submitted the contact form and is ready for follow-up.
          </p>
        </div>

        <div style="background:#ffffff;border:1px solid #ece6dd;border-top:none;border-radius:0 0 24px 24px;padding:32px;">
          <div style="display:grid;gap:16px;">
            <div style="padding:16px 18px;border:1px solid #ece6dd;border-radius:16px;background:#fffdf9;">
              <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8B1D2D;font-weight:700;margin-bottom:6px;">
                Patient Details
              </div>
              <div style="font-size:15px;line-height:1.8;">
                <div><strong>Name:</strong> ${escapeHtml(fullName)}</div>
                <div><strong>Phone:</strong> ${escapeHtml(phoneNumber)}</div>
                <div><strong>Email:</strong> ${escapeHtml(emailAddress)}</div>
                <div><strong>Procedure:</strong> ${escapeHtml(procedureOfInterest)}</div>
                <div><strong>Newsletter Opt-In:</strong> ${newsletterStatus}</div>
              </div>
            </div>

            <div style="padding:16px 18px;border:1px solid #ece6dd;border-radius:16px;background:#fff;">
              <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8B1D2D;font-weight:700;margin-bottom:10px;">
                Message
              </div>
              <div style="font-size:15px;line-height:1.8;color:#2A2E37;">
                ${message ? escapeHtml(message).replace(/\n/g, '<br />') : '<em>No message provided.</em>'}
              </div>
            </div>

            <div style="text-align:center;padding-top:8px;">
              <a
                href="${bookingUrl}"
                target="_blank"
                rel="noopener noreferrer"
                style="display:inline-block;background:#8B1D2D;color:#ffffff;text-decoration:none;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;padding:14px 28px;border-radius:999px;border:1px solid #8B1D2D;"
              >
                Book Consultation
              </a>
              <div style="margin-top:12px;font-size:13px;line-height:1.6;color:#6b7280;">
                Or reply directly to this email to follow up.
              </div>
            </div>
          </div>
        </div>

        <div style="text-align:center;padding:16px 8px 0;font-size:12px;line-height:1.6;color:#8b8b8b;">
          Gordon Eye &amp; Face • 1 Byram Brook Place, Armonk, NY
        </div>
      </div>
    </div>
  `;

  const confirmationText = [
    `Hi ${fullName},`,
    '',
    'Thank you for reaching out to Gordon Eye & Face. We have received your inquiry, and a member of our team will be in touch with you as soon as possible. Have a nice day and we look forward to assisting you!',
    '',
    `Procedure of Interest: ${procedureOfInterest}`,
    '',
    `If you'd like to book directly, you can use this link: ${bookingUrl}`,
    '',
    'If this is urgent, please call us at 914-820-0000.',
    '',
    'Best regards,',
    'Gordon Eye & Face',
  ].join('\n');

  const confirmationHtml = `
    <div style="margin:0;padding:0;background:#f7f5f2;font-family:Arial,Helvetica,sans-serif;color:#2A2E37;">
      <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
        <div style="background:#000000;border-radius:24px 24px 0 0;padding:28px 32px;text-align:center;color:#ffffff;">
          <img
            src="${logoUrl}"
            alt="Gordon Eye &amp; Face"
            style="display:block;max-width:260px;width:100%;height:auto;margin:0 auto 12px;"
          />
          <p style="margin:0;font-size:16px;line-height:1.4;font-weight:600;color:#f7f5f2;white-space:nowrap;">
            Thank you for contacting us
          </p>
        </div>

        <div style="background:#ffffff;border:1px solid #ece6dd;border-top:none;border-radius:0 0 24px 24px;padding:32px;">
          <div style="font-size:16px;line-height:1.8;color:#2A2E37;">
            <p style="margin:0 0 16px;">Hi ${escapeHtml(fullName)},</p>
            <p style="margin:0 0 16px;">
                Thank you for reaching out to Gordon Eye & Face. We have received your inquiry, and a member of our team will be in touch with you as soon as possible. Have a nice day and we look forward to assisting you!            </p>
            <div style="padding:16px 18px;border:1px solid #ece6dd;border-radius:16px;background:#fffdf9;margin-bottom:16px;">
              <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8B1D2D;font-weight:700;margin-bottom:6px;">
                Inquiry Summary
              </div>
              <div><strong>Procedure:</strong> ${escapeHtml(procedureOfInterest)}</div>
              <div><strong>Email:</strong> ${escapeHtml(emailAddress)}</div>
            </div>
            <p style="margin:0 0 20px;">
              If you'd like to book directly, you can use the link below.
            </p>
            <div style="text-align:center;padding-top:8px;">
              <a
                href="${bookingUrl}"
                target="_blank"
                rel="noopener noreferrer"
                style="display:inline-block;background:#8B1D2D;color:#ffffff;text-decoration:none;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;padding:14px 28px;border-radius:999px;border:1px solid #8B1D2D;"
              >
                Book Consultation
              </a>
            </div>
            <p style="margin:20px 0 0;font-size:14px;line-height:1.7;color:#6b7280;">
              If this is urgent, please call us at 914-820-0000.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${contactFromName}" <${smtpUser}>`,
      to: contactTo,
      replyTo: emailAddress,
      subject,
      text,
      html,
    });

    try {
      await transporter.sendMail({
        from: `"${contactFromName}" <${smtpUser}>`,
        to: emailAddress,
        subject: confirmationSubject,
        text: confirmationText,
        html: confirmationHtml,
      });
    } catch (confirmationError) {
      console.error('Contact confirmation email error:', confirmationError);
    }

    return NextResponse.json({ message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { message: 'Unable to send message right now. Please try again later.' },
      { status: 500 }
    );
  }
}
