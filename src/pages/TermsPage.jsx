import React from 'react';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'April 30, 2026';
const ORG_NAME = 'Atlantis University';
const APP_NAME = 'Atlantis Nexus';
const CONTACT_EMAIL = 'itsupport@atlantisuniversity.edu';
const SITE_URL = 'https://nexus.atlantisuniversity.edu';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          By accessing or using <strong>{APP_NAME}</strong>, a platform operated by <strong>{ORG_NAME}</strong>
          ("the University," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms").
          If you do not agree to these Terms, you may not access or use our services.
        </p>
        <p>
          These Terms apply to all users of the platform, including students, faculty, administrators,
          and any third-party integrations you authorize on your behalf.
        </p>
      </>
    ),
  },
  {
    id: 'description',
    title: '2. Description of Service',
    content: (
      <>
        <p>
          {APP_NAME} is an academic and administrative platform that provides tools for student information
          management, course administration, and financial record integration. Our services include, but are not limited to:
        </p>
        <ul>
          <li>Student enrollment and academic record management.</li>
          <li>Course and curriculum planning tools.</li>
          <li>Integration with QuickBooks Online for financial data synchronization.</li>
          <li>AI-assisted academic advising and pathway planning.</li>
          <li>Administrative reporting and analytics dashboards.</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of the service at any time
          with reasonable notice.
        </p>
      </>
    ),
  },
  {
    id: 'accounts',
    title: '3. User Accounts & Access',
    content: (
      <>
        <p>
          Access to {APP_NAME} is granted by {ORG_NAME} to authorized personnel. By using your account, you agree to:
        </p>
        <ul>
          <li>Provide accurate, current, and complete information during registration.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Notify us immediately of any unauthorized use or suspected breach of your account.</li>
          <li>Accept responsibility for all activity that occurs under your account.</li>
        </ul>
        <p>
          We reserve the right to suspend or terminate accounts found to be in violation of these Terms,
          engaged in fraudulent activity, or used in a manner that could harm the platform or other users.
        </p>
      </>
    ),
  },
  {
    id: 'quickbooks-integration',
    title: '4. QuickBooks Online Integration',
    content: (
      <>
        <p>
          {APP_NAME} offers an integration with <strong>QuickBooks Online</strong>, provided by Intuit Inc.
          By connecting your QuickBooks account, you acknowledge and agree to the following:
        </p>
        <ul>
          <li>
            You authorize {ORG_NAME} to access, read, and write accounting data within your QuickBooks
            Online account solely for the purpose of providing the integration service.
          </li>
          <li>
            The integration accesses data including customer records, invoices, and payment information
            as required to synchronize student financial records.
          </li>
          <li>
            Your use of QuickBooks Online is independently subject to{' '}
            <a href="https://www.intuit.com/legal/terms/en_us/desktop/ia/tos/" target="_blank" rel="noopener noreferrer">
              Intuit's Terms of Service
            </a>{' '}
            and{' '}
            <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer">
              Privacy Statement
            </a>.
          </li>
          <li>
            You may revoke this authorization at any time through your QuickBooks account settings
            or by contacting us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </li>
          <li>
            We are not responsible for QuickBooks service outages, API changes by Intuit,
            or data discrepancies arising from issues within the QuickBooks platform.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: '5. Acceptable Use',
    content: (
      <>
        <p>You agree <strong>not</strong> to use {APP_NAME} to:</p>
        <ul>
          <li>Violate any applicable local, state, national, or international law or regulation.</li>
          <li>Transmit unauthorized advertising, spam, or solicitation.</li>
          <li>Attempt to gain unauthorized access to any system, account, or data.</li>
          <li>Reverse engineer, decompile, or disassemble any part of the platform.</li>
          <li>Introduce malware, viruses, or other harmful code.</li>
          <li>Use automated bots, scrapers, or scripts without written permission.</li>
          <li>Impersonate any person or entity or misrepresent your affiliation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: '6. Intellectual Property',
    content: (
      <>
        <p>
          All content, features, and functionality of {APP_NAME} — including text, graphics, logos,
          software, and data models — are the exclusive property of {ORG_NAME} or its licensors and
          are protected by applicable intellectual property laws.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable license to access and use the
          platform for your authorized institutional purposes. You may not copy, modify, distribute,
          or create derivative works without prior written consent.
        </p>
      </>
    ),
  },
  {
    id: 'data-accuracy',
    title: '7. Data Accuracy & Responsibility',
    content: (
      <p>
        You are responsible for the accuracy and completeness of all data you enter into the platform,
        including student records, financial data, and any information synchronized with third-party
        integrations. {ORG_NAME} is not liable for decisions or outcomes based on inaccurate data provided by users.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: '8. Disclaimer of Warranties',
    content: (
      <>
        <p>
          {APP_NAME} is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis
          without warranties of any kind, either express or implied, including but not limited to warranties
          of merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          We do not warrant that the service will be uninterrupted, error-free, or completely secure.
          Use of the platform is at your own risk.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-liability',
    title: '9. Limitation of Liability',
    content: (
      <p>
        To the fullest extent permitted by applicable law, {ORG_NAME} shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages — including but not limited to loss of data,
        revenue, or academic standing — arising out of or related to your use of or inability to use
        {APP_NAME}, even if we have been advised of the possibility of such damages.
      </p>
    ),
  },
  {
    id: 'termination',
    title: '10. Termination',
    content: (
      <p>
        We reserve the right to suspend or terminate your access to {APP_NAME} at any time, with or without
        cause, with reasonable notice where practicable. Upon termination, your right to use the service
        will immediately cease. Provisions of these Terms that by their nature should survive termination
        shall survive, including intellectual property rights, disclaimers, and limitations of liability.
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: '11. Governing Law',
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
        in which {ORG_NAME} is incorporated, without regard to conflict of law principles.
        Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts
        in that jurisdiction.
      </p>
    ),
  },
  {
    id: 'changes',
    title: '12. Changes to Terms',
    content: (
      <p>
        We reserve the right to modify these Terms at any time. We will provide notice of material changes
        by posting an updated version on this page with a revised "Last Updated" date.
        Your continued use of the platform after changes are posted constitutes your acceptance of the
        revised Terms. We encourage you to review these Terms periodically.
      </p>
    ),
  },
  {
    id: 'contact',
    title: '13. Contact Us',
    content: (
      <p>
        If you have questions or concerns about these Terms, please contact:
        <br /><br />
        <strong>{ORG_NAME} – Legal Office</strong><br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
        Website: <a href={SITE_URL} target="_blank" rel="noopener noreferrer">{SITE_URL}</a>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="no-underline flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-gray-900">AU Nexus</span>
            <span className="text-xs font-medium text-gray-400 hidden sm:inline">Method</span>
          </Link>
          <nav className="flex items-center gap-3">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white no-underline transition-all duration-200"
              style={{ background: '#C8102E' }}
              onMouseEnter={e => e.currentTarget.style.background = '#9B0B22'}
              onMouseLeave={e => e.currentTarget.style.background = '#C8102E'}
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-500 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
            Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            The rules, rights, and responsibilities that govern your use of the {APP_NAME} platform.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: <strong className="text-gray-600">{LAST_UPDATED}</strong></p>
        </div>
      </section>

      {/* Table of Contents */}
      <aside className="max-w-3xl mx-auto px-6 py-8 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
        <ol className="grid sm:grid-cols-2 gap-1 list-none m-0 p-0">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-gray-600 hover:text-gray-900 no-underline hover:underline transition-colors"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </aside>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {s.title}
              </h2>
              <div className="prose-policy text-gray-600 leading-relaxed text-sm">
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-400">
        <p className="m-0">© 2026 {ORG_NAME} · {APP_NAME}</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Link to="/privacy" className="text-gray-400 hover:text-gray-700 no-underline text-xs transition-colors">Privacy Policy</Link>
          <span className="text-gray-200">·</span>
          <Link to="/terms" className="text-gray-400 hover:text-gray-700 no-underline text-xs transition-colors">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
