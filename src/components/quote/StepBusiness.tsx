import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, AlertTriangle, Building2, Briefcase, Truck, XCircle, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Has one or more W2 or W9 employees': <Users className="h-8 w-8" />,
  'Hires subcontractors': <Users className="h-8 w-8" />,
  'Has had any claims or bankruptcy in the last 3 years': <AlertTriangle className="h-8 w-8" />,
  'Your business address is owned, not leased': <Building2 className="h-8 w-8" />,
  'Does commercial work': <Briefcase className="h-8 w-8" />,
  'Has commercial vehicles': <Truck className="h-8 w-8" />,
  'None of the above': <XCircle className="h-8 w-8" />,
};

const StepBusiness = ({
  items,
  selected,
  onToggle,
  onNext,
  onBack,
}: any) => {

  return (
    <div className="mx-auto max-w-4xl">
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

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item: string, i: number) => {
          const isSelected = selected.includes(item);

          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => onToggle(item)}
              className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 flex flex-col items-center gap-3 text-center relative
                ${isSelected
                  ? 'border-blue-600 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-blue-400 hover:shadow-md'
                }
              `}
            >
              <div className={`transition-colors duration-200 ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
                {iconMap[item] || <Briefcase className="h-8 w-8" />}
              </div>
              <span className="text-gray-800 font-semibold text-sm leading-tight">
                {item}
              </span>
              {isSelected && (
                <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-0.5">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 flex items-center justify-between"
      >
        <Button variant="outline" onClick={onBack} className="px-6 py-3">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Button
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
