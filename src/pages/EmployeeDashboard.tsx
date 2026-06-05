import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import EmployeeLayout from '@/components/employee/EmployeeLayout';
import ClientsManager from '@/components/employee/ClientsManager';
import {
  FileText,
  Users,
  Award,
  HeadphonesIcon,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const tabs = {
  quotes: {
    title: 'Quote Requests',
    description: 'Manage incoming insurance quote requests from potential clients.',
    content: (
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {[
          { label: 'New Quotes', value: '12', icon: Clock, color: 'text-blue-600 bg-blue-100' },
          { label: 'Reviewed', value: '8', icon: CheckCircle2, color: 'text-green-600 bg-green-100' },
          { label: 'Pending Follow-up', value: '4', icon: AlertCircle, color: 'text-amber-600 bg-amber-100' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    ),
  },
  clients: {
    title: 'Users',
    description: 'View and manage registered users and their accounts.',
    content: <ClientsManager />,
  },
  certificates: {
    title: 'Certificates',
    description: 'Process and manage Certificate of Insurance (COI) requests.',
    content: (
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <p className="text-slate-500 text-sm">Certificate of Insurance management will be displayed here.</p>
      </div>
    ),
  },
  support: {
    title: 'Support Tickets',
    description: 'View and respond to client support inquiries.',
    content: (
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <p className="text-slate-500 text-sm">Support ticket system will be displayed here.</p>
      </div>
    ),
  },
  reports: {
    title: 'Reports',
    description: 'View business analytics and performance reports.',
    content: (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { label: 'Total Policies', value: '486', change: '+12%' },
          { label: 'Active Quotes', value: '24', change: '+5%' },
          { label: 'Revenue (MTD)', value: '$142K', change: '+8%' },
          { label: 'Client Retention', value: '94%', change: '+2%' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <span className="text-xs text-green-600">{stat.change} vs last month</span>
          </div>
        ))}
      </div>
    ),
  },
};

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState('clients');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('empLoggedIn');
    if (!isLoggedIn) {
      navigate('/employee/login');
    }
  }, [navigate]);

  const currentTab = tabs[activeTab as keyof typeof tabs] || tabs.clients;

  return (
    <>
      <Helmet>
        <title>{currentTab.title} | Employee Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <EmployeeLayout activeTab={activeTab} onTabChange={setActiveTab}>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{currentTab.title}</h1>
          <p className="text-slate-500">{currentTab.description}</p>
        </div>
        {currentTab.content}
      </EmployeeLayout>
    </>
  );
};

export default EmployeeDashboard;
