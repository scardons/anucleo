import { useEffect, useRef } from 'react';
import { AlertTriangle, DollarSign, Home, Car, Briefcase } from 'lucide-react';
import { useGSAP, animateInView } from '@/hooks/use-gsap';
import problemImage from '@/assets/problem-section.jpg';

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gsap = useGSAP();

  useEffect(() => {
    if (!gsap) return;
    
    animateInView('.problem-content', {
      from: { opacity: 0, x: -60 },
      to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    });

    animateInView('.problem-image', {
      from: { opacity: 0, x: 60 },
      to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    });

    animateInView('.risk-item', {
      from: { opacity: 0, y: 30, scale: 0.9 },
      to: { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    });
  }, [gsap]);

  const risks = [
    {
      icon: Briefcase,
      title: "Your Business Operations",
      value: "At Risk",
      description: "One lawsuit could force your business to close permanently"
    },
    {
      icon: Home,
      title: "Commercial Property", 
      value: "Exposed",
      description: "Equipment, inventory, and facilities are vulnerable to damage claims"
    },
    {
      icon: DollarSign,
      title: "Business Assets & Cash Flow",
      value: "Everything",
      description: "Lawsuits can drain business accounts and destroy years of profit"
    },
    {
      icon: Car,
      title: "Professional Liability",
      value: "Vulnerable", 
      description: "Errors, omissions, or accidents can trigger massive damage claims"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="problem-content space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full border border-destructive/20">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-medium">The Hidden Danger</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                What Your <span className="text-destructive">Business Risks</span> Every Day
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                You've worked hard to build your business, but a single lawsuit could destroy everything. 
                Most business owners don't realize they're operating with millions in liability exposure every single day.
              </p>
            </div>

            <div className="space-y-4">
              {risks.map((risk, index) => (
                <div 
                  key={index}
                  className="risk-item bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-destructive/10 rounded-xl">
                      <risk.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{risk.title}</h3>
                        <span className="text-xl font-bold text-destructive">{risk.value}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{risk.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-destructive mb-2">The Business Reality:</h3>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">60% of small businesses</span> have inadequate liability coverage, 
                but the average commercial lawsuit can be devastating. 
                That's a gap that could destroy your business and personal assets overnight.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="problem-image">
            <div className="relative">
              <img
                src={problemImage}
                alt="Business owner concerned about liability and commercial insurance protection"
                className="w-full h-auto rounded-3xl shadow-hero object-cover"
              />
              
              {/* Floating Warning Badge */}
              <div className="absolute -bottom-6 -right-6 bg-destructive text-destructive-foreground rounded-2xl p-6 shadow-elegant">
                <div className="text-center">
                  <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-xl font-bold">HIGH RISK</div>
                  <div className="text-sm opacity-90">Business Lawsuits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;