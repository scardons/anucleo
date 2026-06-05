const faqEntries = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    response: "Hello! Welcome to Anucleo Insurance. How can I help you today? You can ask me about our insurance services, getting a quote, contact information, or anything else about our agency.",
  },
  {
    keywords: ['services', 'offer', 'provide', 'products', 'insurance', 'coverage', 'do you'],
    response: "At Anucleo Insurance, we offer a comprehensive range of insurance solutions including:\n\n• **Commercial Insurance** – General liability, property, and business coverage\n• **Auto Insurance** – Personal and commercial auto policies\n• **Workers Compensation** – Coverage for employee injuries and illnesses\n• **Umbrella Insurance** – Extra liability protection beyond standard policies\n\nWhich one would you like to know more about?",
  },
  {
    keywords: ['commercial', 'business', 'general liability', 'property insurance', 'bop'],
    response: "Our **Commercial Insurance** solutions protect your business from unexpected risks. We offer:\n\n• General Liability Insurance\n• Commercial Property Insurance\n• Business Owner's Policy (BOP)\n• Professional Liability\n• And more tailored coverage\n\nWould you like to get a quote for commercial insurance? Just visit our [Get a Quote](/get-quote) page or I can help you get started!",
  },
  {
    keywords: ['auto', 'car', 'vehicle', 'automobile', 'personal auto', 'commercial auto', 'truck'],
    response: "We offer both **Personal Auto** and **Commercial Auto** insurance:\n\n• **Personal Auto** – Coverage for your personal vehicles with liability, collision, and comprehensive options\n• **Commercial Auto** – For businesses that operate vehicles, including trucks, vans, and fleet coverage\n\nGet a quote today and see how much you can save!",
  },
  {
    keywords: ['workers comp', 'workers compensation', 'work comp', 'workers', 'employee injury', 'workplace injury'],
    response: "**Workers Compensation** insurance covers medical expenses and lost wages for employees who get injured or become ill on the job. It's required in most states for businesses with employees.\n\nWe can help you find affordable workers comp coverage tailored to your industry. Get a quote to see your options!",
  },
  {
    keywords: ['umbrella', 'excess liability', 'extra coverage', 'additional liability', 'personal liability'],
    response: "**Umbrella Insurance** provides an extra layer of liability protection beyond your existing policies. It kicks in when your auto, home, or business insurance limits are reached.\n\nThis is essential for protecting your assets from major claims or lawsuits. We can help you determine the right amount of umbrella coverage for your needs.",
  },
  {
    keywords: ['quote', 'estimate', 'get a quote', 'price', 'cost', 'rate', 'premium', 'how much', 'pricing'],
    response: "Getting a quote is easy! You can:\n\n1. **Visit our website** – Go to our [Get a Quote](/get-quote) page and fill out the quick form\n2. **Call us** – Speak with an agent directly at (973) 636-1104\n3. **Visit our office** – Stop by for a personalized consultation\n\nWould you like me to help you get started with a quote?",
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'get in touch', 'number'],
    response: "You can reach Anucleo Insurance through:\n\n• **Phone:** (973) 636-1104\n• **Email:** services@anucleo.com\n• **Office:** 1124C US Highway 46, Suite 201, Woodland Park, NJ 07424\n\nOur team is ready to assist you with all your insurance needs!",
  },
  {
    keywords: ['hours', 'open', 'office hours', 'business hours', 'when', 'schedule', 'appointment'],
    response: "Our office hours are:\n\n• **Monday – Friday:** 9:00 AM – 5:00 PM\n• **Saturday – Sunday:** Closed\n\nWe also offer virtual appointments outside of business hours. Call us at (973) 636-1104 to schedule!",
  },
  {
    keywords: ['claim', 'file a claim', 'report a claim', 'accident', 'damage', 'loss', 'injured', 'incident'],
    response: "To file a claim, please contact us as soon as possible:\n\n• **Call:** (973) 636-1104\n• **Email:** services@anucleo.com\n\nOur team will guide you through the process step by step. Have your policy number and details about the incident ready when you reach out.",
  },
  {
    keywords: ['certificate', 'coi', 'proof of insurance', 'certificate of insurance', 'evidence'],
    response: "You can request a **Certificate of Insurance (COI)** through our client portal:\n\n1. [Log in to your account](/login)\n2. Go to the **Request Certificate** section\n3. Fill in the required details\n4. Your certificate will be processed promptly\n\nFor existing clients, you can also view and download certificates from the **Certificate Library** in your dashboard.",
  },
  {
    keywords: ['login', 'portal', 'dashboard', 'client portal', 'account', 'sign in', 'online access', 'my account'],
    response: "Our **Client Portal** gives you 24/7 access to:\n\n• View your policies and coverage details\n• Check payment schedules and history\n• Request Certificates of Insurance (COIs)\n• Browse your certificate library\n• Contact support\n\nVisit the [Client Portal](/login) to sign in. If you don't have an account yet, contact us to set one up!",
  },
  {
    keywords: ['about', 'who', 'company', 'agency', 'history', 'team', 'mission', 'values'],
    response: "**Anucleo Insurance** is a trusted independent insurance agency based in Woodland Park, NJ. We are committed to providing personalized insurance solutions for individuals and businesses.\n\nOur team brings years of experience and a dedication to protecting what matters most to you. We work with top-rated carriers to find the best coverage at competitive rates.\n\nVisit our [About](/about) page to learn more about our team and values!",
  },
  {
    keywords: ['location', 'address', 'where', 'office', 'directions', 'visit', 'woodland park'],
    response: "Our office is located at:\n\n**1124C US Highway 46, Suite 201**\n**Woodland Park, NJ 07424**\n\nWe're conveniently located on US Highway 46 with easy access and parking. Stop by during business hours or give us a call at (973) 636-1104!",
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "You're welcome! We're here to help with all your insurance needs. If you have any more questions, don't hesitate to ask. Have a great day! 😊",
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'talk later', 'farewell'],
    response: "Thank you for reaching out to Anucleo Insurance! If you ever need assistance, we're just a message away. Stay safe and have a wonderful day!",
  },
];

function findBestResponse(message) {
  const lower = message.toLowerCase().trim();

  if (!lower) {
    return "Hi! How can I help you today?";
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of faqEntries) {
    let score = 0;
    for (const keyword of entry.keywords) {
      const kw = keyword.toLowerCase();
      if (lower === kw) {
        score += 10;
      } else if (lower.includes(kw)) {
        score += 3;
      } else {
        const words = kw.split(' ');
        const matchCount = words.filter(w => lower.includes(w)).length;
        if (words.length > 1 && matchCount >= words.length - 1) {
          score += matchCount * 2;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore >= 3) {
    return bestMatch.response;
  }

  return "I'm not sure I understand your question. Could you try rephrasing it? You can ask me about our insurance services, getting a quote, claims, or contact information. Or feel free to call us at (973) 636-1104 for immediate assistance!";
}

export { findBestResponse };
