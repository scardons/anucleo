import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Download, Mail, Phone, CheckCircle, Clock, Shield, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLenis } from '@/hooks/use-lenis';
import { useGSAP, animateInView, staggerAnimateInView } from '@/hooks/use-gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ClientServices = () => {
  useLenis();
  const gsap = useGSAP();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    policyNumber: '',
    serviceType: '',
    urgency: '',
    additionalInfo: ''
  });

  useEffect(() => {
    if (!gsap) return;
    animateInView('.fade-in-up');
    animateInView('.fade-in-left');
    animateInView('.fade-in-right');
    staggerAnimateInView('.service-card');
  }, [gsap]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Client service request submitted:', formData);
  };

  const services = [
    {
      icon: FileText,
      title: 'Certificate of Insurance',
      description: 'Request a certificate of insurance for contractors, vendors, or property managers.',
      turnaround: '1-2 business days',
      features: [
        'Digital delivery via email',
        'Customized for specific requirements',
        'Auto-renewal notifications',
        'Multiple format options'
      ]
    },
    {
      icon: Download,
      title: 'Policy Documents',
      description: 'Download or request copies of your current policy documents and declarations pages.',
      turnaround: 'Immediate - 24 hours',
      features: [
        'Instant digital access',
        'Historical policy documents',
        'Declaration pages',
        'Amendment documentation'
      ]
    },
    {
      icon: User,
      title: 'Account Updates',
      description: 'Update your contact information, add drivers, or modify coverage details.',
      turnaround: '1-3 business days',
      features: [
        'Contact information changes',
        'Add/remove drivers or vehicles',
        'Coverage modifications',
        'Beneficiary updates'
      ]
    },
    {
      icon: Shield,
      title: 'Coverage Review',
      description: 'Schedule a comprehensive review of your current coverage and get recommendations.',
      turnaround: '3-5 business days',
      features: [
        'Complete coverage analysis',
        'Gap identification',
        'Cost optimization review',
        'Risk assessment update'
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Emergency Claims',
      description: 'File a claim or get claim status updates',
      phone: '(347) 417-CLAIM',
      available: '24/7'
    },
    {
      title: 'Policy Questions',
      description: 'Speak with your dedicated agent',
      phone: '(201) 977-8899',
      available: 'Mon-Fri 8AM-8PM'
    },
    {
      title: 'Billing Support',
      description: 'Payment questions and account inquiries',
      phone: '(201) 977-8899',
      available: 'Mon-Fri 8AM-6PM'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Client Services | Anucleo Insurance - Certificates & Documents</title>
        <meta name="description" content="Existing Anucleo clients can request certificates of insurance, policy documents, and account updates. Fast turnaround times with digital delivery." />
        <meta name="keywords" content="insurance certificate, policy documents, client services, account updates, existing clients" />
        <link rel="canonical" href="/client-services" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Client Services</span> & 
              <span className="text-accent-gradient"> Support</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Need a certificate of insurance? Policy documents? Account updates? 
              We've got you covered with fast, reliable service.
            </p>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {quickActions.map((action, index) => (
                <div key={index} className="card-elegant text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                  <p className="text-lg font-semibold text-primary mb-1">{action.phone}</p>
                  <p className="text-xs text-muted-foreground">{action.available}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How Can We Help You Today?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the service you need and we'll take care of the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="service-card card-elegant">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <service.icon className="h-6 w-6 text-hero-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{service.turnaround}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Submit Your Request
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll process your request promptly
            </p>
          </div>

          <div className="card-hero fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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

              <div className="grid md:grid-cols-2 gap-6">
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
                    Policy Number *
                  </label>
                  <Input
                    value={formData.policyNumber}
                    onChange={(e) => handleInputChange('policyNumber', e.target.value)}
                    placeholder="Enter your policy number"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="certificate">Certificate of Insurance</SelectItem>
                      <SelectItem value="documents">Policy Documents</SelectItem>
                      <SelectItem value="updates">Account Updates</SelectItem>
                      <SelectItem value="review">Coverage Review</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Urgency Level
                  </label>
                  <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                      <SelectItem value="priority">Priority (1-2 days)</SelectItem>
                      <SelectItem value="urgent">Urgent (Same day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Information
                </label>
                <Textarea
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  placeholder="Please provide any additional details about your request..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                <Mail className="mr-2 h-5 w-5" />
                Submit Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                You'll receive a confirmation email within 15 minutes of submitting your request.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ClientServices;