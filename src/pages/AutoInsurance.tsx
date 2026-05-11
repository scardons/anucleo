import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Car, Shield, CheckCircle, ArrowRight, Users, DollarSign, Clock, Phone, Wrench, Heart, Star, Award, AlertTriangle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLenis } from '@/hooks/use-lenis';
import { useGSAP, animateInView, staggerAnimateInView } from '@/hooks/use-gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import autoImage from '@/assets/auto-insurance.jpg';

const AutoInsurance = () => {
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

  const drivingRisks = [
    {
      icon: Car,
      title: "Multi-Car Accident",
      scenario: "You cause a 4-car pileup on the highway, injuring 6 people and totaling 3 vehicles.",
      cost: "$2,500,000",
      coverage: "Bodily injury liability covers medical costs and legal fees"
    },
    {
      icon: Home,
      title: "Hit Pedestrian While Texting",
      scenario: "Momentary distraction leads to hitting a pedestrian, causing permanent disability.",
      cost: "$3,200,000",
      coverage: "Liability insurance protects your assets from lawsuits"
    },
    {
      icon: AlertTriangle,
      title: "Uninsured Driver Hits You",
      scenario: "Drunk driver with no insurance totals your car and puts you in the hospital for weeks.",
      cost: "$150,000",
      coverage: "Uninsured motorist coverage pays your expenses"
    },
    {
      icon: Shield,
      title: "Your Car is Stolen",
      scenario: "Thieves steal your brand-new SUV from your driveway and it's never recovered.",
      cost: "$65,000",
      coverage: "Comprehensive coverage replaces your stolen vehicle"
    }
  ];

  const coverageOptions = [
    {
      icon: Shield,
      title: 'Liability Protection',
      description: 'Protects you financially when you\'re at fault for injuries or property damage to others. Required by law in most states.',
      features: [
        'Bodily injury liability up to $500K per person',
        'Property damage liability up to $100K',
        'Legal defense costs covered',
        'Covers family members driving your car'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Car,
      title: 'Collision Coverage',
      description: 'Pays to repair or replace your vehicle after an accident, regardless of who\'s at fault.',
      features: [
        'Covers damage from collisions with other vehicles',
        'Covers single-car accidents (trees, poles, etc.)',
        'Replacement cost for totaled vehicles',
        'Choice of repair shop'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Heart,
      title: 'Comprehensive Coverage',
      description: 'Protects against theft, vandalism, fire, flood, hail, and other non-collision damages.',
      features: [
        'Theft and vandalism protection',
        'Natural disaster coverage',
        'Glass breakage with $0 deductible',
        'Rental car while yours is repaired'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Users,
      title: 'Uninsured/Underinsured Motorist',
      description: 'Protects you when hit by drivers with no insurance or insufficient coverage to pay for your damages.',
      features: [
        'Medical expenses for you and passengers',
        'Lost wages and pain & suffering',
        'Property damage coverage',
        'Hit-and-run accident protection'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Wrench,
      title: 'Personal Injury Protection (PIP)',
      description: 'Covers medical expenses, lost wages, and essential services regardless of who caused the accident.',
      features: [
        'Medical bills up to policy limits',
        '80% of lost wages covered',
        'Essential services (childcare, housework)',
        'Rehabilitation costs'
      ],
      importance: 'Valuable Add-On'
    },
    {
      icon: Clock,
      title: '24/7 Roadside Assistance',
      description: 'Emergency roadside help including towing, jump-starts, lockout service, and flat tire assistance.',
      features: [
        '24/7 towing service up to 25 miles',
        'Battery jump-start service',
        'Lockout assistance',
        'Flat tire changing',
        'Emergency fuel delivery'
      ],
      importance: 'Valuable Add-On'
    }
  ];

  const discounts = [
    { title: 'Multi-Policy Discount', savings: 'Up to 25%', description: 'Bundle auto with home or business insurance', requirement: 'Must have qualifying home/business policy' },
    { title: 'Good Driver Discount', savings: 'Up to 20%', description: 'Clean driving record for 3+ years', requirement: 'No at-fault accidents or moving violations' },
    { title: 'Safety Features', savings: 'Up to 15%', description: 'Anti-theft devices, airbags, ABS brakes', requirement: 'Vehicle must have qualifying safety equipment' },
    { title: 'Multi-Vehicle', savings: 'Up to 12%', description: 'Insure 2+ vehicles on same policy', requirement: 'All vehicles must be owned by same household' },
    { title: 'Good Student', savings: 'Up to 15%', description: 'Full-time students with B average or better', requirement: 'Under 25, enrolled full-time, 3.0+ GPA' },
    { title: 'Defensive Driving', savings: 'Up to 10%', description: 'Complete approved defensive driving course', requirement: 'Course must be completed within last 3 years' }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Denver, CO",
      story: "Anucleo saved me with better coverage. When I was hit by an uninsured driver, they handled everything perfectly.",
      savings: "$800/year",
      rating: 5
    },
    {
      name: "Mike R.",
      location: "Austin, TX", 
      story: "After my teenage son totaled our SUV, Anucleo paid the full replacement cost with no hassle. Their claims process was incredibly smooth.",
      claim: "$45,000 paid",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How much auto insurance coverage do I really need?',
      answer: 'We recommend higher limits than state minimums: $250K/$500K/$100K for liability, plus comprehensive and collision. If you have significant assets, consider umbrella insurance for additional protection. The cost difference is minimal compared to the financial risk you face.'
    },
    {
      question: 'Why is my auto insurance so expensive?',
      answer: 'Auto insurance rates depend on many factors: your driving record, age, location, vehicle type, coverage levels, and credit score (where allowed). Young drivers, luxury vehicles, and high-crime areas cost more. The good news is we can help you find discounts to lower your premium.'
    },
    {
      question: 'What should I do immediately after an auto accident?',
      answer: 'First, ensure everyone is safe and call 911 if anyone is injured. Exchange information with other drivers, take photos of vehicles and the scene, and contact us immediately to report the claim. Never admit fault - let the insurance companies determine liability.'
    },
    {
      question: 'Will my rates go up after an accident or claim?',
      answer: 'Not necessarily. Your first accident may be "forgiven" depending on your policy and driving history. Comprehensive claims (theft, vandalism, weather) typically don\'t affect rates. We work with carriers that focus on your overall driving record, not just one incident.'
    },
    {
      question: 'Do I need rental car coverage?',
      answer: 'Rental coverage is relatively inexpensive ($20-40/year) and provides tremendous value if your car is being repaired after an accident or comprehensive loss. Without it, you\'ll pay out-of-pocket for rental cars, which can cost $30-50+ per day.'
    },
    {
      question: 'Can I get auto insurance with a poor driving record?',
      answer: 'Yes, we work with drivers of all risk levels. While rates may be higher initially, we can help you find competitive coverage and provide guidance to improve your driving record over time. Many carriers offer accident forgiveness and rate reduction programs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Auto Insurance | Comprehensive Vehicle Protection | Anucleo Insurance</title>
        <meta name="description" content="Protect yourself and your vehicle with comprehensive auto insurance from Anucleo. Full coverage, competitive rates, 24/7 claims support, and multiple discounts available. Get your free auto insurance quote today." />
        <meta name="keywords" content="auto insurance, car insurance, vehicle insurance, comprehensive coverage, collision coverage, liability insurance, roadside assistance, cheap car insurance, auto insurance quotes" />
        <link rel="canonical" href="/auto-insurance" />
        <meta property="og:title" content="Auto Insurance | Comprehensive Vehicle Protection | Anucleo" />
        <meta property="og:description" content="Get comprehensive auto insurance from Anucleo. Full coverage protection with competitive rates and 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/auto-insurance" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Auto Insurance",
            "provider": {
              "@type": "Organization", 
              "name": "Anucleo Insurance",
              "url": "https://anucleo.com",
              "telephone": "(201) 977-8899"
            },
            "description": "Comprehensive auto insurance coverage for vehicles and drivers including liability, collision, comprehensive, and uninsured motorist protection",
            "areaServed": "United States",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Auto Insurance Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Comprehensive Auto Coverage"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Collision Coverage"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section - StoryBrand: Character & Problem */}
      <section className="pt-20 min-h-screen bg-gradient-trust flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left space-y-8">
              <div>
                <p className="text-lg font-semibold text-primary uppercase tracking-wider mb-4">
                  Don't Drive Unprotected
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="text-gradient">Complete Auto Insurance</span> That Actually Protects You
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Every time you drive, you're risking everything. One accident could result in millions in damages, 
                  lawsuits that drain your savings, and financial ruin. Our comprehensive auto insurance gives you 
                  the protection you need to drive with complete confidence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero group">
                  Get Free Auto Quote Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className="btn-trust">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Instant Quote
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">2M+</div>
                  <div className="text-sm text-muted-foreground">Drivers Protected</div>
                </div>
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Claims Support</div>
                </div>
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">30%</div>
                  <div className="text-sm text-muted-foreground">Average Savings</div>
                </div>
              </div>
            </div>

            <div className="fade-in-right">
              <img
                src={autoImage}
                alt="Auto insurance protection covering family vehicle and driver safety on the road"
                className="w-full h-auto rounded-3xl shadow-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation - Driving Risks */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What You're <span className="text-destructive">Really Risking</span> Every Time You Drive
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These scenarios happen 6 million times per year in the US. Without proper coverage, 
              any one of these could financially destroy you and your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {drivingRisks.map((risk, index) => (
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
            <h3 className="text-2xl font-bold text-destructive mb-4">The Statistics Don't Lie</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">1 in 8</div>
                <div className="text-muted-foreground">Drivers are uninsured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">$3.2M</div>
                <div className="text-muted-foreground">Average severe injury lawsuit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">77%</div>
                <div className="text-muted-foreground">Of drivers are underinsured</div>
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
              Complete Auto Insurance Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't settle for minimum coverage that leaves you vulnerable. Our comprehensive auto insurance 
              protects you from every risk on the road.
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
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{option.description}</p>
                
                <div className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

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

      {/* Guide Positioning - Discounts & Savings */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-hero-foreground mb-6">
              Save More with Our Auto Insurance Discounts
            </h2>
            <p className="text-xl text-hero-foreground/90 max-w-3xl mx-auto">
              We reward safe drivers, good students, and loyal customers. 
              Our average customer saves over $800 per year compared to their previous carrier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discounts.map((discount, index) => (
              <div key={index} className="discount-card bg-hero-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-hero-foreground mb-2">{discount.savings}</div>
                  <h3 className="text-xl font-bold text-hero-foreground mb-3">{discount.title}</h3>
                </div>
                <p className="text-hero-foreground/90 mb-3">{discount.description}</p>
                <div className="text-sm text-hero-foreground/80 italic">
                  Requirement: {discount.requirement}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90 px-8 py-4 text-lg font-semibold">
              Calculate Your Savings Now
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Real Stories from Real Customers
            </h2>
            <p className="text-xl text-muted-foreground">
              See how Anucleo has protected families just like yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.story}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    {testimonial.savings && (
                      <div className="text-lg font-bold text-success">Saved {testimonial.savings}</div>
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
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Auto Insurance Questions & Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Get expert answers to common questions about auto insurance coverage and claims.
            </p>
          </div>

          <div className="fade-in-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card-elegant">
                  <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                    <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action - Plan */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <Car className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Drive with Complete Confidence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't drive another day without proper protection. Get a personalized auto insurance quote 
            in just 2 minutes and discover how much you can save while getting better coverage.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-hero-foreground font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-foreground mb-2">Quick Quote</h3>
              <p className="text-muted-foreground">Answer a few questions about your driving</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-hero-foreground font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-foreground mb-2">Compare & Save</h3>
              <p className="text-muted-foreground">See your personalized rates and discounts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-hero-foreground font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-foreground mb-2">Get Protected</h3>
              <p className="text-muted-foreground">Activate coverage and drive with confidence</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-quote">
              <Button className="btn-hero text-lg px-8 py-4">
                Get Your Free Auto Quote Now
              </Button>
            </Link>
            <Button className="btn-trust text-lg px-8 py-4">
              Call for Instant Quote: (201) 977-8899
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Quick quotes • No hidden fees • Multiple coverage options • Licensed agents available 7 days a week
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AutoInsurance;