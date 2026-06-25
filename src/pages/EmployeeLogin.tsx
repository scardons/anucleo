import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Eye, EyeOff, Mail, Lock, ArrowRight, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import anuceoLogo from '@/assets/anucelo-logo.png';

const EmployeeLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/employee/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase(), password }),
      });

      const data = await res.json();

      if (data.success && data.employee) {
        const emp = data.employee;
        localStorage.setItem('empLoggedIn', 'true');
        localStorage.setItem('empEmail', emp.email);
        localStorage.setItem('empName', emp.name);
        localStorage.setItem('empRole', emp.role);
        toast({
          title: `Welcome back, ${emp.name}!`,
          description: 'You have successfully logged into the employee portal.',
        });
        navigate('/employee/dashboard');
      } else {
        toast({
          title: 'Login failed',
          description: data.error || 'Invalid credentials. Please try again.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Connection error',
        description: 'Could not reach the server. Please try again.',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Employee Portal | Anucleo Insurance</title>
        <meta name="description" content="Anucleo Insurance employee portal - Staff login." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <img src={anuceoLogo} alt="Anucleo Insurance" className="h-12 mx-auto mb-4" />
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Employee Portal</h1>
            <p className="text-slate-500">Internal staff access only</p>
          </div>

          <Card className="border-blue-100 bg-white shadow-lg">
            <form onSubmit={handleLogin} className="space-y-6 p-6">
              <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 rounded-lg border border-blue-100">
                <ShieldAlert className="h-5 w-5 text-blue-500 shrink-0" />
                <p className="text-xs text-slate-500">This area is for Anucleo employees only. Unauthorized access is prohibited.</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="emp-email" className="text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="emp-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="employee@anucleo.com"
                    className="pl-10 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="emp-password" className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="emp-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2.5"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Access Portal</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-xs text-slate-500 text-center mb-2">Employee Credentials:</p>
                <p className="text-xs text-slate-500 text-center">
                  Email: servando@anucleo.com | Password: anucleo2025
                </p>
              </div>
            </form>
          </Card>

          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
            >
              ← Back to main site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeLogin;
