import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PolicyInfo from '@/components/dashboard/PolicyInfo';
import PaymentSchedule from '@/components/dashboard/PaymentSchedule';
import RequestCertificate from '@/components/dashboard/RequestCertificate';
import CertificateLibrary from '@/components/dashboard/CertificateLibrary';
import CustomerCOI from '@/components/dashboard/CustomerCOI';
import ContactSupport from '@/components/dashboard/ContactSupport';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('policies');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const renderContent = () => {
    switch (activeTab) {
      case 'policies':
        return <PolicyInfo />;
      case 'payments':
        return <PaymentSchedule />;
      case 'request-cert':
        return <RequestCertificate />;
      case 'certificates':
        return <CertificateLibrary />;
      case 'customers':
        return <CustomerCOI />;
      case 'contact':
        return <ContactSupport />;
      default:
        return <PolicyInfo />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Client Dashboard | Anucleo Insurance</title>
        <meta name="description" content="Manage your insurance policies, payments, and certificates in your client portal." />
      </Helmet>

      <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
        {renderContent()}
      </DashboardLayout>
    </>
  );
};

export default Dashboard;