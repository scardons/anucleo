import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@/hooks/use-gsap';
import { HardHat, Home, Car, Building2 } from 'lucide-react';
import heroImage from '@/assets/family-hero.jpeg';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const gsap = useGSAP();

  useEffect(() => {
    if (!gsap || !heroRef.current) return;

    gsap.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
    gsap.fromTo('.hero-cta', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });
    gsap.fromTo('.hero-image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.3 });
    gsap.fromTo('.hero-cards', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 1, delay: 0.6 });
  }, [gsap]);

  const services = [
    {
      icon: HardHat,
      title: 'General Contracting',
      desc: 'Contractors and builders coverage',
      price: 'For contractors',
      link: '/get-quote?industry=construction',
    },
    {
      icon: Home,
      title: 'Home',
      desc: 'Protection for your home and belongings',
      price: 'Home coverage',
      link: '/get-quote?industry=home',
    },
    {
      icon: Car,
      title: 'Auto',
      desc: 'Coverage for vehicles and drivers',
      price: 'Auto insurance',
      highlight: true,
      link: '/get-quote?industry=auto',
    },
    {
      icon: Building2,
      title: 'Commercial',
      desc: 'Protect your business and liability',
      price: 'Most popular',
      highlight: true,
      link: '/get-quote?industry=commercial',
    },
  ];

  const ServiceCard = ({ item }: any) => {
    const highlighted = item.highlight;
    return (
      <Link to={item.link} className="block relative">
        {highlighted && (
          <div className="absolute -top-2.5 left-4 z-10 rounded-full bg-blue-600 px-3.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
            Most popular
          </div>
        )}
        <div
          className={`rounded-2xl p-5 shadow-lg border-2 transition hover:shadow-xl hover:-translate-y-1 ${
            highlighted
              ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white'
              : 'border-gray-100 bg-white'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
              highlighted ? 'bg-blue-100' : 'bg-blue-50'
            }`}>
              <item.icon className={`h-6 w-6 ${highlighted ? 'text-blue-700' : 'text-blue-600'}`} />
            </div>

            <div className="text-left">
              <h3 className={`text-lg font-semibold ${highlighted ? 'text-blue-900' : 'text-gray-900'}`}>
                {item.title}
              </h3>

              <p className={`mt-1 text-sm ${highlighted ? 'text-blue-600' : 'text-gray-500'}`}>
                {item.desc}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <p className={`text-xs font-semibold uppercase ${highlighted ? 'text-blue-500' : 'text-gray-400'}`}>
              {item.price}
            </p>

            <span className={`rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 ${
              highlighted ? 'bg-blue-700 shadow-md' : 'bg-blue-600'
            }`}>
              Get Quote
            </span>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/70 to-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="text-left">
            <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Simple insurance solutions
            </p>

            <h1 className="hero-title text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Protect what matters most with the right coverage.
            </h1>

            <p className="hero-subtitle mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Get insurance tailored to your needs, fast, simple, and without paying for unnecessary extras.
            </p>

            <div className="hero-cta mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/get-quote">
                <Button className="px-8 py-4 text-lg bg-blue-600 text-white hover:bg-blue-700">
                  Get a Free Quote
                </Button>
              </Link>

              <a
                href="tel:2019778899"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
              >
                Call: 201-977-8899
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={heroImage}
                alt="Happy family smiling and hugging"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="hero-cards mt-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;