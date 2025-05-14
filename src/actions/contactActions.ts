"use server";

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type ContactFormInput = z.infer<typeof formSchema>;

export async function sendContactMessage(formData: ContactFormInput): Promise<{ success: boolean; error?: string }> {
  const validatedFields = formSchema.safeParse(formData);

  if (!validatedFields.success) {
    console.error("Server Action Validation Error:", validatedFields.error.flatten().fieldErrors);
    return {
        success: false,
        error: "Invalid form data provided."
     };
  }

  const { name, email, message } = validatedFields.data;

  console.log('Received contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // --- Placeholder for actual email sending logic ---
  // In a real application, you would integrate an email service like:
  // - Nodemailer (if running Node.js backend)
  // - Resend (https://resend.com/)
  // - SendGrid (https://sendgrid.com/)
  // - AWS SES (Simple Email Service)
  //
  // Example using a hypothetical email service function:
  // try {
  //   await emailService.send({
  //     from: 'your-website@example.com', // Or use a dedicated sending address
  //     to: 'er.adityamewada@gmail.com',
  //     replyTo: email, // Set the reply-to header to the sender's email
  //     subject: `New Contact Form Message from ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  //     // html: `<p>...</p>` // Optional HTML version
  //   });
  //   console.log('Email supposedly sent successfully.');
       return { success: true };
  // } catch (error) {
  //   console.error('Failed to send email:', error);
  //   return { success: false, error: 'Failed to send message due to a server error.' };
  // }
  // --- End of Placeholder ---

  // For now, just simulate success
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  return { success: true };
}
