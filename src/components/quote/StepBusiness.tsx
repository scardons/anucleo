// StepBusiness.tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';

const StepBusiness = ({
  items,
  selected,
  onToggle,
  email,
  onEmailChange,
  onNext,
  onBack,
}: any) => {
  const isEmailValid = email?.trim() && email.includes('@');

  return (
    <div className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Tell us about your business
        </h2>

        <p className="text-lg text-gray-500">
          Select what applies so we can match you with the right coverage.
        </p>
      </motion.div>

      <div className="mb-8 grid gap-4">
        {items.map((item: string, i: number) => {
          const isSelected = selected.includes(item);

          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onToggle(item)}
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-5 transition-all duration-200 ${
                isSelected
                  ? 'border-blue-600 bg-blue-50 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <Checkbox checked={isSelected} />
                <span className="font-medium text-gray-800">{item}</span>
              </div>

              {isSelected && (
                <span className="rounded-md bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600">
                  Selected
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
      >
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Email address
        </label>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="h-12 pl-12 text-base"
          />
        </div>

        <p className="mt-2 text-sm text-gray-500">
          We’ll use this to save your quote request and follow up with you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-10 flex items-center justify-between"
      >
        <Button variant="outline" onClick={onBack} className="px-6 py-3">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Button
          disabled={!isEmailValid}
          onClick={onNext}
          className="bg-blue-600 px-8 py-3 text-lg text-white hover:bg-blue-700"
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
};

export default StepBusiness;