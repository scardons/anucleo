import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import {
  MessageCircle,
  FileText,
  Shield,
  ArrowRight,
  CheckCircle,
  Phone,
} from 'lucide-react';

import processImage from '@/assets/process-guide.jpg';

const ProcessSection = () => {
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 32,
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

  const processSteps = [
    {
      step: '01',
      icon: MessageCircle,
      title: 'Share Your Needs',
      subtitle: 'Tell Us What Matters',
      description:
        'Start by sharing basic information about your insurance needs. We keep the process simple so you can move forward without long forms or confusion.',
      features: ['Simple first step', 'Low-friction process', 'No obligation'],
      color: 'from-blue-600 to-blue-500',
    },
    {
      step: '02',
      icon: FileText,
      title: 'Review Your Options',
      subtitle: 'Guided Coverage Review',
      description:
        'Our team reviews your information and helps identify coverage options that match your situation, budget, and protection goals.',
      features: ['Personalized guidance', 'Clear recommendations', 'Budget-aware options'],
      color: 'from-blue-500 to-sky-500',
    },
    {
      step: '03',
      icon: Shield,
      title: 'Get Protected',
      subtitle: 'Move Forward Confidently',
      description:
        'Once the right coverage is identified, we help you complete the process and stay protected with ongoing support when you need it.',
      features: ['Reliable support', 'Trusted advisors', 'Peace of mind'],
      color: 'from-sky-500 to-blue-700',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(37,99,235,0.04)_35%,rgba(37,99,235,0.04)_65%,transparent_65%)] bg-[length:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-blue-700">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold">
              Your Path to Protection
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            How We Guide You to the Right Coverage
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Insurance does not have to feel complicated. Our simple 3-step
            process helps you understand your options and move forward with
            confidence.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} className="relative" variants={fadeUp}>
              <div className="group h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Step Number */}
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-2xl font-bold text-white shadow-lg`}
                >
                  {step.step}
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                      <step.icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        {step.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-gray-600">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-1/2 -right-5 hidden -translate-y-1/2 lg:block">
                  <ArrowRight className="h-8 w-8 text-blue-300" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA with Image */}
        <motion.div
          className="grid items-center gap-12 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 shadow-2xl md:p-12 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="space-y-6" variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/20">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">
                Speak with an insurance advisor
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to protect what matters most?
            </h3>

            <p className="max-w-xl text-lg leading-8 text-blue-50">
              Our team is ready to help you understand your options, answer your
              questions, and guide you toward coverage that fits your needs.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:2019778899"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (201) 977-8899
              </a>

              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div className="relative" variants={fadeRight}>
            <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />

            <img
              src={processImage}
              alt="Professional insurance advisor helping with protection planning"
              className="relative h-auto w-full rounded-2xl object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;