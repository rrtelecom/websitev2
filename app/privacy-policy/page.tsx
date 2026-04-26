import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — R.R. Telecommunication',
  description: 'Privacy Policy for R.R. Telecommunication. Learn how we collect, use, and protect your information.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-3 text-slate-600 leading-relaxed">{children}</div>
    </div>
  )
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-inside space-y-1.5 text-slate-600">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Legal</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <main className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Section title="1. Who We Are">
            <p>
              R.R. Telecommunication ("we", "us", "our") is a wholesale supplier and professional installer
              of telecom and security equipment based in Mumbai, Maharashtra, India. Our website is{' '}
              <strong className="text-slate-800">rrtelecommunications.com</strong>.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of information:</p>
            <Ul items={[
              <><strong className="text-slate-800">Contact details</strong> — name, phone number, and email address submitted through our contact form or enquiry channels.</>,
              <><strong className="text-slate-800">Usage data</strong> — pages visited, time on site, browser type, and referring URLs, collected automatically via analytics tools.</>,
              <><strong className="text-slate-800">Communications</strong> — messages you send us via the contact form or email.</>,
            ]} />
            <p>We do not collect payment card details or sensitive financial information through this website.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <Ul items={[
              'To respond to your enquiries and provide quotations.',
              'To arrange site visits and service appointments.',
              'To send you relevant product or service updates if you have opted in.',
              'To improve our website and understand how visitors use it.',
            ]} />
          </Section>

          <Section title="4. How We Share Your Information">
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share
              information with trusted service providers who assist us in operating our website or
              conducting our business, subject to confidentiality obligations. We may also disclose
              information where required by law or court order.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes
              described in this policy, or as required by applicable law.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience and collect usage statistics. You can configure your browser to refuse cookies,
              though some parts of the site may not function correctly as a result.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <Ul items={[
              'Access the personal information we hold about you.',
              'Request correction of inaccurate information.',
              'Request deletion of your information, subject to legal obligations.',
              'Withdraw consent for marketing communications at any time.',
            ]} />
            <p>To exercise any of these rights, please contact us at the details below.</p>
          </Section>

          <Section title="8. Security">
            <p>
              We take reasonable technical and organisational measures to protect your information from
              unauthorised access, loss, or misuse. However, no transmission over the internet is
              completely secure and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>
              Our website may contain links to third-party sites such as IndiaMART. We are not
              responsible for the privacy practices of those sites and encourage you to read their
              privacy policies.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The revised version will be posted
              on this page with an updated date. Continued use of our website after changes constitutes
              acceptance of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <Ul items={[
              <><span className="text-slate-800">Email:</span>{' '}<a href="mailto:contact@rrtelecommunications.com" className="text-blue-600 hover:underline">contact@rrtelecommunications.com</a></>,
              <><span className="text-slate-800">Phone:</span>{' '}<a href="tel:+918452855328" className="text-blue-600 hover:underline">84528 55328</a></>,
              <><span className="text-slate-800">Address:</span> Mumbai, Maharashtra — 400097</>,
            ]} />
          </Section>

        </div>
      </main>

      <Footer />
    </>
  )
}
