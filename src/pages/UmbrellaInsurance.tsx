import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Users, DollarSign, Clock, Phone, Briefcase, AlertTriangle, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLenis } from '@/hooks/use-lenis';
import { useGSAP, animateInView, staggerAnimateInView } from '@/hooks/use-gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import umbrellaImage from '@/assets/umbrella-insurance.jpg';

const UmbrellaInsurance = () => {
  useLenis();
  const gsap = useGSAP();

  useEffect(() => {
    if (!gsap) return;
    animateInView('.fade-in-up');
    animateInView('.fade-in-left');
    animateInView('.fade-in-right');
    staggerAnimateInView('.benefit-card');
    staggerAnimateInView('.scenario-card');
  }, [gsap]);

  const benefits = [
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Protect your home, savings, and future earnings from major liability claims.'
    },
    {
      icon: DollarSign,
      title: 'Coverage Up to $5M+',
      description: 'Get comprehensive protection with coverage limits from $1M to $5M or more.'
    },
    {
      icon: Users,
      title: 'Family Coverage',
      description: 'Covers all family members and household residents under one policy.'
    },
    {
      icon: Clock,
      title: '24/7 Protection',
      description: 'Worldwide coverage that never sleeps, protecting you wherever life takes you.'
    }
  ];

  const scenarios = [
    {
      title: 'Dog Bite Lawsuit',
      description: 'Your dog bites a neighbor child, resulting in $500K in medical bills and legal costs.',
      cost: '$500,000',
      icon: AlertTriangle
    },
    {
      title: 'Pool Accident',
      description: 'A guest drowns at your pool party, leading to a $2M wrongful death lawsuit.',
      cost: '$2,000,000', 
      icon: AlertTriangle
    },
    {
      title: 'Car Accident',
      description: 'You cause a multi-car accident with $3M in injuries and property damage.',
      cost: '$3,000,000',
      icon: AlertTriangle
    },
    {
      title: 'Business Liability',
      description: 'A customer slips at your business, resulting in $1.5M in damages and lost wages.',
      cost: '$1,500,000',
      icon: Briefcase
    }
  ];

  const faqs = [
    {
      question: 'What is umbrella insurance and why do I need it?',
      answer: 'Umbrella insurance provides additional liability coverage beyond your standard home and auto policies. It protects your assets and future earnings from major lawsuits. With the average personal injury lawsuit costing $3.2 million, most people need more protection than their basic policies provide.'
    },
    {
      question: 'How much umbrella insurance coverage do I need?',
      answer: 'Generally, you should have umbrella coverage equal to your net worth plus future earnings potential. Most people start with $1-2 million, but high-net-worth individuals often need $5 million or more. We can help assess your specific risk exposure.'
    },
    {
      question: 'What does umbrella insurance cover?',
      answer: 'Umbrella insurance covers personal liability claims including bodily injury, property damage, personal injury (libel/slander), legal defense costs, and incidents involving your vehicles, home, boats, or rental properties. It also covers worldwide incidents.'
    },
    {
      question: 'How much does umbrella insurance cost?',
      answer: 'Umbrella insurance is surprisingly affordable, typically costing $200-400 annually for $1 million in coverage. Each additional million usually costs $100-200 more per year. It\'s one of the most cost-effective insurance purchases you can make.'
    },
    {
      question: 'Do I need umbrella insurance if I don\'t have many assets?',
      answer: 'Yes! Umbrella insurance protects your future earnings too. If you\'re young and will earn $2+ million over your career, you need protection even if you don\'t have assets yet. Lawsuits can garnish wages for decades.'
    },
    {
      question: 'What are the requirements for umbrella insurance?',
      answer: 'You typically need to maintain minimum liability limits on your underlying auto and homeowner\'s policies (usually $250K-500K). We can help ensure your underlying coverage meets the requirements for umbrella coverage.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Umbrella Insurance | Comprehensive Liability Protection | Anucleo Insurance</title>
        <meta name="description" content="Protect your assets and future earnings with comprehensive umbrella insurance. Coverage up to $5M+ for personal liability, legal defense, and worldwide protection. Get your free quote today." />
        <meta name="keywords" content="umbrella insurance, liability protection, asset protection, personal liability, legal defense coverage, excess liability insurance, personal umbrella policy" />
        <link rel="canonical" href="/umbrella-insurance" />
        <meta property="og:title" content="Umbrella Insurance | Comprehensive Liability Protection" />
        <meta property="og:description" content="Protect your assets with comprehensive umbrella insurance from Anucleo. Get coverage up to $5M+ for complete peace of mind." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/umbrella-insurance" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Umbrella Insurance",
            "provider": {
              "@type": "Organization",
              "name": "Anucleo Insurance"
            },
            "description": "Comprehensive umbrella insurance providing additional liability protection beyond standard policies",
            "areaServed": "United States",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Umbrella Insurance Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Personal Umbrella Insurance"
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
                  Don't Let One Lawsuit Destroy Everything
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="text-gradient">Complete Protection</span> Beyond Your Standard Policies
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Your home and auto insurance might not be enough. One serious accident could put your 
                  entire financial future at risk. Our umbrella insurance provides the extra layer of 
                  protection you need to safeguard everything you've worked to build.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">
                  Get Free Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/contact">
                  <Button className="btn-trust">
                    <Phone className="mr-2 h-5 w-5" />
                    Speak with Expert
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">$200</div>
                  <div className="text-sm text-muted-foreground">Starting Price/Year</div>
                </div>
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">$5M+</div>
                  <div className="text-sm text-muted-foreground">Coverage Available</div>
                </div>
                <div className="text-center bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                  <div className="text-2xl font-bold text-gradient mb-1">Worldwide</div>
                  <div className="text-sm text-muted-foreground">Protection</div>
                </div>
              </div>
            </div>

            <div className="fade-in-right">
              <img
                src={umbrellaImage}
                alt="Umbrella insurance protection covering family and assets"
                className="w-full h-auto rounded-3xl shadow-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Why You Need Umbrella Insurance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't wait until it's too late. The cost of not having enough coverage 
              far exceeds the affordable price of comprehensive protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card card-elegant text-center">
                <div className="p-4 bg-gradient-primary rounded-xl mx-auto w-fit mb-6">
                  <benefit.icon className="h-8 w-8 text-hero-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Real-World Scenarios */}
          <div className="mb-16">
            <div className="text-center mb-12 fade-in-up">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Real Scenarios That Could Bankrupt You
              </h3>
              <p className="text-xl text-muted-foreground">
                These aren't hypothetical situations - they happen to ordinary people every day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {scenarios.map((scenario, index) => (
                <div key={index} className="scenario-card bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-destructive/10 rounded-xl">
                      <scenario.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-2">{scenario.title}</h4>
                      <p className="text-muted-foreground mb-3">{scenario.description}</p>
                      <div className="text-2xl font-bold text-destructive">{scenario.cost}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage Areas */}
          <div className="bg-gradient-hero rounded-3xl p-12 text-center fade-in-up">
            <h3 className="text-3xl font-bold text-hero-foreground mb-8">
              Comprehensive Umbrella Coverage Includes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 text-hero-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-left">Personal injury lawsuits</span>
              </div>
              <div className="flex items-center space-x-3 text-hero-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-left">Property damage claims</span>
              </div>
              <div className="flex items-center space-x-3 text-hero-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-left">Legal defense costs</span>
              </div>
              <div className="flex items-center space-x-3 text-hero-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-left">Libel and slander claims</span>
              </div>
              <div className="flex items-center space-x-3 text-hero-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-left">Rental property liability</span>
              </div>
              <div className="flex items-center space-x-3 text-hero-foreground">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-left">Worldwide coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Anucleo for Umbrella Insurance?
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by thousands of families and high-net-worth individuals for comprehensive liability protection.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 fade-in-up">
            <div className="text-center">
              <div className="p-4 bg-gradient-primary rounded-xl mx-auto w-fit mb-4">
                <Award className="h-8 w-8 text-hero-foreground" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">A+ Rating</div>
              <div className="text-muted-foreground">AM Best Financial Strength</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-primary rounded-xl mx-auto w-fit mb-4">
                <Star className="h-8 w-8 text-hero-foreground" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">4.9/5 Stars</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-primary rounded-xl mx-auto w-fit mb-4">
                <Shield className="h-8 w-8 text-hero-foreground" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">$5M+</div>
              <div className="text-muted-foreground">Coverage Available</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-primary rounded-xl mx-auto w-fit mb-4">
                <Users className="h-8 w-8 text-hero-foreground" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">25K+</div>
              <div className="text-muted-foreground">Families Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Umbrella Insurance Questions & Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about umbrella insurance coverage and requirements.
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

      {/* Final CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Protect Your Assets and Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait until it's too late. Get a personalized umbrella insurance quote 
            in just 2 minutes and protect everything you've worked to build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-quote">
              <Button className="btn-hero text-lg px-8 py-4">
                Get Your Free Umbrella Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-trust text-lg px-8 py-4">
                Speak with Protection Expert
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Quick quotes • No obligation • Licensed umbrella specialists • 10+ years experience
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UmbrellaInsurance;