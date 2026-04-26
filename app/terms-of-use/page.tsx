import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use — R.R. Telecommunication',
  description: 'Terms of Use for R.R. Telecommunication website and services.',
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

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Legal</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-slate-400 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <main className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the R.R. Telecommunication website (
              <strong className="text-slate-800">rrtelecommunications.com</strong>), you agree to be
              bound by these Terms of Use. If you do not agree, please do not use this website.
            </p>
          </Section>

          <Section title="2. Use of the Website">
            <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <Ul items={[
              'Infringe the rights of any third party.',
              'Transmit any unsolicited or unauthorised advertising or promotional material.',
              'Attempt to gain unauthorised access to any part of the website or its related systems.',
              'Interfere with the proper operation of the website.',
            ]} />
          </Section>

          <Section title="3. Product and Service Information">
            <p>
              We make every effort to ensure product descriptions, specifications, and pricing information
              on this website are accurate. However, errors may occur. We reserve the right to correct
              any errors and to update information at any time without prior notice. The presence of a
              product on this website does not guarantee its availability.
            </p>
          </Section>

          <Section title="4. Enquiries and Quotations">
            <p>
              Submitting an enquiry through our contact form or chatbot does not constitute a binding
              order or contract. A contract is formed only upon written confirmation from R.R.
              Telecommunication and, where applicable, receipt of an agreed deposit.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              All content on this website — including text, images, logos, and design — is the property
              of R.R. Telecommunication or its content suppliers and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or use any content without
              our prior written consent.
            </p>
            <p>
              Brand names and product images displayed belong to their respective manufacturers (NEC,
              Panasonic, Hikvision, CP Plus, Beetel, D-Link, and others) and are used for identification
              purposes only.
            </p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>
              This website is provided on an "as is" and "as available" basis. We make no representations
              or warranties of any kind, express or implied, regarding the accuracy, reliability, or
              completeness of any content. Your use of the website is at your own risk.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, R.R. Telecommunication shall not be liable for any
              indirect, incidental, or consequential loss or damage arising from your use of, or inability
              to use, this website or its content.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              This website may contain links to third-party websites such as IndiaMART. These links are
              provided for convenience only. We have no control over the content of those sites and
              accept no responsibility for them or for any loss or damage that may arise from your use
              of them.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These Terms of Use are governed by the laws of India. Any disputes arising out of or in
              connection with these terms shall be subject to the exclusive jurisdiction of the courts
              in Mumbai, Maharashtra.
            </p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>
              We reserve the right to amend these Terms of Use at any time. The revised terms will be
              posted on this page with an updated date. Continued use of the website after any changes
              constitutes your acceptance of the new terms.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>For any questions regarding these Terms of Use, please contact us:</p>
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
