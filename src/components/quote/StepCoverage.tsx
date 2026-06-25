import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Shield, Building2, Car, Briefcase, FileText, AlertTriangle, Globe, Umbrella, Users, Check, Wrench, HardHat, Home } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'General Liability': <Shield className="h-8 w-8" />,
  'Commercial Property': <Building2 className="h-8 w-8" />,
  'Workers Compensation': <Briefcase className="h-8 w-8" />,
  'Commercial Auto': <Car className="h-8 w-8" />,
  'Professional Liability': <FileText className="h-8 w-8" />,
  'Business Interruption': <AlertTriangle className="h-8 w-8" />,
  'Cyber Liability': <Globe className="h-8 w-8" />,
  'Commercial Umbrella': <Umbrella className="h-8 w-8" />,
  'Employment Practices Liability Insurance': <Users className="h-8 w-8" />,
  'Homeowners': <Building2 className="h-8 w-8" />,
  'Renters': <Building2 className="h-8 w-8" />,
  'Condo': <Building2 className="h-8 w-8" />,
  'Umbrella': <Umbrella className="h-8 w-8" />,
  'Flood / Earthquake': <AlertTriangle className="h-8 w-8" />,
  'Vacation / Secondary Homes': <Building2 className="h-8 w-8" />,
  'Personal Property (Valuables)': <Shield className="h-8 w-8" />,
  'Water / Sewer Backup': <AlertTriangle className="h-8 w-8" />,
  'Equipment Breakdown': <Wrench className="h-8 w-8" />,
  'Basic Liability': <Car className="h-8 w-8" />,
  'Full Coverage': <Car className="h-8 w-8" />,
  'Collision': <Car className="h-8 w-8" />,
  'Comprehensive': <Car className="h-8 w-8" />,
  'Motorcycle': <Car className="h-8 w-8" />,
  'Recreational Vehicle': <Car className="h-8 w-8" />,
  'Classic Car': <Car className="h-8 w-8" />,
  'Commercial Insurance': <Car className="h-8 w-8" />,
  'Roadside Assistance': <Car className="h-8 w-8" />,
  'Builders Risk': <Building2 className="h-8 w-8" />,
  'Inland Marine': <Shield className="h-8 w-8" />,
  'License': <FileText className="h-8 w-8" />,
  'Bonds': <FileText className="h-8 w-8" />,
};

const industries = [
  { key: 'commercial', label: 'Commercial', icon: <Building2 className="h-5 w-5" /> },
  { key: 'construction', label: 'Construction', icon: <HardHat className="h-5 w-5" /> },
  { key: 'home', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { key: 'auto', label: 'Auto', icon: <Car className="h-5 w-5" /> },
];

const StepCoverage = ({ workTypes, selected, onToggle, onNext, industry, onIndustryChange }: any) => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What type of insurance are you interested in?
        </h2>
        <p className="text-gray-500 text-lg">
          Select all that apply
        </p>
      </motion.div>

      <div className="flex justify-center gap-2 mb-8">
        {industries.map((ind) => (
          <button
            key={ind.key}
            onClick={() => onIndustryChange(ind.key)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
              industry === ind.key
                ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm'
                : 'border-gray-200 bg-white text-gray-600 hover:border-blue-400 hover:text-blue-600'
            }`}
          >
            <span className={industry === ind.key ? 'text-blue-600' : 'text-gray-400'}>{ind.icon}</span>
            {ind.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {workTypes.map((item: string, i: number) => {
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
                  : item === 'Commercial Auto'
                  ? 'border-blue-400 bg-blue-50/60 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-blue-400 hover:shadow-md'
                }
              `}
            >
              {item === 'Commercial Auto' && !isSelected && (
                <div className="absolute -top-2.5 right-3 rounded-full bg-blue-600 px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                  Most popular
                </div>
              )}
              <div className={`transition-colors duration-200 ${isSelected ? 'text-blue-600' : item === 'Commercial Auto' ? 'text-blue-600' : 'text-gray-500'}`}>
                {iconMap[item] || <Shield className="h-8 w-8" />}
              </div>
              <span className={`font-semibold text-sm leading-tight ${item === 'Commercial Auto' && !isSelected ? 'text-blue-800' : 'text-gray-800'}`}>
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
        className="flex justify-end mt-10"
      >
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

export default StepCoverage;
