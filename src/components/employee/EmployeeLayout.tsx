import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  Users,
  Award,
  HeadphonesIcon,
  BarChart3,
  LogOut,
  Bell,
  Menu,
  X,
  ShieldAlert,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import anuceoLogo from '@/assets/anucelo-logo.png';
import ProfileModal from './ProfileModal';

interface EmployeeLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const EmployeeLayout = ({ children, activeTab, onTabChange }: EmployeeLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem('empLoggedIn');
    localStorage.removeItem('empEmail');
    localStorage.removeItem('empName');
    localStorage.removeItem('empRole');
    toast({
      title: 'Logged out',
      description: 'You have been logged out of the employee portal.',
    });
    navigate('/');
  };

  const empName = localStorage.getItem('empName') || 'Employee';
  const empRole = localStorage.getItem('empRole') || 'staff';
  const empEmail = localStorage.getItem('empEmail') || '';

  const menuItems = [
    { id: 'quotes', label: 'Quote Requests', icon: FileText },
    { id: 'clients', label: 'Users', icon: Users },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'support', label: 'Support Tickets', icon: HeadphonesIcon },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-slate-500 hover:text-slate-900"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <Link to="/employee/dashboard" className="flex items-center space-x-2">
              <img src={anuceoLogo} alt="Anucleo" className="h-7" />
              <span className="font-bold text-lg text-slate-900">Staff Portal</span>
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative text-slate-500 hover:text-slate-900">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>

            <button onClick={() => setProfileOpen(true)} className="flex items-center space-x-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-all cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">{empName.charAt(0)}</span>
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-slate-900">{empName}</p>
                <p className="text-xs text-slate-500 capitalize">{empRole}</p>
              </div>
            </button>

            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-slate-500 hover:text-red-600">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 pt-16 lg:pt-0`}
        >
          <div className="h-full pt-4">
            <div className="px-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
                <ShieldAlert className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Internal Access</span>
              </div>
            </div>
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 bg-white">
          <div className="p-6">{children}</div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
};

export default EmployeeLayout;
