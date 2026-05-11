import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Anucleo Insurance Solutions</title>
        <meta 
          name="description" 
          content="Privacy Policy for Anucleo Insurance Solutions. Learn how we collect, use, and protect your personal information in accordance with New Jersey state law." 
        />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Effective Date: January 1, 2024
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  Anucleo Insurance Solutions ("we," "our," or "us") collects information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Request insurance quotes or purchase policies</li>
                  <li>Create an account or log into our client portal</li>
                  <li>Contact us for customer service or support</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Provide insurance quotes and manage your policies</li>
                  <li>Process claims and handle customer service requests</li>
                  <li>Communicate with you about your account and services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  In accordance with New Jersey law, we may share your personal information with:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Insurance carriers to underwrite and service your policies</li>
                  <li>Third-party service providers who assist in our business operations</li>
                  <li>Regulatory authorities as required by law</li>
                  <li>Other parties with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction, in compliance with New Jersey data protection standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Under New Jersey law, you have the right to:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-medium">Anucleo Insurance Solutions</p>
                  <p className="text-muted-foreground">365 Rifle Camp Road, Suite 209</p>
                  <p className="text-muted-foreground">Woodland Park, NJ 07424</p>
                  <p className="text-muted-foreground">Phone: (201) 977-8899</p>
                  <p className="text-muted-foreground">Email: services@anucleo.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the effective date.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;