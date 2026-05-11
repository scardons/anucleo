import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Award, 
  Send, 
  Clock, 
  CheckCircle, 
  FileText, 
  Building, 
  Calendar,
  AlertTriangle,
  Download
} from 'lucide-react';

const RequestCertificate = () => {
  const [formData, setFormData] = useState({
    certificateType: '',
    recipientName: '',
    recipientEmail: '',
    recipientAddress: '',
    projectDescription: '',
    specialRequirements: '',
    urgency: 'standard'
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Certificate Request Submitted",
      description: "Your certificate request has been submitted and will be processed within 24 hours.",
    });
    // Reset form
    setFormData({
      certificateType: '',
      recipientName: '',
      recipientEmail: '',
      recipientAddress: '',
      projectDescription: '',
      specialRequirements: '',
      urgency: 'standard'
    });
  };

  const recentRequests = [
    {
      id: 'REQ-001',
      type: 'General Liability Certificate',
      recipient: 'ABC Construction Co.',
      date: '2024-12-10',
      status: 'Completed',
      urgency: 'Rush',
    },
    {
      id: 'REQ-002',
      type: 'Auto Insurance Certificate',
      recipient: 'XYZ Property Management',
      date: '2024-12-08',
      status: 'In Progress',
      urgency: 'Standard',
    },
    {
      id: 'REQ-003',
      type: 'Umbrella Coverage Certificate',
      recipient: 'MegaCorp Industries',
      date: '2024-12-05',
      status: 'Completed',
      urgency: 'Standard',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'In Progress':
        return <Clock className="h-4 w-4" />;
      case 'Pending':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Request Certificate</h1>
          <p className="text-muted-foreground mt-1">Request insurance certificates for your business needs</p>
        </div>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Certificate Templates
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <Award className="h-6 w-6 text-hero-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Certificates Issued</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-500 rounded-xl">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4 hrs</p>
              <p className="text-sm text-muted-foreground">Avg. Processing Time</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-500 rounded-xl">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">1</p>
              <p className="text-sm text-muted-foreground">Pending Requests</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Request Form */}
        <Card className="card-hero">
          <h2 className="text-xl font-bold text-foreground mb-6">New Certificate Request</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Certificate Type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Certificate Type *
              </label>
              <Select onValueChange={(value) => handleInputChange('certificateType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select certificate type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general-liability">General Liability Certificate</SelectItem>
                  <SelectItem value="auto-insurance">Auto Insurance Certificate</SelectItem>
                  <SelectItem value="umbrella">Umbrella Coverage Certificate</SelectItem>
                  <SelectItem value="workers-comp">Workers' Compensation Certificate</SelectItem>
                  <SelectItem value="combined">Combined Coverage Certificate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Recipient Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Recipient Name/Company *
                </label>
                <Input
                  value={formData.recipientName}
                  onChange={(e) => handleInputChange('recipientName', e.target.value)}
                  placeholder="ABC Construction Co."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Recipient Email
                </label>
                <Input
                  type="email"
                  value={formData.recipientEmail}
                  onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
                  placeholder="contact@abcconstruction.com"
                />
              </div>
            </div>

            {/* Recipient Address */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Recipient Address
              </label>
              <Textarea
                value={formData.recipientAddress}
                onChange={(e) => handleInputChange('recipientAddress', e.target.value)}
                placeholder="123 Main Street, City, State 12345"
                rows={2}
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project/Contract Description
              </label>
              <Textarea
                value={formData.projectDescription}
                onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                placeholder="Describe the project or contract requiring this certificate..."
                rows={3}
              />
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Special Requirements
              </label>
              <Textarea
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="Any specific coverage amounts, additional insured requirements, etc..."
                rows={2}
              />
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Urgency Level
              </label>
              <Select onValueChange={(value) => handleInputChange('urgency', value)} defaultValue="standard">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (24-48 hours)</SelectItem>
                  <SelectItem value="rush">Rush (Same day - Additional fee may apply)</SelectItem>
                  <SelectItem value="asap">ASAP (Within 2 hours - Premium fee)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full btn-hero">
              <Send className="mr-2 h-5 w-5" />
              Submit Certificate Request
            </Button>
          </form>
        </Card>

        {/* Recent Requests */}
        <div className="space-y-6">
          <Card className="card-hero">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Recent Requests</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(request.status)}>
                        {getStatusIcon(request.status)}
                        <span className="ml-1">{request.status}</span>
                      </Badge>
                      {request.urgency === 'Rush' && (
                        <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                          Rush
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{request.date}</span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1">{request.type}</h3>
                  <p className="text-sm text-muted-foreground mb-3">For: {request.recipient}</p>
                  
                  <div className="flex space-x-2">
                    {request.status === 'Completed' && (
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Help Section */}
          <Card className="card-hero bg-gradient-hero">
            <div className="text-center">
              <Building className="h-12 w-12 text-hero-foreground mx-auto mb-4" />
              <h3 className="text-lg font-bold text-hero-foreground mb-2">Need Help?</h3>
              <p className="text-hero-foreground/90 text-sm mb-4">
                Not sure what type of certificate you need? Our team can help you determine the right coverage.
              </p>
              <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90">
                Contact Support
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestCertificate;