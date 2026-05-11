// StepCoverage.tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const StepCoverage = ({ workTypes, selected, onToggle, onNext }: any) => {
  return (
    <div className="max-w-3xl mx-auto">
      
      {/* HEADER */}
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

      {/* OPTIONS */}
      <div className="grid gap-4">
        {workTypes.map((item: string, i: number) => {
          const isSelected = selected.includes(item);

          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onToggle(item)}
              className={`cursor-pointer rounded-xl border p-5 transition-all duration-200 flex items-center justify-between
                ${isSelected
                  ? 'border-blue-600 bg-blue-50 shadow-sm'
                  : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <Checkbox checked={isSelected} />
                <span className="text-gray-800 font-medium">
                  {item}
                </span>
              </div>

              {/* Optional badge */}
              {isSelected && (
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">
                  Selected
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
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