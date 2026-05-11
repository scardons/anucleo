import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Umbrella, Building2, Car, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGSAP, staggerAnimateInView } from '@/hooks/use-gsap';
import umbrellaImage from '@/assets/umbrella-insurance.jpg';
import commercialImage from '@/assets/commercial-insurance.jpg';
import autoImage from '@/assets/auto-insurance.jpg';

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const gsap = useGSAP();

  useEffect(() => {
    if (!gsap) return;
    
    staggerAnimateInView('.service-card', {
      from: { opacity: 0, y: 60, scale: 0.9 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    });
  }, [gsap]);

  const services = [
    {
      id: 'commercial',
      title: 'Commercial Insurance',
      subtitle: 'Business Protection Solutions',
      description: 'Safeguard your business with tailored commercial insurance that covers property, liability, and business interruption.',
      icon: Building2,
      image: commercialImage,
      features: [
        'General liability coverage',
        'Property protection',
        'Business interruption',
        'Workers compensation'
      ],
      link: '/commercial-insurance',
      gradient: 'from-primary to-trust',
      priority: 'PRIMARY'
    },
    {
      id: 'auto',
      title: 'Auto Insurance',
      subtitle: 'Complete Vehicle Protection',
      description: 'Drive with confidence knowing you have comprehensive auto coverage that protects you, your family, and your vehicle.',
      icon: Car,
      image: autoImage,
      features: [
        'Full coverage options',
        '24/7 claims support',
        'Roadside assistance',
        'Rental car coverage'
      ],
      link: '/auto-insurance',
      gradient: 'from-trust to-accent'
    },
    {
      id: 'umbrella',
      title: 'Umbrella Insurance',
      subtitle: 'Complete Liability Protection',
      description: 'Protect your assets and future earnings with comprehensive umbrella coverage that goes beyond your standard policies.',
      icon: Umbrella,
      image: umbrellaImage,
      features: [
        'Comprehensive coverage',
        'Protects all family members',
        'Legal defense coverage',
        'Worldwide protection'
      ],
      link: '/umbrella-insurance',
      gradient: 'from-accent to-success'
    }
  ];

  return (
    <section ref={servicesRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.05)_35%,rgba(59,130,246,0.05)_65%,transparent_65%)] bg-[length:20px_20px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Comprehensive Protection for Your Business & Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From protecting your business operations to safeguarding your personal assets, 
            our insurance solutions provide the comprehensive coverage you need to face life's uncertainties with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-card card-hero group hover:scale-105 transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={service.image}
                  alt={`${service.title} coverage illustration`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 p-3 bg-card/90 backdrop-blur-sm rounded-xl shadow-card">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to={service.link}>
                  <Button className="btn-trust w-full group">
                    Learn More About {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 shadow-hero">
          <div className="max-w-2xl mx-auto">
            <Shield className="h-16 w-16 text-hero-foreground mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-hero-foreground mb-4">
              Ready to Protect What Matters Most?
            </h3>
            <p className="text-xl text-hero-foreground/90 mb-8">
              Don't wait for disaster to strike. Get a personalized quote in minutes 
              and start protecting your future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-card text-primary hover:bg-card/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Free Quote Now
              </Button>
              <Link to="/contact">
                <Button className="bg-hero-foreground/10 text-hero-foreground border border-hero-foreground/20 hover:bg-hero-foreground/20 px-8 py-4 text-lg font-semibold">
                  Speak with Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;