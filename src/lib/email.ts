import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marcellodipierro@stormxdigital.com',
    // Use an App Password instead of your regular password
    // Generate one at https://myaccount.google.com/apppasswords
    pass: 'Marcello981!'
  }
});

export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) => {
  const { name, email, phone, company, message } = data;

  const mailOptions = {
    from: 'marcellodipierro@stormxdigital.com',
    to: 'marcellodipierro@stormxdigital.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Error sending email' };
  }
};