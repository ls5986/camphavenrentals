export const siteConfig = {
  name: "Camp Haven Rentals",
  email: "info@camphavenrentals.com",
  tagline: "Guaranteed Rent. Boutique Care. Off-Grid Expertise.",
  description: "We lease and operate homes in Joshua Tree, Big Bear, and beyond — specializing in remote, utility-challenged properties.",
  url: "https://camphavenrentals.com",
  
  primaryMarkets: [
    {
      name: "Joshua Tree",
      description: "Desert climate, septic/well, design-focused demand",
      features: ["Desert climate", "Septic/well systems", "Design-focused demand"]
    },
    {
      name: "Big Bear",
      description: "Winterization, snow removal, bear boxes",
      features: ["Winterization", "Snow removal", "Bear boxes"]
    }
  ],
  
  additionalMarkets: [
    {
      name: "Yucca Valley",
      description: "High desert community near Joshua Tree",
      features: ["High desert", "Joshua Tree proximity", "Affordable entry"]
    },
    {
      name: "Morongo Basin",
      description: "Desert region with unique landscapes",
      features: ["Unique landscapes", "Desert views", "Remote properties"]
    },
    {
      name: "Idyllwild",
      description: "Mountain retreat with cabin culture",
      features: ["Mountain retreat", "Cabin culture", "Forest setting"]
    },
    {
      name: "Lake Arrowhead",
      description: "Alpine lake community",
      features: ["Alpine lake", "Mountain views", "Year-round appeal"]
    },
    {
      name: "Palm Springs",
      description: "Mid-century modern desert oasis",
      features: ["Mid-century modern", "Desert oasis", "High-end market"]
    },
    {
      name: "Central Coast",
      description: "Coastal properties with ocean views",
      features: ["Ocean views", "Coastal climate", "Tourist destination"]
    },
    {
      name: "Eastern Sierra",
      description: "Mammoth/Bishop region with mountain access",
      features: ["Mountain access", "Ski resorts", "Outdoor recreation"]
    },
    {
      name: "Sedona (AZ)",
      description: "Red rock formations and spiritual retreats",
      features: ["Red rock formations", "Spiritual retreats", "Vortex sites"]
    },
    {
      name: "Moab (UT)",
      description: "Adventure capital with national parks",
      features: ["National parks", "Adventure sports", "Unique geology"]
    },
    {
      name: "Santa Fe/Taos (NM)",
      description: "Art scene and high desert culture",
      features: ["Art scene", "High desert", "Cultural heritage"]
    }
  ],
  
  profitShare: {
    threshold: 3000, // monthly profit threshold
    percent: 0.20    // owner share above threshold
  },
  
  lease: {
    termMonthsMin: 12,
    termMonthsMax: 36,
    ownerBreakNoticeDays: 60
  },
  
  valueProps: [
    {
      title: "Guaranteed Rent",
      description: "Fixed monthly income regardless of occupancy",
      icon: "DollarSign"
    },
    {
      title: "All Wear-and-Tear Covered",
      description: "You're not billed for guest use",
      icon: "Shield"
    },
    {
      title: "Documented Inspections",
      description: "Before + after each stay, logged with photos",
      icon: "Camera"
    },
    {
      title: "Owner-Friendly Lease Terms",
      description: "1–3 year leases, with a break clause",
      icon: "FileText"
    }
  ],
  
  timeline: [
    {
      week: "Week 1",
      title: "Pre-Lease Inspection & Baseline Report",
      description: "We verify water, septic/well, HVAC, electrical, and safety systems. Photos/video + signed baseline."
    },
    {
      week: "Weeks 2–3",
      title: "Furnish + Insurance Bound",
      description: "We furnish, insure, and optimize your property for maximum guest appeal."
    },
    {
      week: "Week 4",
      title: "Go Live",
      description: "Your property is live and generating income with our full management."
    }
  ],
  
  dealStructures: [
    {
      name: "Master Lease",
      description: "Guaranteed Rent, we assume wear/tear",
      details: "We pay you a fixed monthly rent regardless of occupancy. All wear and tear from guest use is covered by us."
    },
    {
      name: "Profit-Share Hybrid",
      description: "Base Rent + % above threshold",
      details: "You receive a base rent plus a percentage of profits above our threshold amount."
    },
    {
      name: "Acquisition Path",
      description: "Option/ROFR if you want to sell",
      details: "We can provide an option to purchase or right of first refusal if you decide to sell."
    }
  ],
  
  faqs: [
    {
      question: "Who pays for normal wear and tear?",
      answer: "We do. Unlike standard leases, we assume all liability for wear and tear from constant guest use. Owners aren't billed for normal guest usage."
    },
    {
      question: "What if appliances break from heavy usage?",
      answer: "We cover all appliance repairs and replacements due to guest usage, including refrigerators, dishwashers, washing machines, and dryers. As long as the appliance is less than 5 years old at lease start, we handle all maintenance and replacement costs."
    },
    {
      question: "What about hot tubs and water heaters?",
      answer: "Hot tubs, water heaters, and pool equipment are fully covered under our wear-and-tear policy. We handle all maintenance, chemical balancing, and replacement costs for equipment under 5 years old. This includes increased usage from multiple guest turnovers."
    },
    {
      question: "Do you cover HVAC system damage?",
      answer: "Yes. HVAC systems, including central air, heat pumps, and ductwork, are covered under our comprehensive wear-and-tear policy. We handle all maintenance, filter changes, and system replacements for units under 5 years old."
    },
    {
      question: "What about plumbing issues?",
      answer: "All plumbing repairs due to guest usage are covered, including clogs, leaks, and fixture replacements. We also handle septic system maintenance and well pump issues that may arise from increased usage."
    },
    {
      question: "Are flooring and paint covered?",
      answer: "Yes. Carpet cleaning, hardwood refinishing, tile repairs, and interior/exterior painting due to guest wear are all covered under our policy. We maintain the property to high standards."
    },
    {
      question: "What if something was broken before lease start?",
      answer: "It's carved out in our baseline inspection report. We document everything before we start, so you're only responsible for pre-existing conditions. This includes appliances over 5 years old that were already showing wear."
    },
    {
      question: "What's the 5-year rule for appliances?",
      answer: "For appliances and major systems under 5 years old at lease start, we cover all maintenance, repairs, and replacements due to guest usage. For older equipment, we cover normal wear-and-tear but may charge back for pre-existing issues."
    },
    {
      question: "Do you handle regular maintenance?",
      answer: "Yes. We perform all routine maintenance including filter changes, deep cleaning, pest control, landscaping, and seasonal preparations. This is included in our management service."
    },
    {
      question: "Can I break the lease?",
      answer: "Yes, with 60–90 days' notice. We understand that circumstances change, and you may need to sell or reclaim your property. We'll work with you on a smooth transition."
    },
    {
      question: "What if STR rules change?",
      answer: "We pivot to mid-term or corporate rentals. We stay compliant with local regulations and adapt our strategy as needed. Your guaranteed rent continues regardless of rental type."
    },
    {
      question: "Do I pay for furnishings?",
      answer: "No, we provide and maintain all furnishings. We handle the complete setup and ongoing maintenance of all guest amenities, including furniture, linens, and kitchen equipment."
    },
    {
      question: "What markets do you operate in?",
      answer: "We focus on off-grid and hard-to-rent properties in Joshua Tree, Big Bear, Sedona, Moab, and other remote markets with low neighbor density and unique appeal."
    },
    {
      question: "How do you handle insurance?",
      answer: "You keep your landlord policy, and we layer STR liability insurance plus vendor certificates of insurance for all service providers. We carry comprehensive coverage for all guest-related incidents."
    },
    {
      question: "What documentation do you provide?",
      answer: "We provide baseline inspection reports, before/after stay photo logs, maintenance records, and monthly performance reports with full transparency. Everything is documented and accessible through our owner portal."
    },
    {
      question: "What about emergency repairs?",
      answer: "We handle all emergency repairs 24/7. Our local teams respond immediately to any urgent issues, and we coordinate with qualified contractors to resolve problems quickly."
    },
    {
      question: "Do you cover landscaping and exterior maintenance?",
      answer: "We cover guest-related wear-and-tear on outdoor amenities and furniture. General property maintenance like landscaping, gutter cleaning, pest control, and snow removal remain the landlord's responsibility. We can coordinate these services for you at competitive rates."
    },
    {
      question: "What about seasonal maintenance like gutters and snow removal?",
      answer: "Seasonal property maintenance (gutters, snow removal, pest control, landscaping) is the landlord's responsibility. We can coordinate these services for you at competitive rates with no markup, or you can handle them yourself with your preferred vendors."
    }
  ]
} as const
