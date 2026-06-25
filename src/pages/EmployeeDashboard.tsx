import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import EmployeeLayout from '@/components/employee/EmployeeLayout';
import ClientsManager from '@/components/employee/ClientsManager';
import SupportTickets from '@/components/employee/SupportTickets';
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

const baseTabs = {
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
    title: 'Live Chat',
    description: 'View and respond to live chat conversations with visitors.',
    content: null as React.ReactNode,
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
  const [unreadSupport, setUnreadSupport] = useState(0);
  const [quoteStats, setQuoteStats] = useState({ new_quotes: 0, reviewed: 0, followup: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('empLoggedIn');
    if (!isLoggedIn) {
      navigate('/employee/login');
    }
  }, [navigate]);

  const fetchQuoteStats = useCallback(async () => {
    try {
      const res = await fetch('/api/employee/quotes.php');
      const data = await res.json();
      if (data.success) {
        setQuoteStats(data.stats);
      }
    } catch {}
  }, []);

  useEffect(() => {
    fetchQuoteStats();
    const interval = setInterval(fetchQuoteStats, 10000);
    return () => clearInterval(interval);
  }, [fetchQuoteStats]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'support') {
      setUnreadSupport(0);
    }
  };

  const statCards = [
    { label: 'New Quotes', value: quoteStats.new_quotes.toString(), icon: Clock, color: 'text-blue-600 bg-blue-100' },
    { label: 'Reviewed', value: quoteStats.reviewed.toString(), icon: CheckCircle2, color: 'text-green-600 bg-green-100' },
    { label: 'Pending Follow-up', value: quoteStats.followup.toString(), icon: AlertCircle, color: 'text-amber-600 bg-amber-100' },
  ];

  const tabs = {
    quotes: {
      title: 'Quote Requests',
      description: 'Manage incoming insurance quote requests from potential clients.',
      content: (
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {statCards.map((stat) => (
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
    ...baseTabs,
    support: {
      ...baseTabs.support,
      content: <SupportTickets onUnreadChange={setUnreadSupport} />,
    },
  };

  const currentTab = tabs[activeTab as keyof typeof tabs] || tabs.clients;

  return (
    <>
      <Helmet>
        <title>{currentTab.title} | Employee Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <EmployeeLayout activeTab={activeTab} onTabChange={handleTabChange} unreadSupport={unreadSupport}>
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
