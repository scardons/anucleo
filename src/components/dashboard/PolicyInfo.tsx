import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  Building, 
  Umbrella, 
  Calendar, 
  DollarSign, 
  FileText,
  Phone,
  Mail,
  MapPin,
  Download
} from 'lucide-react';

const PolicyInfo = () => {
  const policies = [
    {
      id: 'POL-2024-001',
      type: 'Commercial General Liability',
      status: 'Active',
      premium: '$2,400',
      effectiveDate: '2024-01-15',
      expirationDate: '2025-01-15',
      coverage: '$1,000,000',
      icon: Building,
      color: 'bg-blue-500',
    },
    {
      id: 'POL-2024-002',
      type: 'Commercial Auto',
      status: 'Active',
      premium: '$1,800',
      effectiveDate: '2024-03-01',
      expirationDate: '2025-03-01',
      coverage: '$500,000',
      icon: Car,
      color: 'bg-green-500',
    },
    {
      id: 'POL-2024-003',
      type: 'Umbrella Insurance',
      status: 'Pending Renewal',
      premium: '$800',
      effectiveDate: '2024-06-01',
      expirationDate: '2025-06-01',
      coverage: '$5,000,000',
      icon: Umbrella,
      color: 'bg-purple-500',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending Renewal':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expired':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Policy Information</h1>
          <p className="text-muted-foreground mt-1">Manage and view your insurance policies</p>
        </div>
        <Button className="btn-hero mt-4 sm:mt-0">
          <Download className="mr-2 h-4 w-4" />
          Download All Policies
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <FileText className="h-6 w-6 text-hero-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-sm text-muted-foreground">Active Policies</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-500 rounded-xl">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">$5,000</p>
              <p className="text-sm text-muted-foreground">Annual Premium</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-500 rounded-xl">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">45</p>
              <p className="text-sm text-muted-foreground">Days to Renewal</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-orange-500 rounded-xl">
              <Umbrella className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">$6.5M</p>
              <p className="text-sm text-muted-foreground">Total Coverage</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Policies List */}
      <div className="space-y-4">
        {policies.map((policy) => (
          <Card key={policy.id} className="card-hero">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Left Section */}
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${policy.color} rounded-xl`}>
                  <policy.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{policy.type}</h3>
                    <Badge className={getStatusColor(policy.status)}>
                      {policy.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Policy Number: {policy.id}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Coverage Limit</p>
                      <p className="font-medium text-foreground">{policy.coverage}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Annual Premium</p>
                      <p className="font-medium text-foreground">{policy.premium}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Effective Date</p>
                      <p className="font-medium text-foreground">{policy.effectiveDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expiration Date</p>
                      <p className="font-medium text-foreground">{policy.expirationDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  View Policy
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Agent Contact Card */}
      <Card className="card-hero bg-gradient-hero">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-hero-foreground mb-2">Your Insurance Agent</h3>
            <p className="text-hero-foreground/90 mb-4">
              Need to make changes to your policy or have questions? Contact your dedicated agent.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-hero-foreground/90">
                <Phone className="h-4 w-4" />
                <span>(201) 977-8899</span>
              </div>
              <div className="flex items-center space-x-2 text-hero-foreground/90">
                <Mail className="h-4 w-4" />
                <span>services@anucleo.com</span>
              </div>
              <div className="flex items-center space-x-2 text-hero-foreground/90">
                <MapPin className="h-4 w-4" />
                <span>365 Rifle Camp Road Suite 209, Woodland Park, NJ</span>
              </div>
            </div>
          </div>
          <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90">
            <Phone className="mr-2 h-4 w-4" />
            Call Agent
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PolicyInfo;