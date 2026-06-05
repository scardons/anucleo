import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import anuceLogo from '@/assets/anucelo-logo.png';

const Footer = () => {
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div className="space-y-6" variants={fadeUp}>
            <Link to="/" className="inline-flex items-center group">
              <img
                src={anuceLogo}
                alt="Anucleo Insurance"
                className="h-24 sm:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Founded by Servando Velasquez, protecting families and businesses
              for over 25 years. Your trusted guide to comprehensive insurance
              solutions.
            </p>
          </motion.div>

          {/* Insurance Services */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Insurance Services
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/umbrella-insurance"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Umbrella Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/commercial-insurance"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Commercial Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/auto-insurance"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Auto Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Contact Info
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">
                    (201) 977-8899
                  </p>
                  <p className="text-sm text-muted-foreground">
                    24/7 Claims Support
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">
                    services@anucleo.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Get a Free Quote
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">
                    365 Rifle Camp Road Suite 209
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Woodland Park, NJ 07424
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">
                    Mon-Fri: 8AM-6PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sat: 9AM-2PM
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-border"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 Anucleo Insurance Solutions. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>

              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Licensing
              </Link>

              <Link
                to="/employee/login"
                className="text-muted-foreground/50 hover:text-amber-500 transition-colors duration-200 text-xs"
              >
                Employee Portal
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Designer Credit */}
        <motion.div
          className="border-t border-border bg-muted/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;