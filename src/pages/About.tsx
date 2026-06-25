import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, TrendingUp, CheckCircle, Heart, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLenis } from '@/hooks/use-lenis';
import { useGSAP, animateInView, staggerAnimateInView } from '@/hooks/use-gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import servandoPhoto from '@/assets/team/servando-velazquez.jpg';

const About = () => {
  useLenis();
  const gsap = useGSAP();

  useEffect(() => {
    if (!gsap) return;
    animateInView('.fade-in-up');
    animateInView('.fade-in-left');
    animateInView('.fade-in-right');
    staggerAnimateInView('.team-member');
  }, [gsap]);

  const values = [
    {
      icon: Shield,
      title: 'Trust & Protection',
      description: 'We build lasting relationships based on trust, integrity, and our commitment to protecting what matters most to you.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our customers. Your peace of mind is our primary goal.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We continuously strive for excellence in everything we do, from customer service to claims processing.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We\'re proud to be part of the communities we serve, giving back and supporting local families and businesses.'
    }
  ];

  const stats = [
    { number: 'Experienced', label: 'Professional Team' },
    { number: '50K+', label: 'Families Protected' },
    { number: 'Comprehensive', label: 'Coverage Options' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  const teamMembers = [
    {
      name: 'Servando Velazquez',
      role: 'President',
      description: 'Experienced insurance professional, Servando leads our team of industry professionals to provide personalized protection for families and businesses.',
      linkedin: 'https://www.linkedin.com/in/servando-velazquez-268a42163/',
      website: 'https://www.anucleo.com',
      photo: servandoPhoto
    },

  ];

  return (
    <>
      <Helmet>
        <title>About Anucleo Insurance | Trusted Protection</title>
        <meta name="description" content="Learn about Anucleo Insurance - experienced industry professionals providing comprehensive, affordable insurance with exceptional service." />
        <meta name="keywords" content="about Anucleo, insurance company, trusted insurance provider, insurance experience, customer service" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 min-h-screen bg-gradient-trust flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="fade-in-up space-y-8">
              <div className="p-4 bg-gradient-primary rounded-2xl mx-auto w-fit mb-8">
                <Shield className="h-16 w-16 text-hero-foreground" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-gradient">Protecting Families</span> for Over{' '}
                <span className="text-accent-gradient">25 Years</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                At Anucleo Insurance, we understand that insurance isn't just about policies and premiums—
                it's about protecting the people and things you care about most. That's why we've dedicated 
                ourselves to providing comprehensive, affordable protection with the personal touch you deserve.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Founding: Built on Industry Expertise
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Anucleo Insurance was founded by seasoned industry professionals who recognized 
                  the gap between what families and businesses needed and what traditional insurance 
                  companies were providing. Our founding team brought together decades of combined 
                  experience to create a different kind of insurance company.
                </p>
                <p>
                  Led by President Servando Velazquez, our team of industry professionals witnessed firsthand 
                  how inadequate coverage and poor service left customers vulnerable during their 
                  most critical moments. This drove our mission to create an insurance company that 
                  truly puts customers first—offering comprehensive protection, transparent pricing, 
                  and exceptional service when it matters most.
                </p>
                <p>
                  Today, under Servando Velazquez's leadership and guided by our team of industry professionals, 
                  we're proud to have protected thousands of families and businesses, handling countless 
                  claims and maintaining a high customer satisfaction rating.
                </p>
              </div>
            </div>

            <div className="fade-in-right">
              <div className="bg-gradient-hero rounded-3xl p-12 text-center shadow-hero">
                <h3 className="text-3xl font-bold text-hero-foreground mb-6">Our Mission</h3>
                <p className="text-xl text-hero-foreground/90 leading-relaxed">
                  "To provide families and businesses with comprehensive, affordable insurance 
                  protection while delivering the exceptional service and personal attention 
                  they deserve during both good times and life's unexpected challenges."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide every decision we make and every interaction we have with our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="fade-in-up card-elegant text-center">
                <div className="p-4 bg-gradient-primary rounded-xl mx-auto w-fit mb-6">
                  <value.icon className="h-8 w-8 text-hero-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Meet Our President
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With decades of insurance expertise and a genuine passion for helping others, President Servando Velazquez leads Anucleo with integrity and a commitment to personalized protection.
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member group">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
                      <img 
                        src={member.photo}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-card"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-4 bg-primary/10 rounded-full px-4 py-1 inline-block">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 justify-center">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gradient-primary hover:shadow-glow text-hero-foreground rounded-xl transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
                      title="Website"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction & Innovation */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <TrendingUp className="h-16 w-16 text-hero-foreground mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-hero-foreground mb-6">
              Our Traction: Innovating Insurance
            </h2>
            <p className="text-xl text-hero-foreground/90 mb-8 max-w-3xl mx-auto">
              From 2023 to 2025, we've been revolutionizing insurance through technology. 
              We're dissecting the DNA of insurance, mapping it out down to the nucleus, 
              and rebuilding it for the digital age.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-hero-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold text-hero-foreground mb-2">Tech-First</div>
                <div className="text-hero-foreground/90">Digital Innovation Platform</div>
              </div>
              <div className="bg-hero-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold text-hero-foreground mb-2">DNA Mapping</div>
                <div className="text-hero-foreground/90">Insurance Process Optimization</div>
              </div>
              <div className="bg-hero-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold text-hero-foreground mb-2">Nucleus Focus</div>
                <div className="text-hero-foreground/90">Core Insurance Transformation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Join the Anucleo Family?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the difference that comes with working with an insurance company 
            that truly cares about your protection and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-quote">
              <Button className="btn-hero text-lg px-8 py-4">
                Get Your Free Quote
              </Button>
            </Link>
            <Button className="btn-trust text-lg px-8 py-4">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;