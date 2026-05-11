import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  HeadphonesIcon, 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  Clock, 
  CheckCircle, 
  MapPin,
  Calendar,
  User,
  FileText,
  AlertCircle,
  Zap
} from 'lucide-react';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    priority: 'normal',
    message: '',
    attachFiles: false
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support ticket created",
      description: "We've received your message and will respond within 24 hours.",
    });
    setFormData({
      subject: '',
      category: '',
      priority: 'normal',
      message: '',
      attachFiles: false
    });
  };

  const supportTickets = [
    {
      id: 'TICK-001',
      subject: 'Certificate processing delay',
      category: 'Certificates',
      status: 'In Progress',
      date: '2024-12-10',
      lastUpdate: '2024-12-12',
      priority: 'High',
    },
    {
      id: 'TICK-002',
      subject: 'Payment processing question',
      category: 'Billing',
      status: 'Resolved',
      date: '2024-12-05',
      lastUpdate: '2024-12-06',
      priority: 'Normal',
    },
    {
      id: 'TICK-003',
      subject: 'Policy coverage clarification',
      category: 'Policy',
      status: 'Resolved',
      date: '2024-11-28',
      lastUpdate: '2024-11-29',
      priority: 'Low',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Closed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Normal':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Low':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved':
        return <CheckCircle className="h-4 w-4" />;
      case 'In Progress':
        return <Clock className="h-4 w-4" />;
      case 'Pending':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Support</h1>
          <p className="text-muted-foreground mt-1">Get help with your insurance needs and account questions</p>
        </div>
        <Button className="btn-hero mt-4 sm:mt-0">
          <Phone className="mr-2 h-4 w-4" />
          Call Support
        </Button>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="card-elegant">
          <div className="text-center">
            <div className="p-4 bg-gradient-primary rounded-xl mx-auto w-fit mb-4">
              <Phone className="h-8 w-8 text-hero-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Phone Support</h3>
            <p className="text-xl font-semibold text-primary mb-2">(201) 977-8899</p>
            <p className="text-sm text-muted-foreground mb-4">Mon-Fri 8AM-8PM<br />Sat 9AM-5PM</p>
            <Button className="w-full">Call Now</Button>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="text-center">
            <div className="p-4 bg-green-500 rounded-xl mx-auto w-fit mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Email Support</h3>
            <p className="text-lg font-semibold text-primary mb-2">services@anucleo.com</p>
            <p className="text-sm text-muted-foreground mb-4">Response within<br />2 hours</p>
            <Button className="w-full" variant="outline">Send Email</Button>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="text-center">
            <div className="p-4 bg-blue-500 rounded-xl mx-auto w-fit mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Live Chat</h3>
            <p className="text-lg font-semibold text-primary mb-2">Available Now</p>
            <p className="text-sm text-muted-foreground mb-4">Instant support<br />Mon-Fri 8AM-8PM</p>
            <Button className="w-full" variant="outline">Start Chat</Button>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Support Ticket Form */}
        <Card className="card-hero">
          <h2 className="text-xl font-bold text-foreground mb-6">Create Support Ticket</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject *
              </label>
              <Input
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="Brief description of your issue"
                required
              />
            </div>

            {/* Category and Priority */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Category *
                </label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="policy">Policy Questions</SelectItem>
                    <SelectItem value="certificates">Certificates</SelectItem>
                    <SelectItem value="billing">Billing & Payments</SelectItem>
                    <SelectItem value="claims">Claims Support</SelectItem>
                    <SelectItem value="technical">Technical Issues</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Priority
                </label>
                <Select onValueChange={(value) => handleInputChange('priority', value)} defaultValue="normal">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - General inquiry</SelectItem>
                    <SelectItem value="normal">Normal - Standard issue</SelectItem>
                    <SelectItem value="high">High - Urgent matter</SelectItem>
                    <SelectItem value="critical">Critical - Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Please provide detailed information about your issue or question..."
                rows={6}
                required
              />
            </div>

            {/* File Attachment */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="attachFiles"
                checked={formData.attachFiles}
                onChange={(e) => handleInputChange('attachFiles', e.target.checked.toString())}
                className="rounded border-border"
              />
              <label htmlFor="attachFiles" className="text-sm text-muted-foreground">
                I need to attach files (policy documents, screenshots, etc.)
              </label>
            </div>

            <Button type="submit" className="w-full btn-hero">
              <Send className="mr-2 h-5 w-5" />
              Submit Support Ticket
            </Button>
          </form>
        </Card>

        {/* Recent Tickets & FAQ */}
        <div className="space-y-6">
          {/* Recent Support Tickets */}
          <Card className="card-hero">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Recent Tickets</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(ticket.status)}>
                        {getStatusIcon(ticket.status)}
                        <span className="ml-1">{ticket.status}</span>
                      </Badge>
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{ticket.date}</span>
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="font-semibold text-foreground">{ticket.subject}</h3>
                    <p className="text-sm text-muted-foreground">Category: {ticket.category}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Last update: {ticket.lastUpdate}
                    </span>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Help */}
          <Card className="card-hero">
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Help</h3>
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">How to request a certificate?</p>
                    <p className="text-sm text-muted-foreground">Step-by-step guide</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Payment schedule changes</p>
                    <p className="text-sm text-muted-foreground">Modify your payment plan</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Update account information</p>
                    <p className="text-sm text-muted-foreground">Change contact details</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className="card-hero bg-gradient-hero">
            <div className="text-center">
              <div className="p-4 bg-hero-foreground/10 rounded-xl mx-auto w-fit mb-4">
                <Zap className="h-8 w-8 text-hero-foreground" />
              </div>
              <h3 className="text-lg font-bold text-hero-foreground mb-2">Emergency Claims</h3>
              <p className="text-hero-foreground/90 text-sm mb-4">
                For urgent claims or emergencies, call our 24/7 hotline
              </p>
              <p className="text-xl font-bold text-hero-foreground mb-4">(347) 417-CLAIM</p>
              <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90">
                <Phone className="mr-2 h-4 w-4" />
                Call Emergency Line
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Office Information */}
      <Card className="card-hero bg-secondary">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Visit Our Office</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">365 Rifle Camp Road Suite 209</p>
                  <p className="text-muted-foreground">Woodland Park, NJ 07424</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Office Hours</p>
                  <p className="text-muted-foreground">Mon-Fri 8AM-8PM, Sat 9AM-5PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Direct Line</p>
                  <p className="text-muted-foreground">(201) 977-8899</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">What to Expect</h3>
            <ul className="space-y-2">
              {[
                'Free consultation with licensed agents',
                'Personalized service and recommendations',
                'Same-day policy binding available',
                'Complimentary refreshments',
                'Free parking available'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactSupport;