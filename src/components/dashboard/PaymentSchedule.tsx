import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  CreditCard, 
  DollarSign, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Download,
  Settings
} from 'lucide-react';

const PaymentSchedule = () => {
  const upcomingPayments = [
    {
      id: 'PAY-001',
      policy: 'Commercial General Liability',
      amount: '$200.00',
      dueDate: '2024-12-15',
      status: 'Due Soon',
      method: 'Auto-Pay (****1234)',
      type: 'Monthly Premium',
    },
    {
      id: 'PAY-002',
      policy: 'Commercial Auto',
      amount: '$150.00',
      dueDate: '2024-12-20',
      status: 'Scheduled',
      method: 'Auto-Pay (****1234)',
      type: 'Monthly Premium',
    },
    {
      id: 'PAY-003',
      policy: 'Umbrella Insurance',
      amount: '$66.67',
      dueDate: '2025-01-01',
      status: 'Scheduled',
      method: 'Auto-Pay (****1234)',
      type: 'Monthly Premium',
    },
  ];

  const paymentHistory = [
    {
      id: 'HIST-001',
      policy: 'Commercial General Liability',
      amount: '$200.00',
      date: '2024-11-15',
      status: 'Paid',
      method: 'Auto-Pay',
      confirmationNumber: 'CNF-789123',
    },
    {
      id: 'HIST-002',
      policy: 'Commercial Auto',
      amount: '$150.00',
      date: '2024-11-20',
      status: 'Paid',
      method: 'Auto-Pay',
      confirmationNumber: 'CNF-789124',
    },
    {
      id: 'HIST-003',
      policy: 'Umbrella Insurance',
      amount: '$66.67',
      date: '2024-12-01',
      status: 'Paid',
      method: 'Auto-Pay',
      confirmationNumber: 'CNF-789125',
    },
    {
      id: 'HIST-004',
      policy: 'Commercial General Liability',
      amount: '$200.00',
      date: '2024-10-15',
      status: 'Paid',
      method: 'Bank Transfer',
      confirmationNumber: 'CNF-789126',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Due Soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Overdue':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid':
        return <CheckCircle className="h-4 w-4" />;
      case 'Due Soon':
        return <AlertCircle className="h-4 w-4" />;
      case 'Scheduled':
        return <Clock className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payment Schedule</h1>
          <p className="text-muted-foreground mt-1">Manage your insurance payments and history</p>
        </div>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Payment Settings
          </Button>
          <Button className="btn-hero">
            <Download className="mr-2 h-4 w-4" />
            Export History
          </Button>
        </div>
      </div>

      {/* Payment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <DollarSign className="h-6 w-6 text-hero-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">$416.67</p>
              <p className="text-sm text-muted-foreground">Next Payment</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-500 rounded-xl">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">Dec 15</p>
              <p className="text-sm text-muted-foreground">Due Date</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-500 rounded-xl">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">Auto-Pay</p>
              <p className="text-sm text-muted-foreground">Payment Method</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-500 rounded-xl">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">On-Time Rate</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Upcoming Payments */}
      <Card className="card-hero">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Upcoming Payments</h2>
          <Button variant="outline" size="sm">
            <CreditCard className="mr-2 h-4 w-4" />
            Make Payment
          </Button>
        </div>

        <div className="space-y-4">
          {upcomingPayments.map((payment) => (
            <div key={payment.id} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <DollarSign className="h-5 w-5 text-hero-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="font-semibold text-foreground">{payment.policy}</h3>
                    <Badge className={getStatusColor(payment.status)}>
                      {getStatusIcon(payment.status)}
                      <span className="ml-1">{payment.status}</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{payment.type}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-medium text-foreground">{payment.amount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Due Date</p>
                      <p className="font-medium text-foreground">{payment.dueDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Method</p>
                      <p className="font-medium text-foreground">{payment.method}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm">
                  Pay Now
                </Button>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Payment History */}
      <Card className="card-hero">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Payment History</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {paymentHistory.map((payment) => (
            <div key={payment.id} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="font-medium text-foreground">{payment.policy}</h3>
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-medium text-foreground">{payment.amount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Date</p>
                      <p className="font-medium text-foreground">{payment.date}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Method</p>
                      <p className="font-medium text-foreground">{payment.method}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Confirmation</p>
                      <p className="font-medium text-foreground">{payment.confirmationNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Receipt
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Auto-Pay Setup */}
      <Card className="card-hero bg-gradient-hero">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-hero-foreground mb-2">Auto-Pay Enabled</h3>
            <p className="text-hero-foreground/90 mb-2">
              Your payments are automatically processed on the due date using your saved payment method.
            </p>
            <p className="text-sm text-hero-foreground/80">
              Next auto-payment: $200.00 on December 15, 2024
            </p>
          </div>
          <div className="flex space-x-2">
            <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90">
              <Settings className="mr-2 h-4 w-4" />
              Manage Auto-Pay
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentSchedule;