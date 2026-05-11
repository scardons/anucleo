import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  FolderOpen, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  FileText, 
  Eye,
  Share,
  Archive,
  Trash2,
  Building,
  Car,
  Umbrella,
  Users
} from 'lucide-react';

const CertificateLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const certificates = [
    {
      id: 'CERT-001',
      name: 'General Liability Certificate - ABC Construction',
      type: 'General Liability',
      recipient: 'ABC Construction Co.',
      dateIssued: '2024-12-10',
      expirationDate: '2025-12-10',
      size: '245 KB',
      status: 'Active',
      icon: Building,
    },
    {
      id: 'CERT-002',
      name: 'Auto Insurance Certificate - XYZ Property',
      type: 'Auto Insurance',
      recipient: 'XYZ Property Management',
      dateIssued: '2024-12-08',
      expirationDate: '2025-03-01',
      size: '189 KB',
      status: 'Active',
      icon: Car,
    },
    {
      id: 'CERT-003',
      name: 'Umbrella Coverage Certificate - MegaCorp',
      type: 'Umbrella Insurance',
      recipient: 'MegaCorp Industries',
      dateIssued: '2024-12-05',
      expirationDate: '2025-06-01',
      size: '201 KB',
      status: 'Active',
      icon: Umbrella,
    },
    {
      id: 'CERT-004',
      name: 'Workers Compensation Certificate - BuildRight',
      type: 'Workers Compensation',
      recipient: 'BuildRight LLC',
      dateIssued: '2024-11-28',
      expirationDate: '2025-11-28',
      size: '198 KB',
      status: 'Active',
      icon: Users,
    },
    {
      id: 'CERT-005',
      name: 'Combined Coverage Certificate - SmallBiz Inc',
      type: 'Combined Coverage',
      recipient: 'SmallBiz Inc.',
      dateIssued: '2024-11-15',
      expirationDate: '2025-01-15',
      size: '267 KB',
      status: 'Expiring Soon',
      icon: Building,
    },
    {
      id: 'CERT-006',
      name: 'General Liability Certificate - OldClient Corp',
      type: 'General Liability',
      recipient: 'OldClient Corp',
      dateIssued: '2024-01-15',
      expirationDate: '2024-11-15',
      size: '234 KB',
      status: 'Expired',
      icon: Building,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Expiring Soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expired':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filterOptions = [
    { value: 'all', label: 'All Certificates' },
    { value: 'active', label: 'Active' },
    { value: 'expiring', label: 'Expiring Soon' },
    { value: 'expired', label: 'Expired' },
    { value: 'general-liability', label: 'General Liability' },
    { value: 'auto', label: 'Auto Insurance' },
    { value: 'umbrella', label: 'Umbrella' },
    { value: 'workers-comp', label: 'Workers Comp' },
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.recipient.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'active') return matchesSearch && cert.status === 'Active';
    if (selectedFilter === 'expiring') return matchesSearch && cert.status === 'Expiring Soon';
    if (selectedFilter === 'expired') return matchesSearch && cert.status === 'Expired';
    
    return matchesSearch && cert.type.toLowerCase().includes(selectedFilter.replace('-', ' '));
  });

  const stats = {
    total: certificates.length,
    active: certificates.filter(c => c.status === 'Active').length,
    expiring: certificates.filter(c => c.status === 'Expiring Soon').length,
    expired: certificates.filter(c => c.status === 'Expired').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Certificate Library</h1>
          <p className="text-muted-foreground mt-1">View and manage all your insurance certificates</p>
        </div>
        <Button className="btn-hero mt-4 sm:mt-0">
          <Download className="mr-2 h-4 w-4" />
          Download All
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <FolderOpen className="h-6 w-6 text-hero-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.total}</p>
              <p className="text-sm text-muted-foreground">Total Certificates</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-500 rounded-xl">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.active}</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-yellow-500 rounded-xl">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.expiring}</p>
              <p className="text-sm text-muted-foreground">Expiring Soon</p>
            </div>
          </div>
        </Card>

        <Card className="card-elegant">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-red-500 rounded-xl">
              <Archive className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.expired}</p>
              <p className="text-sm text-muted-foreground">Expired</p>
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
              placeholder="Search certificates by name or recipient..."
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

      {/* Certificates Grid */}
      <div className="grid gap-4">
        {filteredCertificates.map((certificate) => (
          <Card key={certificate.id} className="card-hero">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Left Section */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <certificate.icon className="h-6 w-6 text-hero-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{certificate.name}</h3>
                    <Badge className={getStatusColor(certificate.status)}>
                      {certificate.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{certificate.type}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Recipient</p>
                      <p className="font-medium text-foreground">{certificate.recipient}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Date Issued</p>
                      <p className="font-medium text-foreground">{certificate.dateIssued}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expires</p>
                      <p className="font-medium text-foreground">{certificate.expirationDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">File Size</p>
                      <p className="font-medium text-foreground">{certificate.size}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
                {certificate.status === 'Expired' && (
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}

        {filteredCertificates.length === 0 && (
          <Card className="card-hero">
            <div className="text-center py-12">
              <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No certificates found</h3>
              <p className="text-muted-foreground">
                {searchTerm || selectedFilter !== 'all'
                  ? 'Try adjusting your search or filter criteria.'
                  : 'You haven\'t requested any certificates yet.'}
              </p>
            </div>
          </Card>
        )}
      </div>

      {/* Bulk Actions */}
      {filteredCertificates.length > 0 && (
        <Card className="card-hero bg-gradient-hero">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-hero-foreground mb-2">Bulk Actions</h3>
              <p className="text-hero-foreground/90">
                Need to download multiple certificates or perform bulk operations?
              </p>
            </div>
            <div className="flex space-x-2">
              <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90">
                <Download className="mr-2 h-4 w-4" />
                Download Selected
              </Button>
              <Button className="bg-hero-foreground text-primary hover:bg-hero-foreground/90">
                <Archive className="mr-2 h-4 w-4" />
                Archive Old
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CertificateLibrary;