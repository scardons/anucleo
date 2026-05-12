import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Phone, Building2, MapPin } from 'lucide-react';

const StepContact = ({ formData, setFormData, onSubmit, onBack }: any) => {
  const isValid =
    formData.firstName &&
    formData.phone &&
    formData.businessName &&
    formData.address;

  return (
    <div className="max-w-3xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tell us about you
        </h2>

        <p className="text-gray-500 text-lg">
          We'll use this info to prepare your quote.
        </p>
      </motion.div>

      {/* FORM */}
      <div className="grid gap-6">

        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Full name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="pl-12 h-12 text-base"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="pl-12 h-12 text-base"
          />
        </div>

        <div className="relative">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Business name"
            value={formData.businessName}
            onChange={(e) =>
              setFormData({ ...formData, businessName: e.target.value })
            }
            className="pl-12 h-12 text-base"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Business address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="pl-12 h-12 text-base"
          />
        </div>
      </div>

      {/* ACTIONS */}
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
          onClick={onSubmit} // 🔥 ESTE ES EL FIX
          disabled={!isValid}
          className="bg-blue-600 px-8 py-3 text-lg text-white hover:bg-blue-700"
        >
          Get Quote
        </Button>
      </motion.div>
    </div>
  );
};

export default StepContact;