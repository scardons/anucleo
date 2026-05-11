import { useEffect, useRef } from 'react';
import { Star, Quote, Shield } from 'lucide-react';
import { useGSAP, staggerAnimateInView } from '@/hooks/use-gsap';
import testimonialsImage from '@/assets/testimonials-hero.jpg';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gsap = useGSAP();

  useEffect(() => {
    if (!gsap) return;
    
    staggerAnimateInView('.testimonial-card', {
      from: { opacity: 0, y: 60, scale: 0.95 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    });
  }, [gsap]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      rating: 5,
      text: "When someone sued my business for a massive amount, I was terrified. But Anucleo's umbrella policy covered everything. They saved my family's future and my business. I can't imagine what would have happened without them.",
      savings: "Lawsuit costs covered"
    },
    {
      name: "Michael Chen", 
      role: "Family of Four",
      rating: 5,
      text: "After our teenage son's car accident, we faced a huge lawsuit that would have bankrupted us. Anucleo not only covered everything but handled all the legal work. We slept peacefully knowing we were protected.",
      savings: "Assets fully protected"
    },
    {
      name: "Linda Martinez",
      role: "Retiree",
      rating: 5,
      text: "The agent took time to understand our situation and got us comprehensive coverage for less than we were paying before. When a neighbor slipped on our property, we were completely covered. Best decision we ever made.",
      savings: "Lower premiums + full protection"
    }
  ];

  const stats = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "50K+", label: "Families Protected" },
    { number: "Excellent", label: "Claims Success Rate" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20 mb-6">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">Real Stories, Real Protection</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            See Why Families Trust Anucleo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers say about how 
            Anucleo protected them when it mattered most.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card-hero group">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-12 w-12 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Savings Badge */}
              <div className="bg-success/10 border border-success/20 rounded-lg px-4 py-2 mb-6">
                <div className="text-sm font-semibold text-success text-center">
                  {testimonial.savings}
                </div>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src={testimonialsImage}
            alt="Happy insurance customers giving positive testimonials"
            className="w-full h-64 lg:h-80 object-cover rounded-3xl shadow-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-3xl flex items-end justify-center p-8">
            <div className="text-center text-foreground">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Join Thousands of Protected Families</h3>
              <p className="text-lg text-muted-foreground">Your story of protection starts with one conversation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;