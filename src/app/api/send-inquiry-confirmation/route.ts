import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { ownerEmail, ownerName, propertyAddress } = await request.json()

    if (!ownerEmail || !ownerName || !propertyAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email content
    const emailSubject = `Thank You for Your Interest - Camp Haven Rentals`
    const emailBody = `
Dear ${ownerName},

Thank you for your interest in listing your property at ${propertyAddress} with Camp Haven Rentals!

We've received your inquiry and our team will contact you within 24 hours to discuss next steps.

Here's what happens next:
1. 📞 Our team will call you within 24 hours to discuss your property
2. 📋 We'll send you a detailed property questionnaire to complete
3. 🔍 We'll review your property details and assess rental potential
4. 🏠 We'll schedule a property inspection
5. 📝 We'll draft your lease agreement with guaranteed rent terms

Why Choose Camp Haven Rentals?
✅ Guaranteed monthly rent regardless of occupancy
✅ We cover all wear-and-tear and guest incidents
✅ Professional property management and maintenance
✅ Transparent reporting through our owner portal
✅ No upfront costs or hidden fees

If you have any immediate questions, please don't hesitate to reach out to us.

We look forward to working with you!

Best regards,
The Camp Haven Rentals Team

---
Camp Haven Rentals
Guaranteed Monthly Rent for Property Owners
📧 info@camphavenrentals.com
📞 (555) 123-4567
🌐 https://camphavenrentals.vercel.app

P.S. Follow us on social media for property management tips and market updates!
    `

    // Here you would integrate with your email service
    console.log('Confirmation email to send:')
    console.log('To:', ownerEmail)
    console.log('Subject:', emailSubject)
    console.log('Body:', emailBody)

    // TODO: Implement actual email sending
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'Camp Haven Rentals <noreply@camphavenrentals.com>',
    //   to: [ownerEmail],
    //   subject: emailSubject,
    //   html: emailBody.replace(/\n/g, '<br>'),
    // })

    return NextResponse.json({
      success: true,
      message: 'Confirmation email sent successfully'
    })

  } catch (error) {
    console.error('Error sending confirmation email:', error)
    return NextResponse.json(
      { error: 'Failed to send confirmation email' },
      { status: 500 }
    )
  }
}
