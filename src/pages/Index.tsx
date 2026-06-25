import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLenis } from '@/hooks/use-lenis';
import { useGSAP } from '@/hooks/use-gsap';
import gsap from 'gsap';
import Navigation from '@/components/Navigation';
import LottieCar from '@/components/LottieCar';
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
  const gsapHook = useGSAP();
  const carRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carRef.current || !sectionRef.current) return;
    const car = carRef.current;
    const section = sectionRef.current;

    const animate = () => {
      const sectionW = section.offsetWidth;
      const carW = car.offsetWidth;
      gsap.killTweensOf(car);
      const tl = gsap.timeline({ repeat: -1 });
      tl.set(car, { x: -carW, y: 0 })
        .to(car, { x: sectionW * 0.5, y: 20, duration: 4, ease: 'sine.inOut' })
        .to(car, { x: sectionW + carW, y: -20, duration: 4, ease: 'sine.inOut' });
    };

    animate();
    window.addEventListener('resize', animate);
    return () => {
      gsap.killTweensOf(car);
      window.removeEventListener('resize', animate);
    };
  }, []);

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
        <meta property="og:image" content="/assets/anucelo-logo-Ce8RBPQE.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          "name": "Anucleo Insurance",
          "image": "https://www.anucleo.com/assets/anucelo-logo-Ce8RBPQE.png",
          "description": "Comprehensive insurance solutions providing umbrella, commercial, and auto insurance in New Jersey.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "365 Rifle Camp Road Suite 209",
            "addressLocality": "Woodland Park",
            "addressRegion": "NJ",
            "postalCode": "07424",
            "addressCountry": "US"
          },
          "telephone": "(201) 977-8899",
          "email": "anucleo@outlook.com",
          "url": "https://www.anucleo.com",
          "areaServed": [
            {
              "@type": "State",
              "name": "New Jersey"
            },
            {
              "@type": "City",
              "name": "Woodland Park"
            },
            {
              "@type": "City",
              "name": "Paterson"
            },
            {
              "@type": "City",
              "name": "Clifton"
            },
            {
              "@type": "City",
              "name": "Passaic"
            }
          ],
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            }
          ]
        }`}</script>
      </Helmet>

      <Navigation />
      <Hero />
      <div ref={sectionRef} className="relative h-0">
        <div
          ref={carRef}
          className="absolute top-0 left-0 z-10 pointer-events-none"
        >
          <LottieCar size={120} />
        </div>
      </div>
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
