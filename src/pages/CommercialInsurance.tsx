import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Briefcase,
  CheckCircle,
  Clock,
  Phone,
  Shield,
  Truck,
  Users,
  Zap,
  HardHat,
  Store,
  Laptop,
  Stethoscope,
  Factory,
  Home,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import commercialImage from '@/assets/commercial-insurance.jpg';

const CommercialInsurance = () => {
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const fadeLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -32,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const fadeRight: Variants = {
    hidden: {
      opacity: 0,
      x: 32,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const coverageTypes = [
    {
      icon: Shield,
      title: 'General Liability',
      description:
        'Protection against customer injuries, property damage, and liability claims related to your business operations.',
      includes: [
        'Customer injury claims',
        'Property damage claims',
        'Legal defense support',
      ],
    },
    {
      icon: Building2,
      title: 'Commercial Property',
      description:
        'Coverage for your building, equipment, inventory, furniture, and other physical business assets.',
      includes: [
        'Building protection',
        'Equipment coverage',
        'Inventory protection',
      ],
    },
    {
      icon: Briefcase,
      title: 'Professional Liability',
      description:
        'Coverage for service-based businesses against errors, omissions, negligence, or professional mistakes.',
      includes: [
        'Errors and omissions',
        'Professional mistakes',
        'Client financial loss claims',
      ],
    },
    {
      icon: Truck,
      title: 'Commercial Auto',
      description:
        'Protection for company vehicles, work trucks, delivery vehicles, and vehicles used for business purposes.',
      includes: [
        'Business vehicle coverage',
        'Fleet protection',
        'Driver liability support',
      ],
    },
    {
      icon: Users,
      title: 'Workers Compensation',
      description:
        'Coverage for employee injuries, medical costs, lost wages, and work-related incidents.',
      includes: [
        'Employee injury coverage',
        'Medical cost support',
        'Lost wage replacement',
      ],
    },
    {
      icon: Zap,
      title: 'Cyber Liability',
      description:
        'Protection against cyber attacks, data breaches, ransomware, and digital business risks.',
      includes: [
        'Data breach response',
        'Cyber attack support',
        'Digital risk protection',
      ],
    },
  ];

  const industries = [
    {
      icon: HardHat,
      title: 'Construction & Contracting',
    },
    {
      icon: Store,
      title: 'Retail & Restaurants',
    },
    {
      icon: Laptop,
      title: 'Technology & IT',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Medical',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
    },
    {
      icon: Home,
      title: 'Real Estate',
    },
    {
      icon: Truck,
      title: 'Transportation',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Tailored Protection',
      description:
        'Coverage designed around your business model, industry, risks, and growth plans.',
    },
    {
      icon: Clock,
      title: 'Fast Quote Process',
      description:
        'Submit your basic information and our team will contact you to complete the quote process.',
    },
    {
      icon: Users,
      title: 'Dedicated Guidance',
      description:
        'Work with a real insurance advisor who helps you understand your best coverage options.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Basic Info',
      description:
        'Tell us what type of business you run and what kind of coverage you need.',
    },
    {
      number: '02',
      title: 'We Review Your Needs',
      description:
        'An Anucleo representative reviews your information and identifies the right coverage options.',
    },
    {
      number: '03',
      title: 'Get Your Quote',
      description:
        'We contact you with personalized options and help you move forward with confidence.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Commercial Insurance | Business Protection | Anucleo Insurance
        </title>
        <meta
          name="description"
          content="Protect your business with commercial insurance solutions from Anucleo. Get coverage for liability, property, workers compensation, commercial auto, cyber liability, and more."
        />
        <meta
          name="keywords"
          content="commercial insurance, business insurance, general liability, commercial property, workers compensation, professional liability, cyber insurance, commercial auto insurance"
        />
        <link rel="canonical" href="/commercial-insurance" />
      </Helmet>

      <Navigation />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/70 to-white" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <motion.div
                className="text-left"
                initial="hidden"
                animate="visible"
                variants={fadeLeft}
              >
                <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  Commercial insurance solutions
                </p>

                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                  Protect your business with the right coverage.
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Get business insurance tailored to your company, industry,
                  and risk profile. Simple, fast, and guided by real insurance
                  advisors.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link to="/get-quote">
                    <Button className="bg-blue-600 px-8 py-4 text-lg text-white hover:bg-blue-700">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <a
                    href="tel:2019778899"
                    className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                  >
                    <Phone className="mr-2 h-5 w-5 text-blue-600" />
                    Call: 201-977-8899
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
                    <p className="text-2xl font-bold text-blue-600">25+</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Years of experience
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
                    <p className="text-2xl font-bold text-blue-600">Fast</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Quote process
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
                    <p className="text-2xl font-bold text-blue-600">Custom</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Coverage options
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="relative"
                initial="hidden"
                animate="visible"
                variants={fadeRight}
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-blue-200/30 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                  <img
                    src={commercialImage}
                    alt="Commercial insurance for business owners"
                    className="h-[440px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Built for business protection
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Liability, property, workers compensation, commercial
                        auto, cyber liability, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="mx-auto mb-16 max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Coverage options
              </p>

              <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
                Commercial coverage for real business risks.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Every business is different. We help you identify the right
                mix of protection based on your operations, team, assets, and
                exposure.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={containerVariants}
            >
              {coverageTypes.map((coverage, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                    <coverage.icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {coverage.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {coverage.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {coverage.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/get-quote"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Request this coverage
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-blue-50/60 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="mx-auto mb-16 max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Why Anucleo
              </p>

              <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
                A simpler way to protect your business.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We make commercial insurance easier to understand, easier to
                quote, and easier to manage.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-md"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="mx-auto mb-16 max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Industries we serve
              </p>

              <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
                Protection for many types of businesses.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                From contractors to professional services, Anucleo helps
                businesses find coverage that fits their operations.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={containerVariants}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <industry.icon className="h-5 w-5 text-blue-600" />
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {industry.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              className="mx-auto mb-16 max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Simple quote process
              </p>

              <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
                Get started without long forms.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Submit the basics first. Then our team will contact you to
                collect the remaining details and prepare your quote.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-md"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />

          <motion.div
            className="relative mx-auto max-w-4xl px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Building2 className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Ready to protect your business?
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-50">
              Start with a simple quote request. Our team will review your
              business needs and help you identify the best coverage options.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/get-quote">
                <Button className="bg-white px-8 py-4 text-lg font-semibold text-blue-700 hover:bg-blue-50">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <a
                href="tel:2019778899"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 201-977-8899
              </a>
            </div>

            <p className="mt-6 text-sm text-blue-100">
              No obligation. Fast response. Personalized business coverage.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CommercialInsurance;