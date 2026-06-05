import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ChatBot from "@/components/chat/ChatBot";
import Index from "./pages/Index";
import UmbrellaInsurance from "./pages/UmbrellaInsurance";
import CommercialInsurance from "./pages/CommercialInsurance";
import AutoInsurance from "./pages/AutoInsurance";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClientServices from "./pages/ClientServices";
import GetQuote from "./pages/GetQuote";
import WorkersComp from "./pages/WorkersComp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmployeeLogin from "./pages/EmployeeLogin";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/umbrella-insurance" element={<UmbrellaInsurance />} />
            <Route path="/commercial-insurance" element={<CommercialInsurance />} />
            <Route path="/auto-insurance" element={<AutoInsurance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client-services" element={<ClientServices />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/workers-comp" element={<WorkersComp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee/login" element={<EmployeeLogin />} />
            <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBot />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
