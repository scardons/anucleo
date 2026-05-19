import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StepCoverage from '@/components/quote/StepCoverage';
import StepIndustry from '@/components/quote/StepIndustry';
import StepBusiness from '@/components/quote/StepBusiness';
import StepContact from '@/components/quote/StepContact';
import StepFinish from '@/components/quote/StepFinish';

interface FormData {
  industry: string;
  workTypes: string[];
  contractingTypes: string[];
  businessCharacteristics: string[];
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  businessName: string;
  address: string;
  state: string;
}

const GetQuote = () => {
  const [searchParams] = useSearchParams();
  const industryFromUrl = searchParams.get('industry') || 'commercial';

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    industry: industryFromUrl,
    workTypes: [],
    contractingTypes: [],
    businessCharacteristics: [],
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    businessName: '',
    address: '',
    state: 'California',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const workTypesByIndustry = {
    construction: [
      'General Liability',
      'Workers Compensation',
      'Umbrella',
      'Commercial Auto',
      'Inland Marine',
      'Builders Risk',
      'Professional Liability',
      'License',
      'Bonds',
    ],
    home: [
      'Homeowners',
      'Renters',
      'Condo',
      'Umbrella',
      'Flood / Earthquake',
      'Vacation / Secondary Homes',
      'Personal Property (Valuables)',
      'Water / Sewer Backup',
      'Equipment Breakdown',
    ],
    auto: [
      'Basic Liability',
      'Full Coverage',
      'Collision',
      'Comprehensive',
      'Motorcycle',
      'Recreational Vehicle',
      'Classic Car',
      'Commercial Insurance',
      'Roadside Assistance',
    ],
    commercial: [
      'General Liability',
      'Commercial Property',
      'Workers Compensation',
      'Commercial Auto',
      'Professional Liability',
      'Business Interruption',
      'Cyber Liability',
      'Commercial Umbrella',
      'Employment Practices Liability Insurance',
    ],
  };

  const businessCharacteristics = [
    'Has one or more W2 or W9 employees',
    'Hires subcontractors',
    'Has had any claims or bankruptcy in the last 3 years',
    'Your business address is owned, not leased',
    'Does commercial work',
    'Has commercial vehicles',
    'None of the above',
  ];

  const contractingTypeList = [
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

  const steps = [
    { number: 1, title: 'COVERAGE', active: currentStep === 1 },
    { number: 2, title: 'INDUSTRY', active: currentStep === 2 },
    { number: 3, title: 'MY BUSINESS', active: currentStep === 3 },
    { number: 4, title: 'CONTACT INFO', active: currentStep === 4 },
    { number: 5, title: 'Finish', active: currentStep === 5 },
  ];

  const workTypes =
    workTypesByIndustry[formData.industry as keyof typeof workTypesByIndustry] ||
    workTypesByIndustry.commercial;

  const handleWorkTypeToggle = (workType: string) => {
    const updatedWorkTypes = formData.workTypes.includes(workType)
      ? formData.workTypes.filter((type) => type !== workType)
      : [...formData.workTypes, workType];

    setFormData({ ...formData, workTypes: updatedWorkTypes });
  };

  const handleContractingTypeToggle = (type: string) => {
    const updated = formData.contractingTypes.includes(type)
      ? formData.contractingTypes.filter((t) => t !== type)
      : [...formData.contractingTypes, type];

    setFormData({ ...formData, contractingTypes: updated });
  };

  const handleBusinessCharacteristicToggle = (characteristic: string) => {
    const updated = formData.businessCharacteristics.includes(characteristic)
      ? formData.businessCharacteristics.filter((c) => c !== characteristic)
      : [...formData.businessCharacteristics, characteristic];

    setFormData({ ...formData, businessCharacteristics: updated });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: ['services@anucleo.com'],
          subject: `New Quote Request - ${formData.industry}`,
          data: formData,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to send');
      }

      toast({
        title: 'Quote Request Submitted!',
        description: "We'll contact you shortly with your personalized quote.",
      });

      setCurrentStep(5);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit quote request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Get Insurance Quote | Anucleo Insurance</title>
        <meta
          name="description"
          content="Get a personalized insurance quote in minutes."
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {currentStep < 5 && (
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        step.active
                          ? 'bg-primary text-white'
                          : currentStep > step.number
                          ? 'bg-green-500 text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        step.number
                      )}
                    </div>

                    <div className="ml-2 text-sm">
                      <div
                        className={
                          step.active
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground'
                        }
                      >
                        {step.title}
                      </div>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="w-12 h-px bg-border mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <StepCoverage
              workTypes={workTypes}
              selected={formData.workTypes}
              onToggle={handleWorkTypeToggle}
              onNext={() => setCurrentStep(2)}
              onBack={() => window.history.back()}
            />
          )}

          {currentStep === 2 && (
            <StepIndustry
              selected={formData.contractingTypes}
              onToggle={handleContractingTypeToggle}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <StepBusiness
              items={businessCharacteristics}
              selected={formData.businessCharacteristics}
              email={formData.email}
              onToggle={handleBusinessCharacteristicToggle}
              onEmailChange={(email) => setFormData({ ...formData, email })}
              onNext={() => setCurrentStep(4)}
              onBack={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 4 && (
            <StepContact
              formData={formData}
              setFormData={setFormData}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
              onBack={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 5 && <StepFinish />}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GetQuote;