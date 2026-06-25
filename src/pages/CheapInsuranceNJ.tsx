import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight, Phone, DollarSign, MapPin, Star, Clock, FileText, Users, Building, Home, Umbrella, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SavingsCalculator from '@/components/SavingsCalculator';
import LottieCar from '@/components/LottieCar';
import vistaNewJersey from '@/assets/vista-new-jersey.png';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } },
};

const CheapInsuranceNJ = () => {
  const carRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carRef.current || !sectionRef.current) return;
    const car = carRef.current;
    const section = sectionRef.current;

    const animate = () => {
      const sectionW = section.offsetWidth;
      const carW = car.offsetWidth;
      const tl = gsap.timeline({ repeat: -1 });
      tl.set(car, { x: -carW, y: 0 })
        .to(car, { x: sectionW * 0.5, y: 25, duration: 4, ease: 'sine.inOut' })
        .to(car, { x: sectionW + carW, y: -25, duration: 4, ease: 'sine.inOut' });
    };

    animate();
    const onResize = () => {
      gsap.killTweensOf(car);
      animate();
    };
    window.addEventListener('resize', onResize);

    return () => {
      gsap.killTweensOf(car);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coverages = [
    { icon: Car, title: 'Auto Insurance', desc: 'Affordable car insurance with full coverage options, liability, collision, and uninsured motorist protection.', link: '/auto-insurance' },
    { icon: Home, title: 'Homeowners Insurance', desc: 'Protect your home and belongings with comprehensive coverage at competitive New Jersey rates.', link: '/get-quote' },
    { icon: Umbrella, title: 'Umbrella Insurance', desc: 'Extra liability coverage beyond standard policies — starting as low as $150/year for $1M in protection.', link: '/umbrella-insurance' },
    { icon: Building, title: 'Commercial Insurance', desc: 'Business insurance packages for NJ contractors, retailers, and professional services.', link: '/commercial-insurance' },
    { icon: Users, title: 'Workers Compensation', desc: 'Required NJ workers comp coverage with flexible payment plans and claims management.', link: '/workers-comp' },
  ];

  const reasons = [
    { icon: DollarSign, title: 'Affordable Rates', desc: 'We shop multiple carriers to find the best coverage at the lowest price for New Jersey residents and businesses.' },
    { icon: Star, title: 'Local NJ Expertise', desc: 'Based in Woodland Park, NJ — we understand the unique insurance needs of New Jersey families and businesses.' },
    { icon: Clock, title: 'Fast Quotes & Claims', desc: 'Get a free quote in minutes. When you need to file a claim, our team handles the process quickly.' },
    { icon: Phone, title: 'Personal Service', desc: 'No automated menus or call centers. You speak directly with a licensed NJ insurance agent who knows you by name.' },
  ];

  return (
    <>
      <Helmet>
        <title>Cheap Insurance New Jersey | Affordable Coverage | Anucleo Insurance</title>
        <meta name="description" content="Find cheap insurance in New Jersey with Anucleo Insurance. Affordable auto, home, commercial, umbrella, and workers comp coverage. Free quote — call (201) 977-8899." />
        <meta name="keywords" content="cheap insurance New Jersey, affordable insurance NJ, cheap car insurance New Jersey, cheap home insurance NJ, low cost insurance New Jersey, insurance quotes New Jersey" />
        <link rel="canonical" href="/cheap-insurance-new-jersey" />
        <meta property="og:title" content="Cheap Insurance New Jersey | Affordable Coverage from Anucleo" />
        <meta property="og:description" content="Get affordable insurance in New Jersey. Auto, home, commercial, umbrella, and workers comp. Local NJ agents serving Woodland Park and all of New Jersey." />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content="Woodland Park" />
        <script type="application/ld+json">{`
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Cheap Insurance New Jersey",
          "description": "Affordable insurance coverage for New Jersey residents and businesses",
          "provider": {
            "@type": "InsuranceAgency",
            "name": "Anucleo Insurance",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "365 Rifle Camp Road Suite 209",
              "addressLocality": "Woodland Park",
              "addressRegion": "NJ",
              "postalCode": "07424",
              "addressCountry": "US"
            },
            "telephone": "(201) 977-8899",
            "url": "https://www.anucleo.com"
          }
        }`}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeLeft} initial="hidden" animate="visible">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Cheap Insurance in New Jersey
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                Affordable coverage from a local NJ agency that actually cares. Auto, home, commercial, umbrella we find you the best rate.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link to="/get-quote">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-base px-8 py-6">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+12019778899">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold text-base px-8 py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    (201) 977-8899
                  </Button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden md:block"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src={vistaNewJersey}
                alt="New Jersey skyline"
                className="w-full h-auto rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div ref={sectionRef} className="relative">
        <div
          ref={carRef}
          className="absolute top-4 left-0 z-10 pointer-events-none"
        >
          <LottieCar size={120} />
        </div>
        <SavingsCalculator />
      </div>

      {/* Coverage Types */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Affordable Insurance Options in New Jersey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you need personal or business coverage, we offer cheap insurance rates across New Jersey without cutting corners on protection.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coverages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Link to={item.link} className="group block bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.4 } }}
                  >
                    <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 mt-3 group-hover:text-blue-700">
                    Learn more <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Anucleo Is the Best Choice for Cheap Insurance in NJ
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We help New Jersey residents and businesses save money while getting the coverage they need.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex gap-5 bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.1, backgroundColor: '#bfdbfe' }}
                >
                  <item.icon className="w-7 h-7 text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NJ Coverage Areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Serving All of New Jersey
            </h2>
            <p className="text-lg text-slate-600">
              From Bergen County to Atlantic City, we provide cheap insurance throughout New Jersey.
              Our office at <strong>365 Rifle Camp Road, Woodland Park</strong> serves clients across the state.
            </p>
          </motion.div>
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4 text-center">Areas We Serve</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-600">
                {[
                  'Woodland Park', 'Paterson', 'Clifton', 'Passaic', 'Wayne', 'Bloomfield',
                  'Montclair', 'Newark', 'Jersey City', 'Hoboken', 'Union City', 'Elizabeth',
                  'Edison', 'Woodbridge', 'Middletown', 'Red Bank', 'Toms River', 'Lakewood',
                  'Trenton', 'Camden', 'Cherry Hill', 'Atlantic City', 'Vineland', 'Morristown',
                ].map((city, i) => (
                  <motion.div
                    key={city}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    whileHover={{ x: 3, color: '#2563eb', transition: { duration: 0.15 } }}
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{city}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-blue-500/20"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ width: '60%', skewX: '-20deg' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Save on Insurance in New Jersey?
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Get a free quote in minutes. No obligation, no hassle just the best rate for the coverage you need.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/get-quote">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-base px-10 py-6">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <a href="tel:+12019778899">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold text-base px-10 py-6">
                  <Phone className="mr-2 h-5 w-5" /> Call (201) 977-8899
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Cheap Insurance New Jersey — FAQ
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="cheapest">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                What is the cheapest insurance in New Jersey?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                The cheapest insurance depends on your needs. For auto insurance, minimum liability coverage is the most affordable option. For homeowners, bundling with auto can save up to 25%. Contact us for a personalized quote — we compare rates from multiple carriers to find you the best deal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="requirements">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                What insurance is required in New Jersey?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                New Jersey requires all drivers to carry liability insurance (minimum 25/50/25). Homeowners insurance is required by mortgage lenders. Workers compensation insurance is required for most businesses with employees. We can help you meet all NJ requirements affordably.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="savings">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                How can I save money on insurance in NJ?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Bundle policies (auto + home), increase deductibles, maintain good credit, ask about discounts (safe driver, multi-car, professional organizations), and review your coverage annually. Our agents will help you find every possible discount.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="process">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                How do I get a cheap insurance quote in New Jersey?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Getting a quote is easy. <Link to="/get-quote" className="text-blue-600 underline">Fill out our online form</Link> or call (201) 977-8899. One of our licensed agents will review your needs and find the most affordable coverage from our network of top-rated carriers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CheapInsuranceNJ;
