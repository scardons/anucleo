import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why do I need umbrella insurance if I already have auto and home insurance?",
      answer: "Your auto and home policies have liability limits that might not be enough if you're sued for a serious accident. Umbrella insurance provides extra protection beyond those limits. For example, if you cause a car accident and someone sues you for a large amount, but your auto policy has limited coverage, you'd be personally responsible for the difference. Umbrella insurance would cover that gap, protecting your assets and future income."
    },
    {
      question: "How much does umbrella insurance actually cost?",
      answer: "Most people are surprised by how affordable umbrella insurance is. Umbrella policies are very cost-effective for the substantial protection they provide. The cost depends on your risk factors like how many homes and cars you own, your driving record, and where you live. When you consider the extensive protection it provides, it's one of the best investments you can make."
    },
    {
      question: "What exactly does umbrella insurance cover?",
      answer: "Umbrella insurance covers liability claims beyond your standard policies, including: bodily injury from car accidents, property damage you cause, personal injury claims like libel or slander, legal defense costs, and even incidents that happen anywhere in the world. It also covers family members living in your household. Think of it as a financial safety net that catches what other policies miss."
    },
    {
      question: "How much coverage do I actually need?",
      answer: "A good rule of thumb is to have coverage equal to your net worth plus future earning potential. If you have substantial assets and earning potential, consider comprehensive coverage. Many financial advisors recommend significant coverage for anyone with substantial assets or high income. We'll help you calculate the right amount based on your specific situation during your free consultation."
    },
    {
      question: "Can I be sued for more than I'm worth?",
      answer: "Absolutely. Lawsuits can target your future earnings, not just current assets. If you earn a good income, that's potentially significant future income that could be garnished. Even if you don't have much now, if you have earning potential, you're at risk. Plus, legal defense costs alone can be substantial, even if you win the case."
    },
    {
      question: "How quickly can I get coverage?",
      answer: "Once we complete your application, most umbrella policies can be issued within 24-48 hours. We'll review your current auto and home policies to ensure they meet the requirements, help you make any needed adjustments, and get your umbrella coverage active as quickly as possible. Don't wait – every day without protection is a day of unnecessary risk."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(59,130,246,0.02)_40%,rgba(59,130,246,0.02)_60%,transparent_60%)] bg-[length:40px_40px]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20 mb-6">
            <HelpCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Get Answers</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Common Questions About Protection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand insurance can be confusing. Here are honest answers to the questions 
            most families ask about protecting their assets and future.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-xl bg-card shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 shadow-hero">
          <h3 className="text-2xl font-bold text-hero-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-hero-foreground/90 mb-6">
            Our insurance experts are here to provide personalized answers for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-card text-primary hover:bg-card/90 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Free Consultation
            </Button>
            <Button className="bg-hero-foreground/10 text-hero-foreground border border-hero-foreground/20 hover:bg-hero-foreground/20 px-8 py-3 font-semibold">
              Call (201) 977-8899
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;