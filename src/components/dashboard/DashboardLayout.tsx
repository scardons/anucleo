import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  CreditCard, 
  Award, 
  FolderOpen, 
  Users, 
  HeadphonesIcon,
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import anuceoLogo from '@/assets/anucelo-logo.png';

interface DashboardLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const DashboardLayout = ({ children, activeTab, onTabChange }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/');
  };

  const userEmail = localStorage.getItem('userEmail') || 'demo@anucleo.com';
  const userName = userEmail.split('@')[0].charAt(0).toUpperCase() + userEmail.split('@')[0].slice(1);

  const menuItems = [
    { id: 'policies', label: 'Policy Info', icon: FileText },
    { id: 'payments', label: 'Payment Schedule', icon: CreditCard },
    { id: 'request-cert', label: 'Request Certificate', icon: Award },
    { id: 'certificates', label: 'Certificate Library', icon: FolderOpen },
    { id: 'customers', label: 'Customer COI', icon: Users },
    { id: 'contact', label: 'Contact Support', icon: HeadphonesIcon },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <Link to="/" className="flex items-center space-x-2">
              <img src={anuceoLogo} alt="Anucleo" className="h-8" />
              <span className="font-bold text-lg text-foreground">Client Portal</span>
            </Link>
          </div>

          {/* Center Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search policies, certificates..." className="pl-10" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <div className="flex items-center space-x-2 px-3 py-2 bg-muted rounded-lg">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-hero-foreground font-medium text-sm">
                  {userName.charAt(0)}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-foreground">{userName}</p>
                <p className="text-xs text-muted-foreground">{userEmail}</p>
              </div>
            </div>

            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full pt-16 lg:pt-0">
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                    ${activeTab === item.id 
                      ? 'bg-gradient-primary text-hero-foreground shadow-elegant' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Bottom Section */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-gradient-hero rounded-lg p-4">
                <h3 className="text-sm font-semibold text-hero-foreground mb-2">Need Help?</h3>
                <p className="text-xs text-hero-foreground/90 mb-3">
                  Contact our support team for assistance with your policies.
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-hero-foreground text-primary hover:bg-hero-foreground/90"
                  onClick={() => onTabChange('contact')}
                >
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;