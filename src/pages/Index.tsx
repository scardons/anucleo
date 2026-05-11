import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLenis } from '@/hooks/use-lenis';
import { useGSAP } from '@/hooks/use-gsap';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
import Services from '@/components/Services';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import EmailCaptureSection from '@/components/EmailCaptureSection';
import Footer from '@/components/Footer';

const Index = () => {
  useLenis();
  const gsap = useGSAP();

  return (
    <>
      <Helmet>
        <title>Anucleo Insurance | Comprehensive Protection for What Matters Most</title>
        <meta name="description" content="Protect your family and assets with comprehensive insurance solutions. Umbrella, commercial, and auto insurance from trusted experts. Get your free quote today." />
        <meta name="keywords" content="insurance, umbrella insurance, commercial insurance, auto insurance, liability protection, asset protection" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Anucleo Insurance | Comprehensive Protection" />
        <meta property="og:description" content="Protect what matters most with comprehensive insurance solutions from Anucleo." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navigation />
      <Hero />
      <ProblemSection />
      <ProcessSection />
      <Services />
      <TestimonialsSection />
      <FAQSection />
      <EmailCaptureSection />
      <Footer />
    </>
  );
};

export default Index;
