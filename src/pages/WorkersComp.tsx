import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HardHat, Shield, CheckCircle, ArrowRight, Users, DollarSign, Clock, Phone, AlertTriangle, Heart, Wrench, Building, FileText, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLenis } from '@/hooks/use-lenis';
import { useGSAP, animateInView, staggerAnimateInView } from '@/hooks/use-gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import processGuide from '@/assets/process-guide.jpg';

const WorkersComp = () => {
  useLenis();
  const gsap = useGSAP();

  useEffect(() => {
    if (!gsap) return;
    animateInView('.fade-in-up');
    animateInView('.fade-in-left');
    animateInView('.fade-in-right');
    staggerAnimateInView('.coverage-card');
    staggerAnimateInView('.discount-card');
    staggerAnimateInView('.scenario-card');
  }, [gsap]);

  const workplaceRisks = [
    {
      icon: HardHat,
      title: "Construction Worker Falls",
      scenario: "A roofer falls 20 feet and suffers permanent spinal injuries requiring lifetime care.",
      cost: "$4,200,000",
      coverage: "Workers' comp covers medical care and disability payments"
    },
    {
      icon: Building,
      title: "Office Worker Repetitive Strain",
      scenario: "Administrative assistant develops carpal tunnel requiring surgery and months off work.",
      cost: "$65,000",
      coverage: "Covers medical treatment and lost wages during recovery"
    },
    {
      icon: Wrench,
      title: "Machinery Accident",
      scenario: "Factory worker's hand is caught in equipment, requiring amputation and rehabilitation.",
      cost: "$850,000",
      coverage: "Provides vocational rehabilitation and lifetime disability benefits"
    },
    {
      icon: AlertTriangle,
      title: "Workplace Violence Lawsuit",
      scenario: "Employee injured by coworker sues for inadequate workplace safety measures.",
      cost: "$2,100,000",
      coverage: "Employer liability coverage protects against workplace injury lawsuits"
    }
  ];

  const coverageOptions = [
    {
      icon: Shield,
      title: 'Medical Coverage',
      description: 'Covers all medical expenses related to workplace injuries, from emergency treatment to long-term rehabilitation.',
      features: [
        'Emergency room and hospital care',
        'Doctor visits and specialist treatments',
        'Physical therapy and rehabilitation',
        'Prescription medications',
        'Medical equipment and prosthetics'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: DollarSign,
      title: 'Lost Wage Benefits',
      description: 'Provides partial wage replacement for employees unable to work due to job-related injuries or illnesses.',
      features: [
        'Temporary total disability payments',
        'Temporary partial disability benefits',
        'Permanent disability compensation',
        'Typically 66.7% of average weekly wage',
        'Maximum weekly benefits set by state'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Heart,
      title: 'Death Benefits',
      description: 'Provides financial support to families of employees who die from work-related injuries or illnesses.',
      features: [
        'Funeral and burial expenses up to $10,000',
        'Weekly benefits to surviving spouse',
        'Benefits for dependent children',
        'Lump sum payments where applicable',
        'Continuation of medical benefits for dependents'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Wrench,
      title: 'Vocational Rehabilitation',
      description: 'Helps injured workers return to employment through retraining and job placement services.',
      features: [
        'Skills assessment and career counseling',
        'Job retraining and education funding',
        'Job placement assistance',
        'Workplace accommodations',
        'Return-to-work programs'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Scale,
      title: 'Employer Liability Protection',
      description: 'Protects against lawsuits from employees for workplace injuries beyond standard workers\' comp coverage.',
      features: [
        'Third-party over suits',
        'Consequential bodily injury claims',
        'Care and loss of services claims',
        'Dual capacity suits',
        'Legal defense costs covered'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Clock,
      title: '24/7 Claims Management',
      description: 'Round-the-clock claims reporting and management to ensure prompt care for injured employees.',
      features: [
        '24/7 claims reporting hotline',
        'Dedicated claims adjusters',
        'Medical provider networks',
        'Return-to-work coordination',
        'Claims status tracking online'
      ],
      importance: 'Valuable Add-On'
    }
  ];

  const industryBenefits = [
    { title: 'Experience Modification', savings: 'Up to 30%', description: 'Good safety record reduces your experience mod', requirement: 'Maintain low claim frequency and severity' },
    { title: 'Safety Program Discount', savings: 'Up to 15%', description: 'Documented safety programs and training', requirement: 'Written safety program with regular training' },
    { title: 'Drug-Free Workplace', savings: 'Up to 10%', description: 'Certified drug-free workplace program', requirement: 'DOL-approved drug testing program' },
    { title: 'Early Return to Work', savings: 'Up to 20%', description: 'Programs that get employees back to work faster', requirement: 'Formal light duty and return-to-work policies' },
    { title: 'Safety Equipment', savings: 'Up to 5%', description: 'Proper safety equipment and PPE programs', requirement: 'Documentation of safety equipment usage' },
    { title: 'Claims Management', savings: 'Up to 25%', description: 'Proactive claims management and nurse case management', requirement: 'Work with carrier-approved medical providers' }
  ];

  const testimonials = [
    {
      name: "Robert K.",
      location: "Tampa, FL",
      story: "When our carpenter fell from scaffolding, Anucleo handled everything seamlessly. The employee got excellent care and we avoided any legal issues.",
      claim: "$185,000 claim handled",
      rating: 5
    },
    {
      name: "Maria S.",
      location: "Phoenix, AZ", 
      story: "Anucleo helped us implement safety programs that reduced our workers' comp costs. Their risk management team is incredible.",
      savings: "$28,000/year saved",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Is workers\' compensation insurance required for my business?',
      answer: 'In most states, yes. Requirements vary by state but generally apply if you have employees. Some states require coverage with just one employee, others have higher thresholds. Independent contractors typically aren\'t covered, but misclassifying employees as contractors can result in serious penalties.'
    },
    {
      question: 'How are workers\' compensation premiums calculated?',
      answer: 'Premiums are based on your payroll, classification codes for different types of work, and your experience modification rate. Riskier jobs (construction, manufacturing) cost more than office work. Your claims history significantly impacts your rates through the experience modification factor.'
    },
    {
      question: 'What should I do when an employee is injured at work?',
      answer: 'First, ensure the employee gets immediate medical attention if needed. Report the injury to us within 24 hours, document the incident thoroughly, and cooperate with the claims investigation. Never admit fault or discuss details beyond the facts of what happened.'
    },
    {
      question: 'Can employees sue my business if they\'re covered by workers\' comp?',
      answer: 'Generally no - workers\' compensation provides "exclusive remedy," meaning employees can\'t sue for workplace injuries covered by workers\' comp. However, there are exceptions for intentional acts, third-party liability, or situations outside the scope of employment.'
    },
    {
      question: 'How can I reduce my workers\' compensation costs?',
      answer: 'Focus on workplace safety through training programs, safety equipment, and hazard elimination. Implement return-to-work programs, maintain accurate job classifications, and work with your carrier on claims management. Consider higher deductibles if your business has strong cash flow.'
    },
    {
      question: 'What happens if I don\'t carry workers\' compensation insurance?',
      answer: 'Operating without required workers\' comp insurance can result in significant fines, criminal charges, and personal liability for all workplace injuries. You could face stop-work orders, license suspension, and be personally responsible for unlimited medical costs and lost wages.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Workers Compensation Insurance | Protect Your Employees & Business | Anucleo</title>
        <meta name="description" content="Comprehensive workers compensation insurance from Anucleo. Protect your employees and business from workplace injury costs. Required coverage with expert claims management and competitive rates." />
        <meta name="keywords" content="workers compensation, workers comp insurance, workplace injury insurance, employee protection, employer liability, workers comp quotes, business insurance" />
        <link rel="canonical" href="/workers-comp" />
        <meta property="og:title" content="Workers Compensation Insurance | Protect Your Employees & Business | Anucleo" />
        <meta property="og:description" content="Get comprehensive workers compensation insurance from Anucleo. Protect employees and your business from workplace injury costs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/workers-comp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Workers Compensation Insurance",
            "provider": {
              "@type": "Organization", 
              "name": "Anucleo Insurance",
              "url": "https://anucleo.com",
              "telephone": "(201) 977-8899"
            },
            "description": "Comprehensive workers compensation insurance covering workplace injuries, medical costs, lost wages, and employer liability protection",
            "areaServed": "United States",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Workers Compensation Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Medical Coverage"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Lost Wage Benefits"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 min-h-screen bg-gradient-trust flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left space-y-8">
              <div>
                <p className="text-lg font-semibold text-primary uppercase tracking-wider mb-4">
                  Protect Your Most Valuable Asset
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="text-gradient">Workers Compensation</span> That Protects Everyone
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Every workplace injury could bankrupt your business and devastate your employees' lives. 
                  Our comprehensive workers' compensation insurance protects both your team and your company 
                  from the financial catastrophe of workplace accidents.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-quote">
                  <Button className="btn-hero group">
                    Get Workers Comp Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="btn-trust">
                    <Phone className="mr-2 h-5 w-5" />
                    Speak to Expert
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">50K+</div>
                  <div className="text-sm text-muted-foreground">Employees Protected</div>
                </div>
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Claims Support</div>
                </div>
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Claims Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="fade-in-right">
              <img
                src={processGuide}
                alt="Workers compensation insurance protecting employees and employers from workplace injury costs"
                className="w-full h-auto rounded-3xl shadow-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation - Workplace Risks */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              The <span className="text-destructive">Hidden Dangers</span> Every Business Faces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              2.8 million workplace injuries occur annually in the US. Without workers' compensation, 
              any one of these incidents could destroy your business and ruin your employees' lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {workplaceRisks.map((risk, index) => (
              <div key={index} className="scenario-card bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-destructive/10 rounded-xl">
                    <risk.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{risk.title}</h3>
                    <p className="text-muted-foreground mb-3">{risk.scenario}</p>
                    <div className="text-2xl font-bold text-destructive mb-2">{risk.cost}</div>
                    <p className="text-sm text-success font-medium">{risk.coverage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8 text-center fade-in-up">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-destructive mb-4">The Reality of Workplace Injuries</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">$170B</div>
                <div className="text-muted-foreground">Annual cost of workplace injuries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">104</div>
                <div className="text-muted-foreground">Days average injury recovery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">$45K</div>
                <div className="text-muted-foreground">Average workers comp claim cost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Coverage Options */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Complete Workers Compensation Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't leave your employees or business vulnerable. Our comprehensive workers' 
              compensation covers every aspect of workplace injury protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageOptions.map((option, index) => (
              <div key={index} className="coverage-card card-hero">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-4 bg-gradient-primary rounded-xl">
                    <option.icon className="h-8 w-8 text-hero-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                    {option.importance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Reduction Benefits */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Reduce Your Workers Comp Costs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Smart safety practices and risk management can significantly lower your premiums while 
              protecting your workforce better than ever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryBenefits.map((benefit, index) => (
              <div key={index} className="discount-card bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                  <span className="text-2xl font-bold text-primary">{benefit.savings}</span>
                </div>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                <div className="text-sm text-success bg-success/10 rounded-lg p-3">
                  <strong>Requirement:</strong> {benefit.requirement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Businesses Trust Anucleo
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from business owners who chose comprehensive protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 shadow-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed">"{testimonial.story}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    {testimonial.savings && (
                      <div className="text-lg font-bold text-success">{testimonial.savings}</div>
                    )}
                    {testimonial.claim && (
                      <div className="text-lg font-bold text-primary">{testimonial.claim}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Workers Compensation Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about workers' compensation insurance
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-trust">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 fade-in-up">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Protect Your Business and Employees Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait for an accident to realize you need proper workers' compensation coverage. 
            Get a quote now and protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-quote">
              <Button className="btn-hero group">
                Get Workers Comp Quote Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button className="btn-trust">
              <Phone className="mr-2 h-5 w-5" />
              (201) 977-8899
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WorkersComp;