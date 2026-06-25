import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Search, Briefcase, GraduationCap, Heart, Building2, Car, Check } from 'lucide-react';
import { carYears, carMakes, carModelsByMake, carTrims, carUses, carDailyMiles } from './carData';

const useIconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="h-8 w-8" />,
  GraduationCap: <GraduationCap className="h-8 w-8" />,
  Heart: <Heart className="h-8 w-8" />,
  Building2: <Building2 className="h-8 w-8" />,
  Car: <Car className="h-8 w-8" />,
};

type Section = 'carYear' | 'carMake' | 'carModel' | 'carTrim' | 'carUse' | 'carDailyMiles' | 'carOwnership' | 'carFullCoverage';

const sections: { key: Section; label: string }[] = [
  { key: 'carYear', label: "What's your car year?" },
  { key: 'carMake', label: "What's your car make?" },
  { key: 'carModel', label: "What's your car model?" },
  { key: 'carTrim', label: "What's your car trim?" },
  { key: 'carUse', label: "What's the main use of your car?" },
  { key: 'carDailyMiles', label: 'How many miles do you drive this car daily?' },
  { key: 'carOwnership', label: 'Do you own or lease this car?' },
  { key: 'carFullCoverage', label: 'Would you like to include full coverage?' },
];

const StepCarDetails = ({ data, onChange, onNext, onBack }: any) => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [searchYear, setSearchYear] = useState('');
  const [searchMake, setSearchMake] = useState('');
  const [searchModel, setSearchModel] = useState('');

  const section = sections[sectionIndex];
  const current = data || {};
  const isLast = sectionIndex === sections.length - 1;

  const filteredYears = carYears.filter((y) => y.includes(searchYear));
  const filteredMakes = carMakes.filter((m) => m.toLowerCase().includes(searchMake.toLowerCase()));
  const models = data.carMake ? carModelsByMake[data.carMake] || [] : [];
  const filteredModels = models.filter((m) => m.toLowerCase().includes(searchModel.toLowerCase()));

  const handleSelect = (value: string) => {
    const key = section.key;
    const next = { ...current, [key]: value };
    onChange(next);
    if (!isLast) {
      setSectionIndex(sectionIndex + 1);
      setSearchYear('');
      setSearchMake('');
      setSearchModel('');
    }
  };

  const handleBack = () => {
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
      setSearchYear('');
      setSearchMake('');
      setSearchModel('');
    } else {
      onBack();
    }
  };

  const handleSkipModel = () => {
    if (!isLast) {
      setSectionIndex(sectionIndex + 1);
    }
  };

  const renderOptions = () => {
    switch (section.key) {
      case 'carYear':
        return (
          <div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search car year"
                value={searchYear}
                onChange={(e) => setSearchYear(e.target.value)}
                className="h-12 pl-12 text-base"
              />
            </div>
            <div className="grid max-h-64 grid-cols-3 gap-2 overflow-y-auto rounded-xl border border-gray-200 p-2 sm:grid-cols-4">
              {filteredYears.map((year) => (
                <motion.div
                  key={year}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSelect(year)}
                  className={`cursor-pointer rounded-lg border-2 p-3 text-center text-sm font-semibold transition-all duration-200 ${
                    current.carYear === year
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-400'
                  }`}
                >
                  {year}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'carMake':
        return (
          <div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search car make"
                value={searchMake}
                onChange={(e) => setSearchMake(e.target.value)}
                className="h-12 pl-12 text-base"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {filteredMakes.map((make, i) => (
                <motion.div
                  key={make}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSelect(make)}
                  className={`cursor-pointer rounded-xl border-2 p-5 text-center font-bold text-sm transition-all duration-200 relative ${
                    current.carMake === make
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-400'
                  }`}
                >
                  {make}
                  {current.carMake === make && (
                    <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'carModel':
        return (
          <div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search car model"
                value={searchModel}
                onChange={(e) => setSearchModel(e.target.value)}
                className="h-12 pl-12 text-base"
              />
            </div>
            <div className="grid max-h-64 grid-cols-2 gap-2 overflow-y-auto rounded-xl border border-gray-200 p-2 sm:grid-cols-3">
              {filteredModels.map((model, i) => (
                <motion.div
                  key={model}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSelect(model)}
                  className={`cursor-pointer rounded-lg border-2 p-3 text-center text-sm font-semibold transition-all duration-200 ${
                    current.carModel === model
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-400'
                  }`}
                >
                  {model}
                </motion.div>
              ))}
            </div>
            <Button variant="ghost" onClick={handleSkipModel} className="mt-3 w-full text-blue-600">
              I don't see my model
            </Button>
          </div>
        );

      case 'carTrim':
        return (
          <div className="grid gap-3 sm:grid-cols-2">
            {carTrims.map((trim, i) => (
              <motion.div
                key={trim}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleSelect(trim)}
                className={`cursor-pointer rounded-xl border-2 p-5 text-center font-semibold text-sm transition-all duration-200 relative ${
                  current.carTrim === trim
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                {trim}
                {current.carTrim === trim && (
                  <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );

      case 'carUse':
        return (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {carUses.map((opt, i) => (
              <motion.div
                key={opt.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleSelect(opt.label)}
                className={`cursor-pointer rounded-xl border-2 p-5 flex flex-col items-center gap-2 text-center transition-all duration-200 relative ${
                  current.carUse === opt.label
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                <div className={current.carUse === opt.label ? 'text-blue-600' : 'text-gray-500'}>
                  {useIconMap[opt.icon] || <Car className="h-8 w-8" />}
                </div>
                <span className="font-semibold text-sm">{opt.label}</span>
                {current.carUse === opt.label && (
                  <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );

      case 'carOwnership':
        return (
          <div className="grid gap-3 sm:grid-cols-3">
            {['Owned', 'Financed', 'Leased'].map((opt, i) => (
              <motion.div
                key={opt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleSelect(opt)}
                className={`cursor-pointer rounded-xl border-2 p-6 text-center font-semibold transition-all duration-200 relative ${
                  current.carOwnership === opt
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                {opt}
                {current.carOwnership === opt && (
                  <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );

      case 'carFullCoverage':
        return (
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: 'Yes', label: 'Yes', sub: 'Recommended for financed vehicles' },
                { value: 'No', label: 'No', sub: '' },
              ].map((opt, i) => (
                <motion.div
                  key={opt.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => handleSelect(opt.value)}
                  className={`cursor-pointer rounded-xl border-2 p-6 text-center transition-all duration-200 relative ${
                    current.carFullCoverage === opt.value
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-400'
                  }`}
                >
                  <div className={`font-semibold text-lg ${current.carFullCoverage === opt.value ? 'text-blue-700' : ''}`}>
                    {opt.label}
                  </div>
                  {opt.sub && (
                    <p className="mt-1 text-xs text-gray-400">{opt.sub}</p>
                  )}
                  {current.carFullCoverage === opt.value && (
                    <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h4 className="mb-4 text-lg font-bold text-gray-900">
                What do the different coverages mean?
              </h4>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <strong className="text-blue-700">Liability car insurance</strong> covers damage to the other person's vehicle along with their medical costs if you cause an accident. This is the minimum coverage required in most states.
                </div>
                <div>
                  <strong className="text-blue-700">Full coverage</strong> usually means you have comprehensive and collision insurance, along with anything else your state requires (such as liability coverage).
                </div>
                <div>
                  <strong className="text-blue-700">Comprehensive coverage</strong> covers non-collision damages to your vehicle. This includes theft, vandalism, weather-related damage, and acts of God.
                </div>
                <div>
                  <strong className="text-blue-700">Collision coverage</strong> can cover damage to your vehicle, but does not cover the other party's vehicle or anyone's bodily injuries.
                </div>
                <p className="text-xs text-gray-500 italic">
                  Lenders and leasing companies typically require you to carry full-coverage insurance.
                </p>
              </div>
            </div>
          </div>
        );

      case 'carDailyMiles':
        return (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {carDailyMiles.map((miles, i) => (
              <motion.div
                key={miles}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleSelect(miles)}
                className={`cursor-pointer rounded-xl border-2 p-5 text-center font-semibold transition-all duration-200 relative ${
                  current.carDailyMiles === miles
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                {miles}
                {miles === '25 Miles' && (
                  <p className="mt-1 text-xs text-gray-400">National average</p>
                )}
                {current.carDailyMiles === miles && (
                  <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full p-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );
    }
  };

  const allFilled = sections.every((s) => current[s.key]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center justify-between text-sm text-gray-500">
        <span>Car {sectionIndex + 1} of {sections.length}</span>
        <span className="font-medium text-blue-600">{section.label}</span>
      </div>

      <div className="mb-1 h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${((sectionIndex + 1) / sections.length) * 100}%` }}
        />
      </div>

      <motion.div
        key={section.key}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-8"
      >
        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          {section.label}
        </h3>
        {renderOptions()}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 flex items-center justify-between"
      >
        <Button variant="outline" onClick={handleBack} className="px-6 py-3">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {isLast && (
          <Button
            disabled={!allFilled}
            onClick={onNext}
            className="bg-blue-600 px-8 py-3 text-lg text-white hover:bg-blue-700"
          >
            Continue
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default StepCarDetails;
