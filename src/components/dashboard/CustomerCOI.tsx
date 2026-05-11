import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Search, 
  Filter, 
  Eye, 
  FileText, 
  Calendar, 
  Building,
  Phone,
  Mail,
  MapPin,
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const CustomerCOI = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const customers = [
    {
      id: 'CUST-001',
      name: 'ABC Construction Co.',
      contactPerson: 'John Smith',
      email: 'john@abcconstruction.com',
      phone: '(555) 123-4567',
      address: '123 Builder Ave, Construction City, NY 10001',
      certificatesUsed: 5,
      lastCertificate: '2024-12-10',
      nextRenewal: '2025-03-15',
      status: 'Active',
      industry: 'Construction',
      relationship: '2 years',
    },
    {
      id: 'CUST-002',
      name: 'XYZ Property Management',
      contactPerson: 'Sarah Johnson',
      email: 'sarah@xyzproperty.com',
      phone: '(555) 234-5678',
      address: '456 Property Lane, Realty Town, NJ 07001',
      certificatesUsed: 3,
      lastCertificate: '2024-12-08',
      nextRenewal: '2025-01-20',
      status: 'Active',
      industry: 'Real Estate',
      relationship: '3 years',
    },
    {
      id: 'CUST-003',
      name: 'MegaCorp Industries',
      contactPerson: 'Mike Wilson',
      email: 'mike@megacorp.com',
      phone: '(555) 345-6789',
      address: '789 Corporate Blvd, Business City, CT 06001',
      certificatesUsed: 8,
      lastCertificate: '2024-12-05',
      nextRenewal: '2025-06-01',
      status: 'Active',
      industry: 'Manufacturing',
      relationship: '5 years',
    },
    {
      id: 'CUST-004',
      name: 'BuildRight LLC',
      contactPerson: 'Lisa Brown',
      email: 'lisa@buildright.com',
      phone: '(555) 456-7890',
      address: '321 Development Dr, Build City, PA 19001',
      certificatesUsed: 2,
      lastCertificate: '2024-11-28',
      nextRenewal: '2025-02-10',
      status: 'Renewal Needed',
      industry: 'Construction',
      relationship: '1 year',
    },
    {
      id: 'CUST-005',
      name: 'SmallBiz Inc.',
      contactPerson: 'Tom Davis',
      email: 'tom@smallbiz.com',
      phone: '(555) 567-8901',
      address: '654 Small Business St, Enterprise, DE 19901',
      certificatesUsed: 1,
      lastCertificate: '2024-11-15',
      nextRenewal: '2025-01-15',
      status: 'Expiring Soon',
      industry: 'Services',
      relationship: '6 months',
    },
    {
      id: 'CUST-006',
      name: 'OldClient Corp',
      contactPerson: 'Nancy Wilson',
      email: 'nancy@oldclient.com',
      phone: '(555) 678-9012',
      address: '987 Legacy Lane, Historic Town, MD 20001',
      certificatesUsed: 4,
      lastCertificate: '2024-01-15',
      nextRenewal: '2024-11-15',
      status: 'Inactive',
      industry: 'Technology',
      relationship: '4 years',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Renewal Needed':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Expiring Soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Inactive':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <CheckCircle className="h-4 w-4" />;
      case 'Renewal Needed':
        return <RefreshCw className="h-4 w-4" />;
      case 'Expiring Soon':
        return <Clock className="h-4 w-4" />;
      case 'Inactive':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const filterOptions = [
    { value: 'all', label: 'All Customers' },
    { value: 'active', label: 'Active' },
    { value: 'renewal-needed', label: 'Renewal Needed' },
    { value: 'expiring', label: 'Expiring Soon' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'construction', label: 'Construction' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'manufacturing', label: 'Manufacturing' },
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'active') return matchesSearch && customer.status === 'Active';
    if (selectedFilter === 'renewal-needed') return matchesSearch && customer.status === 'Renewal Needed';
    if (selectedFilter === 'expiring') return matchesSearch && customer.status === 'Expiring Soon';
    if (selectedFilter === 'inactive') return matchesSearch && customer.status === 'Inactive';
    
    return matchesSearch && customer.industry.toLowerCase().includes(selectedFilter.replace('-', ' '));
  });

  const stats = {
    total: customers.length,
    active: customers.filter(c => c.status === 'Active').length,
    renewal: customers.filter(c => c.status === 'Renewal Needed').length,
    expiring: customers.filter(c => c.status === 'Expiring Soon').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Customer COI</h1>
          <p className="text-muted-foreground mt-1">Track customers who use your certificates of insurance</p>
        </div>
        <Button className="btn-hero mt-4 sm:mt-0">
          <Download className="mr-2 h-4 w-4" />
          Export Customer List
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <Users className="h-6 w-6 text-hero-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.total}</p>
              <p className="text-sm text-muted-foreground">Total Customers</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-500 rounded-xl">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.active}</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-orange-500 rounded-xl">
              <RefreshCw className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.renewal}</p>
              <p className="text-sm text-muted-foreground">Need Renewal</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-yellow-500 rounded-xl">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.expiring}</p>
              <p className="text-sm text-muted-foreground">Expiring Soon</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="card-elegant">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers by name, contact, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
            >
              {filterOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Customers List */}
      <div className="grid gap-4">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="card-hero">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
              {/* Left Section */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <Building className="h-6 w-6 text-hero-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{customer.name}</h3>
                    <Badge className={getStatusColor(customer.status)}>
                      {getStatusIcon(customer.status)}
                      <span className="ml-1">{customer.status}</span>
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Contact</span>
                      </div>
                      <p className="font-medium text-foreground">{customer.contactPerson}</p>
                      <p className="text-muted-foreground">{customer.phone}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Email</span>
                      </div>
                      <p className="font-medium text-foreground">{customer.email}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Location</span>
                      </div>
                      <p className="font-medium text-foreground">{customer.address}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Certificates Used</span>
                      </div>
                      <p className="font-medium text-foreground">{customer.certificatesUsed}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Last Certificate</span>
                      </div>
                      <p className="font-medium text-foreground">{customer.lastCertificate}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <RefreshCw className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Next Renewal</span>
                      </div>
                      <p className="font-medium text-foreground">{customer.nextRenewal}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-3 text-sm">
                    <span className="text-muted-foreground">Industry: <span className="font-medium text-foreground">{customer.industry}</span></span>
                    <span className="text-muted-foreground">Relationship: <span className="font-medium text-foreground">{customer.relationship}</span></span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Certificates
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredCustomers.length === 0 && (
          <Card className="card-hero">
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No customers found</h3>
              <p className="text-muted-foreground">
                {searchTerm || selectedFilter !== 'all'
                  ? 'Try adjusting your search or filter criteria.'
                  : 'No customers have used your certificates yet.'}
              </p>
            </div>
          </Card>
        )}
      </div>

      {/* Customer Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="card-hero bg-gradient-hero">
          <div className="text-center">
            <FileText className="h-12 w-12 text-hero-foreground mx-auto mb-4" />
            <h3 className="text-lg font-bold text-hero-foreground mb-2">Certificate Activity</h3>
            <p className="text-hero-foreground/90 text-sm mb-4">
              Total certificates issued to customers this month: <strong>23</strong>
            </p>
            <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90">
              View Report
            </Button>
          </div>
        </Card>

        <Card className="card-hero">
          <h3 className="text-lg font-bold text-foreground mb-4">Upcoming Renewals</h3>
          <div className="space-y-3">
            {customers
              .filter(c => c.status === 'Expiring Soon' || c.status === 'Renewal Needed')
              .slice(0, 3)
              .map(customer => (
                <div key={customer.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">Renewal: {customer.nextRenewal}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Contact
                  </Button>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CustomerCOI;