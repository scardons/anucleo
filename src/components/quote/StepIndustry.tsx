import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Wrench, Home, Zap, Droplets, Wind, Truck, Sparkles, Check, MoreHorizontal, Trees } from 'lucide-react';

const contractingTypes = [
  'General contractor',
  'Carpentry',
  'Handyman',
  'Hardscaping',
  'Landscaping',
  'Roofing',
  'Electrical',
  'Plumbing',
  'HVAC',
  'Renovation',
  'Demolition',
  'Masonry',
  'Window installation',
  'Concrete',
  'Debris Hauling',
  'Cabinets',
  'Pressure washing',
  'Cleaning service',
  'Other',
];

const iconMap: Record<string, React.ReactNode> = {
  'General contractor': <Building2 className="h-8 w-8" />,
  'Carpentry': <Wrench className="h-8 w-8" />,
  'Handyman': <Wrench className="h-8 w-8" />,
  'Hardscaping': <Trees className="h-8 w-8" />,
  'Landscaping': <Trees className="h-8 w-8" />,
  'Roofing': <Home className="h-8 w-8" />,
  'Electrical': <Zap className="h-8 w-8" />,
  'Plumbing': <Droplets className="h-8 w-8" />,
  'HVAC': <Wind className="h-8 w-8" />,
  'Renovation': <Home className="h-8 w-8" />,
  'Demolition': <Wrench className="h-8 w-8" />,
  'Masonry': <Building2 className="h-8 w-8" />,
  'Window installation': <Home className="h-8 w-8" />,
  'Concrete': <Wrench className="h-8 w-8" />,
  'Debris Hauling': <Truck className="h-8 w-8" />,
  'Cabinets': <Wrench className="h-8 w-8" />,
  'Pressure washing': <Droplets className="h-8 w-8" />,
  'Cleaning service': <Sparkles className="h-8 w-8" />,
  'Other': <MoreHorizontal className="h-8 w-8" />,
};

const StepIndustry = ({ selected, onToggle, onNext, onBack }: any) => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What type of contracting?
        </h2>
        <p className="text-gray-500 text-lg">
          Select all that apply
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contractingTypes.map((item, i) => {
          const isSelected = selected.includes(item);

          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
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
                {iconMap[item] || <Wrench className="h-8 w-8" />}
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
        className="flex items-center justify-between mt-10"
      >
        <Button variant="outline" onClick={onBack} className="px-6 py-3">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Button
          disabled={!selected.length}
          onClick={onNext}
          className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
};

export default StepIndustry;
