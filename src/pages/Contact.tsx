import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// Ensuring fresh import without Parking icon
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Navigation as NavigationIcon, 
  Car, 
  Building 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLenis } from '@/hooks/use-lenis';
import { useGSAP, animateInView } from '@/hooks/use-gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import officeBuildingImage from '@/assets/office-building.jpg';

const Contact = () => {
  useLenis();
  const gsap = useGSAP();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });

  useEffect(() => {
    if (!gsap) return;
    animateInView('.fade-in-up');
    animateInView('.fade-in-left');
    animateInView('.fade-in-right');
  }, [gsap]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '(201) 977-8899',
      description: 'Mon-Fri 8AM-8PM, Sat 9AM-5PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'services@anucleo.com',
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '365 Rifle Camp Road Suite 209',
      description: 'Woodland Park, NJ 07424'
    },
    {
      icon: Clock,
      title: '24/7 Claims',
      content: '(347) 417-CLAIM',
      description: 'Emergency claims hotline'
    }
  ];

  const reasons = [
    'Get a personalized insurance quote',
    'Review your current coverage',
    'File or check on a claim',
    'Ask questions about our policies',
    'Speak with a licensed agent',
    'Get help with policy changes'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Anucleo Insurance | Get Your Free Quote Today</title>
        <meta name="description" content="Contact Anucleo Insurance for personalized service. Call (201) 977-8899, email us, or visit our office. Get your free insurance quote today with trusted protection." />
        <meta name="keywords" content="contact insurance agent, insurance quote, insurance office, customer service, claims support, licensed insurance agent" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Let's Talk</span> About Your{' '}
              <span className="text-accent-gradient">Protection</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Our experienced agents are here to help you find the perfect insurance solution. 
              Get personalized advice, compare coverage options, and secure your peace of mind today.
            </p>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-elegant text-center">
                  <div className="p-4 bg-gradient-primary rounded-xl mx-auto w-fit mb-4">
                    <info.icon className="h-6 w-6 text-hero-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="fade-in-left">
              <div className="card-hero">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get Your Free Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and one of our licensed agents will contact you 
                  within 24 hours with a personalized quote and coverage recommendations.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(201) 977-8899"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Insurance Type *
                      </label>
                      <Select onValueChange={(value) => handleInputChange('insuranceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select insurance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="umbrella">Umbrella Insurance</SelectItem>
                          <SelectItem value="commercial">Commercial Insurance</SelectItem>
                          <SelectItem value="auto">Auto Insurance</SelectItem>
                          <SelectItem value="multiple">Multiple Types</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your insurance needs..."
                      rows={4}
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" className="btn-hero flex-1">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                    <Link to="/get-quote" className="flex-1">
                      <Button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                        Get Quote
                      </Button>
                    </Link>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by an Anucleo agent 
                    regarding your insurance needs.
                  </p>
                </form>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="fade-in-right space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Contact Anucleo?
                </h2>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-hero rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-hero-foreground mb-6 text-center">
                  Our Service Promise
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-hero-foreground mb-2">24hrs</div>
                    <div className="text-sm text-hero-foreground/90">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-hero-foreground mb-2">100%</div>
                    <div className="text-sm text-hero-foreground/90">Licensed Agents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-hero-foreground mb-2">10+</div>
                    <div className="text-sm text-hero-foreground/90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-hero-foreground mb-2">1K+</div>
                    <div className="text-sm text-hero-foreground/90">Policies Written</div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-destructive mb-4">
                  Need Emergency Claims Support?
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you need to file a claim or have an emergency, call our 24/7 claims hotline:
                </p>
                <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                  <Phone className="mr-2 h-5 w-5" />
                  (347) 417-CLAIM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Visit Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Visit Our <span className="text-gradient">Modern Office</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience personalized service at our state-of-the-art facility in Woodland Park. 
              Our team is ready to meet with you in person to discuss your insurance needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Office Building Image */}
            <div className="fade-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-hero">
                <img
                  src={officeBuildingImage}
                  alt="Anucleo Insurance office building at 365 Rifle Camp Road, Woodland Park, NJ"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                    <h3 className="text-lg font-bold text-foreground mb-2">Our Professional Office</h3>
                    <p className="text-sm text-muted-foreground">
                      Modern facility with convenient parking and easy access
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map & Office Info */}
            <div className="fade-in-right space-y-8">
              {/* Map */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
                <Map className="h-96" />
              </div>
            </div>
          </div>

          {/* Office Details - Full Width Blue Section */}
          <div className="mt-16 fade-in-up">
            <div className="bg-gradient-hero rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-hero-foreground/10 rounded-xl">
                  <Building className="h-6 w-6 text-hero-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-hero-foreground mb-2">Anucleo Insurance</h3>
                  <div className="space-y-2 text-hero-foreground/90">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>365 Rifle Camp Road Suite 209</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <NavigationIcon className="h-4 w-4" />
                      <span>Woodland Park, NJ 07424</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Mon-Fri 8AM-8PM, Sat 9AM-5PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="h-4 w-4" />
                      <span>Free parking available</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-hero-foreground/20 pt-6">
                <h4 className="text-lg font-semibold text-hero-foreground mb-4">What to Expect</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Free consultation with licensed agents',
                    'Personalized insurance recommendations',
                    'Compare multiple coverage options',
                    'Same-day policy binding available',
                    'Complimentary coffee and comfortable seating'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-hero-foreground flex-shrink-0" />
                      <span className="text-sm text-hero-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90 px-8 py-3">
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Schedule Visit: (201) 977-8899
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;