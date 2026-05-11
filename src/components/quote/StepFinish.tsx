// StepFinish.tsx
import { CheckCircle2, Clock, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const StepFinish = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
      >
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
      >
        Thank you!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-8 max-w-xl text-lg leading-8 text-gray-500"
      >
        We’ve received your quote request. One of our specialists will review
        your information and contact you within <span className="font-semibold text-gray-900">24 hours</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="flex items-center justify-center gap-3 text-blue-600">
          <Clock className="h-5 w-5" />
          <p className="font-semibold">
            Response time: within 24 hours
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          onClick={() => (window.location.href = '/')}
          className="bg-blue-600 px-8 py-3 text-lg text-white hover:bg-blue-700"
        >
          <Home className="mr-2 h-4 w-4" />
          Go Home
        </Button>
      </motion.div>
    </div>
  );
};

export default StepFinish;