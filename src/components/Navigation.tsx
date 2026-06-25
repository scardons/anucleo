import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import anuceLogo from '@/assets/anucelo-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const serviceItems = [
    { path: '/umbrella-insurance', label: 'Umbrella Insurance' },
    { path: '/commercial-insurance', label: 'Commercial Insurance' },
    { path: '/auto-insurance', label: 'Auto Insurance' },
    { path: '/workers-comp', label: 'Workers Compensation' },
  ];

  const clientItems = [
    { path: '/client-services', label: 'Request Certificate' },
    { path: '/client-services', label: 'Policy Documents' },
    { path: '/login', label: 'Client Login' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname === '/cheap-insurance-new-jersey'
          ? 'bg-background/95 backdrop-blur-md shadow-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="flex items-center">
              <img 
                src={anuceLogo} 
                alt="Anucleo Insurance" 
                className="h-24 lg:h-28 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative group"
            >
              <button
                className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className="absolute top-full left-0 mt-1 w-56 z-50 bg-background border border-border rounded-lg shadow-elegant backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Existing Clients Dropdown */}
            <div 
              className="relative group"
            >
              <button
                className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                <span>Existing Clients</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className="absolute top-full left-0 mt-1 w-56 z-50 bg-background border border-border rounded-lg shadow-elegant backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                {clientItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(201) 977-8899</span>
              </div>
              <Link to="/get-quote">
                <Button className="btn-hero">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border shadow-elegant">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Services Section */}
            <div className="pt-2">
              <div className="text-sm font-semibold text-muted-foreground px-4 pb-2">Services</div>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-8 text-base text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Existing Clients Section */}
            <div className="pt-2">
              <div className="text-sm font-semibold text-muted-foreground px-4 pb-2">Existing Clients</div>
              {clientItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-8 text-base text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 mt-4 border-t border-border space-y-3">
              <div className="flex items-center space-x-3 px-4 py-2 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>(201) 977-8899</span>
              </div>
              <div className="flex items-center space-x-3 px-4 py-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>services@anucleo.com</span>
              </div>
              <Link to="/get-quote" className="block">
                <Button className="btn-hero w-full">
                  Get Free Quote Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;