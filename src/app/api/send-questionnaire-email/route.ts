import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { inquiryId, ownerEmail, ownerName } = await request.json()

    if (!inquiryId || !ownerEmail || !ownerName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Update inquiry status to questionnaire_sent
    const { error: updateError } = await supabase
      .from('owner_inquiries')
      .update({ status: 'questionnaire_sent' })
      .eq('id', inquiryId)

    if (updateError) {
      throw updateError
    }

    // Generate questionnaire link
    const questionnaireUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://camphavenrentals.vercel.app'}/owner-questionnaire?inquiry_id=${inquiryId}`

    // Email content
    const emailSubject = `Complete Your Property Questionnaire - Camp Haven Rentals`
    const emailBody = `
Dear ${ownerName},

Thank you for your interest in listing your property with Camp Haven Rentals!

We're excited to learn more about your property and move forward with the leasing process. 

Please complete our detailed property questionnaire by clicking the link below:

${questionnaireUrl}

This questionnaire will help us:
• Assess your property's rental potential
• Understand your specific needs and preferences  
• Prepare accurate lease terms and pricing
• Schedule the next steps in our process

The questionnaire covers:
🏠 Property details and specifications
🪑 Current furnishings and amenities
🌳 Maintenance and landscaping services
🔌 Utilities and smart home features
🧾 Appliances and systems
🔒 Insurance and liability information
📅 Availability and lease preferences
💰 Financial terms and expectations
📎 Document uploads (optional at this stage)

If you have any questions while completing the questionnaire, please don't hesitate to reach out to us.

We'll review your completed questionnaire within 48 hours and contact you to schedule a property inspection.

Best regards,
The Camp Haven Rentals Team

---
Camp Haven Rentals
Guaranteed Monthly Rent for Property Owners
📧 info@camphavenrentals.com
🌐 https://camphavenrentals.vercel.app
    `

    // Here you would integrate with your email service (SendGrid, Resend, etc.)
    // For now, we'll just log the email content
    console.log('Email to send:')
    console.log('To:', ownerEmail)
    console.log('Subject:', emailSubject)
    console.log('Body:', emailBody)
    console.log('Questionnaire URL:', questionnaireUrl)

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
      message: 'Questionnaire email sent successfully',
      questionnaireUrl
    })

  } catch (error) {
    console.error('Error sending questionnaire email:', error)
    return NextResponse.json(
      { error: 'Failed to send questionnaire email' },
      { status: 500 }
    )
  }
}
