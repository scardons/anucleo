import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-950 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-slate-700 leading-relaxed text-base">
        {children}
      </div>
    </section>
  );
};

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase mb-4">
              Legal Information
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-6">
              Terms of Service
            </h1>

            <div className="space-y-2 text-slate-600">
              <p>
                <strong className="text-slate-800">Effective Date:</strong>{" "}
                05/05/2026
              </p>
              <p>
                <strong className="text-slate-800">Company:</strong> Anucleo
                Financial
              </p>
              <p>
                <strong className="text-slate-800">Website:</strong>{" "}
                <a
                  href="https://www.anucleo.com"
                  className="underline underline-offset-4 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.Anucleo.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-12">
            <Section title="1. Agreement to Terms">
              <p>
                By accessing or using this website, submitting your information,
                requesting a quote, or communicating with Anucleo Financial, you
                agree to be bound by these Terms of Service. If you do not agree,
                please do not use this website or submit your information.
              </p>
            </Section>

            <Section title="2. Services Provided">
              <p>
                Anucleo Financial provides insurance-related services, including
                but not limited to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Insurance quotes and comparisons</li>
                <li>Policy servicing and account support</li>
                <li>Customer communication and assistance</li>
                <li>Appointment scheduling and follow-ups</li>
              </ul>

              <p>
                We do not directly underwrite insurance policies. Coverage is
                provided by third-party insurance carriers.
              </p>
            </Section>

            <Section title="3. Information You Provide">
              <p>By submitting forms on this website, you agree that:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>The information you provide is accurate and complete</li>
                <li>
                  You are authorized to provide the contact information submitted
                </li>
                <li>
                  You consent to be contacted regarding your inquiry or account
                </li>
              </ul>
            </Section>

            <Section title="4. SMS Communication Terms">
              <p>
                By opting into SMS communications from Anucleo Financial through
                a web form, phone call, or other medium, you agree to receive
                text messages related to your insurance inquiries or account.
              </p>

              <p>These messages may include:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Quote follow-ups</li>
                <li>Policy updates and reminders</li>
                <li>Customer service communications</li>
                <li>Appointment confirmations</li>
              </ul>

              <p>
                Message frequency varies. Message and data rates may apply. You
                may opt out at any time by replying <strong>STOP</strong> to any
                message. For assistance, reply <strong>HELP</strong>.
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mt-5">
                <h3 className="text-lg font-semibold text-slate-950 mb-2">
                  SMS Consent Disclosure
                </h3>

                <p>
                  SMS consent is not shared with third parties or affiliates for
                  marketing purposes. We do not sell, rent, or share your SMS
                  opt-in consent with third parties for marketing.
                </p>
              </div>
            </Section>

            <Section title="5. Privacy">
              <p>
                Your use of this website is also governed by our Privacy Policy,
                which explains how we collect, use, and protect your information.
              </p>

              <p>
                Privacy Policy:{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium underline underline-offset-4 hover:text-blue-600 transition-colors"
                >
                  View Privacy Policy
                </a>
              </p>
            </Section>

            <Section title="6. Third-Party Services">
              <p>
                We may share your information with licensed insurance carriers
                and service providers solely for the purpose of:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Generating insurance quotes</li>
                <li>Processing insurance applications</li>
                <li>Providing customer service support</li>
              </ul>

              <p>
                We do not control third-party carrier underwriting decisions or
                policies.
              </p>
            </Section>

            <Section title="7. No Guarantee of Coverage or Quotes">
              <p>Submitting a request does not guarantee:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Coverage approval</li>
                <li>Specific pricing</li>
                <li>Policy issuance</li>
              </ul>

              <p>
                All insurance decisions are made by third-party carriers based on
                their underwriting guidelines.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, Anucleo Financial shall
                not be liable for:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Any delays or errors in communication</li>
                <li>Decisions made by third-party insurance carriers</li>
              </ul>

              <p>Use of this website is at your own risk.</p>
            </Section>

            <Section title="9. Website Use Restrictions">
              <p>You agree not to:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Misuse or attempt to disrupt the website</li>
                <li>Submit false or misleading information</li>
                <li>Attempt unauthorized access to systems or data</li>
              </ul>
            </Section>

            <Section title="10. Intellectual Property">
              <p>
                All content on this website, including text, logos, and branding,
                is the property of Anucleo Financial and may not be copied or
                reused without permission.
              </p>
            </Section>

            <Section title="11. Changes to Terms">
              <p>
                We may update these Terms of Service at any time. Updates will be
                posted on this page with a revised effective date.
              </p>
            </Section>

            <Section title="12. Contact Information">
              <p>
                If you have questions about these Terms, you may contact us at:
              </p>

              <div className="rounded-xl border border-slate-200 p-5 bg-white">
                <p>
                  <strong className="text-slate-900">Email:</strong>{" "}
                  <a
                    href="mailto:adm@anucleo.com"
                    className="underline underline-offset-4 hover:text-blue-600 transition-colors"
                  >
                    adm@anucleo.com
                  </a>
                </p>

                <p className="mt-2">
                  <strong className="text-slate-900">Website:</strong>{" "}
                  <a
                    href="https://www.anucleo.com"
                    className="underline underline-offset-4 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.Anucleo.com
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsOfService;