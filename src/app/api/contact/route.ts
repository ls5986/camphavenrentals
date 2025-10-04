import { NextRequest, NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations"
import { sendContactEmail } from "@/lib/mailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Try to send email via Resend
    const emailResult = await sendContactEmail(validatedData)
    
    if (emailResult.success) {
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      )
    } else {
      // Fallback to console.log if email fails
      console.log("Contact form submission (email failed):", validatedData)
      return NextResponse.json(
        { message: "Message received (email service unavailable)" },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error("Error processing contact form:", error)
    
    // Fallback to console.log for any errors
    try {
      const body = await request.json()
      console.log("Contact form submission (error fallback):", body)
    } catch (parseError) {
      console.error("Error parsing request body:", parseError)
    }
    
    return NextResponse.json(
      { message: "Message received" },
      { status: 200 }
    )
  }
}
