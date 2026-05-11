import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Anucleo Insurance Solutions</title>
        <meta 
          name="description" 
          content="Terms of Service for Anucleo Insurance Solutions. Legal terms and conditions governing the use of our insurance services in New Jersey." 
        />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Effective Date: January 1, 2024
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using the services of Anucleo Insurance Solutions ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service and all applicable laws and regulations of the State of New Jersey. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. License and Regulatory Compliance</h2>
                <p className="text-muted-foreground mb-4">
                  Anucleo Insurance Solutions is licensed to sell insurance in the State of New Jersey and operates in compliance with:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>New Jersey Department of Banking and Insurance regulations</li>
                  <li>New Jersey Insurance Code (N.J.S.A. 17:1-1 et seq.)</li>
                  <li>All applicable federal and state insurance laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Services Provided</h2>
                <p className="text-muted-foreground mb-4">
                  We provide insurance brokerage services including:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Insurance policy quotes and comparisons</li>
                  <li>Policy placement and binding coverage</li>
                  <li>Claims assistance and advocacy</li>
                  <li>Risk management consultation</li>
                  <li>Policy renewal and modification services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  As our client, you agree to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information for insurance applications</li>
                  <li>Pay premiums and fees in a timely manner</li>
                  <li>Notify us promptly of any material changes that may affect your coverage</li>
                  <li>Report claims promptly and cooperate in the claims process</li>
                  <li>Comply with all policy terms and conditions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibent text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  In accordance with New Jersey law:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Our liability is limited to the scope of services we agree to provide</li>
                  <li>We are not liable for coverage denials by insurance carriers</li>
                  <li>Our maximum liability shall not exceed the commissions received for the specific policy in question</li>
                  <li>We maintain professional liability insurance as required by New Jersey law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms or our services shall be governed by New Jersey law and resolved through the courts of New Jersey. Clients also have the right to file complaints with the New Jersey Department of Banking and Insurance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate our service relationship with written notice. Termination does not affect existing insurance policies or ongoing claims. We will cooperate in the orderly transition of your insurance matters.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Amendments</h2>
                <p className="text-muted-foreground">
                  We may modify these terms at any time by providing notice to clients. Continued use of our services after such notice constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions regarding these Terms of Service, contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-medium">Anucleo Insurance Solutions</p>
                  <p className="text-muted-foreground">365 Rifle Camp Road, Suite 209</p>
                  <p className="text-muted-foreground">Woodland Park, NJ 07424</p>
                  <p className="text-muted-foreground">Phone: (201) 977-8899</p>
                  <p className="text-muted-foreground">Email: services@anucleo.com</p>
                  <p className="text-muted-foreground">NJ Insurance License: [License Number]</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsOfService;