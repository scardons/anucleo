import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Download,
  Shield,
  CheckCircle,
  ArrowRight,
  Mail,
  FileText,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import businessProtectionGuide from '@/assets/business-protection-guide.jpg';

const EmailCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      setIsSubmitted(true);

      // Here you would integrate with your email service
      console.log('Email submitted:', email);
    }
  };

  const guideFeatures = [
    'Essential commercial coverage checklist for every business',
    'How to calculate the right amount of liability protection',
    'Premium-saving tips for business insurance planning',
    'Red flags that mean your business may need more coverage',
    'Step-by-step commercial protection planning worksheet',
  ];

  const bonuses = [
    'Commercial insurance insights for business owners',
    'Monthly business protection tips and updates',
    'Early access to new commercial coverage options',
    'Annual business coverage review reminders',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(37,99,235,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(37,99,235,0.04)_35%,rgba(37,99,235,0.04)_65%,transparent_65%)] bg-[length:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={fadeLeft}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-blue-700">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Business Protection Guide
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-5xl">
                Get Your{' '}
                <span className="text-blue-600">
                  Business Protection
                </span>{' '}
                Checklist
              </h2>

              <p className="max-w-2xl text-xl leading-8 text-gray-600">
                Do not leave your business&apos;s future to chance. Access our
                comprehensive guide to better understand how to protect your
                commercial operations, assets, and long-term stability.
              </p>
            </div>

            {/* Guide Features */}
            <motion.div
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md"
              variants={fadeUp}
            >
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                <Download className="mr-2 h-5 w-5 text-blue-600" />
                What&apos;s Inside Your Guide:
              </h3>

              <ul className="space-y-3">
                {guideFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Email Form */}
            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 shadow-xl"
                variants={fadeUp}
              >
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      Access Your Guide
                    </h3>

                    <p className="text-blue-50">
                      Enter your email to receive the guide and additional
                      business protection insights.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 border-white/20 bg-white px-4 py-3 text-lg text-gray-900 placeholder:text-gray-400"
                    />

                    <Button
                      type="submit"
                      className="whitespace-nowrap bg-white px-8 py-3 text-lg font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl"
                    >
                      Get the Guide
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <p className="text-center text-xs text-blue-100">
                    No spam. Unsubscribe with one click. We respect your privacy.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center"
                variants={fadeUp}
              >
                <CheckCircle className="mx-auto mb-4 h-12 w-12 text-blue-600" />

                <h3 className="mb-2 text-xl font-bold text-blue-700">
                  Success! Check Your Email
                </h3>

                <p className="text-gray-600">
                  Your business protection guide is on its way. Please check
                  your inbox and spam folder.
                </p>
              </motion.div>
            )}

            {/* Bonus Features */}
            <motion.div
              className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-md backdrop-blur"
              variants={fadeUp}
            >
              <h4 className="mb-4 flex items-center font-semibold text-gray-900">
                <Mail className="mr-2 h-5 w-5 text-blue-600" />
                You&apos;ll Also Receive:
              </h4>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span className="text-sm text-gray-600">{bonus}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div className="relative" variants={fadeRight}>
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-200/30 blur-3xl" />

            <img
              src={businessProtectionGuide}
              alt="Business protection checklist and commercial insurance guide"
              className="relative h-auto w-full rounded-[2rem] object-cover shadow-2xl"
            />

            {/* Floating Badge */}
            <div className="absolute -right-4 -top-6 rotate-6 rounded-2xl bg-blue-600 p-4 text-white shadow-xl sm:-right-6">
              <div className="text-center">
                <div className="text-xl font-bold">GUIDE</div>
                <div className="text-sm">Business Value</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Trusted by
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    Local Businesses
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;