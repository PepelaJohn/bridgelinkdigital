// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, subject, phone, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          data: null,
          message: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    // Send email notification
    const emailData = await resend.emails.send({
      from: 'BridgeLink Contact Form <noreply@bridgelink.co.ke>', // Use your verified domain
      to: ['info@bridgelink.co.ke'],
      subject: `Contact Form Submission: ${subject}`,
      headers: {
        'List-Unsubscribe': '<mailto:unsubscribe@bridgelink.co.ke>',
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        'X-Mailer': 'BridgeLink Contact Form',
        'X-Priority': '3',
      },
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
          <![endif]-->
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background-color: #f6f8fa; line-height: 1.6;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f6f8fa;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 30px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px 12px 0 0; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        📧 New Contact Form Submission
                      </h1>
                      <p style="margin: 8px 0 0; color: #e6e9ff; font-size: 16px; opacity: 0.9;">
                        Someone reached out through your website
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Contact Details -->
                  <tr>
                    <td style="padding: 30px 40px 20px;">
                      <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 10px; padding: 25px; border-left: 4px solid #667eea;">
                        <h2 style="margin: 0 0 20px; color: #2d3748; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                          <span style="background: #667eea; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 14px;">👤</span>
                          Contact Information
                        </h2>
                        
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                  <td style="width: 100px; color: #4a5568; font-weight: 600; font-size: 14px; vertical-align: top;">
                                    <span style="display: inline-block; background: #edf2f7; padding: 4px 8px; border-radius: 4px; font-size: 12px; color: #2d3748;">NAME</span>
                                  </td>
                                  <td style="color: #1a202c; font-size: 16px; font-weight: 500; padding-left: 20px;">
                                    ${name}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                  <td style="width: 100px; color: #4a5568; font-weight: 600; font-size: 14px; vertical-align: top;">
                                    <span style="display: inline-block; background: #edf2f7; padding: 4px 8px; border-radius: 4px; font-size: 12px; color: #2d3748;">EMAIL</span>
                                  </td>
                                  <td style="color: #1a202c; font-size: 16px; font-weight: 500; padding-left: 20px;">
                                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none; transition: color 0.2s;">${email}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                  <td style="width: 100px; color: #4a5568; font-weight: 600; font-size: 14px; vertical-align: top;">
                                    <span style="display: inline-block; background: #edf2f7; padding: 4px 8px; border-radius: 4px; font-size: 12px; color: #2d3748;">SUBJECT</span>
                                  </td>
                                  <td style="color: #1a202c; font-size: 16px; font-weight: 500; padding-left: 20px;">
                                    ${subject}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          ${
                            phone
                              ? `
                          <tr>
                            <td style="padding: 12px 0;">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                  <td style="width: 100px; color: #4a5568; font-weight: 600; font-size: 14px; vertical-align: top;">
                                    <span style="display: inline-block; background: #edf2f7; padding: 4px 8px; border-radius: 4px; font-size: 12px; color: #2d3748;">PHONE</span>
                                  </td>
                                  <td style="color: #1a202c; font-size: 16px; font-weight: 500; padding-left: 20px;">
                                    <a href="tel:${phone}" style="color: #667eea; text-decoration: none; transition: color 0.2s;">${phone}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          `
                              : ''
                          }
                        </table>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Message -->
                  <tr>
                    <td style="padding: 0 40px 30px;">
                      <div style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 10px; padding: 25px; position: relative;">
                        <h3 style="margin: 0 0 15px; color: #2d3748; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                          <span style="background: #48bb78; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 14px;">💬</span>
                          Message
                        </h3>
                        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #48bb78; font-size: 16px; line-height: 1.7; color: #2d3748; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          ${message}
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Quick Actions -->
                  <tr>
                    <td style="padding: 0 40px 30px;">
                      <div style="background: linear-gradient(135deg, #f0f4f8 0%, #e8eff5 100%); border-radius: 10px; padding: 20px; text-align: center;">
                        <h4 style="margin: 0 0 15px; color: #2d3748; font-size: 16px; font-weight: 600;">Quick Actions</h4>
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td style="text-align: center; padding: 0 5px;">
                              <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; transition: background-color 0.2s;">
                                📧 Reply via Email
                              </a>
                            </td>
                            ${
                              phone
                                ? `
                            <td style="text-align: center; padding: 0 5px;">
                              <a href="tel:${phone}" style="display: inline-block; padding: 10px 20px; background: #48bb78; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; transition: background-color 0.2s;">
                                📞 Call Now
                              </a>
                            </td>
                            `
                                : ''
                            }
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 40px 30px; background: #f8fafc; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;">
                      <div style="text-align: center; color: #718096; font-size: 13px;">
                        <p style="margin: 0 0 8px;">
                          <strong>📅 Received:</strong> ${new Date().toLocaleDateString(
                            'en-US',
                            {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              timeZoneName: 'short',
                            }
                          )}
                        </p>
                        <p style="margin: 0; font-size: 12px;">
                          This message was automatically sent from your BridgeLink website contact form.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      data: emailData,
      message: "Message sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        data: null,
        message: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    );
  }
}
