import { Resend } from "resend"
import { ContactFormData } from "./validations"
import { siteConfig } from "@/site.config"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function sendContactEmail(data: ContactFormData) {
  try {
    if (!resend) {
      console.log("Resend not configured, logging contact form submission:", data)
      return { success: false, error: "Email service not configured" }
    }

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Market:</strong> ${data.market}</p>
      ${data.propertyUrl ? `<p><strong>Property URL/Address:</strong> ${data.propertyUrl}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `

    const result = await resend.emails.send({
      from: "Camp Haven Rentals <noreply@camphavenrentals.com>",
      to: [siteConfig.email],
      subject: `New Property Inquiry from ${data.name}`,
      html: emailContent,
    })

    console.log("Email sent successfully:", result)
    return { success: true, data: result }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
