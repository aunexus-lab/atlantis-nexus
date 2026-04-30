import React from 'react';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'April 30, 2026';
const ORG_NAME = 'Atlantis University';
const APP_NAME = 'Atlantis Nexus';
const CONTACT_EMAIL = 'itsupport@atlantisuniversity.edu';
const SITE_URL = 'https://nexus.atlantisuniversity.edu';

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: (
      <>
        <p>
          Welcome to <strong>{APP_NAME}</strong>, operated by <strong>{ORG_NAME}</strong> ("we," "us," or "our"). 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
          our platform and integrated services, including our QuickBooks Online integration.
        </p>
        <p>
          By accessing or using our services, you agree to the practices described in this policy. 
          If you do not agree with the terms of this Privacy Policy, please discontinue use of our platform.
        </p>
      </>
    ),
  },
  {
    id: 'information-collected',
    title: '2. Information We Collect',
    content: (
      <>
        <p>We collect information in the following categories:</p>
        <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">a) Information You Provide Directly</h3>
        <ul>
          <li>Name, email address, and contact details when you create an account or submit a form.</li>
          <li>Academic and enrollment data you enter into the system.</li>
          <li>Payment and billing information processed via authorized third-party providers.</li>
        </ul>
        <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">b) Information Collected Automatically</h3>
        <ul>
          <li>Log data including IP addresses, browser type, pages visited, and timestamps.</li>
          <li>Device information such as hardware model, operating system, and unique identifiers.</li>
          <li>Cookies and similar tracking technologies for session management and analytics.</li>
        </ul>
        <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">c) Third-Party Integration Data</h3>
        <ul>
          <li>
            When you connect our platform to <strong>QuickBooks Online</strong>, we access accounting data 
            (customer records, invoices, and payment history) strictly within the scope of your authorization. 
            This data is used solely to provide the integration service you requested.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'use-of-information',
    title: '3. How We Use Your Information',
    content: (
      <>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide, operate, and maintain our platform and services.</li>
          <li>Process transactions and manage your account.</li>
          <li>Synchronize student and financial records with authorized integrations (e.g., QuickBooks Online).</li>
          <li>Send administrative communications, updates, and security alerts.</li>
          <li>Comply with legal obligations and enforce our Terms of Service.</li>
          <li>Analyze usage patterns to improve platform performance and user experience.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
      </>
    ),
  },
  {
    id: 'data-sharing',
    title: '4. Data Sharing & Disclosure',
    content: (
      <>
        <p>We may share your information in the following limited circumstances:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Trusted vendors who assist us in operating our platform 
            (e.g., cloud hosting, analytics), bound by confidentiality agreements.
          </li>
          <li>
            <strong>Intuit / QuickBooks:</strong> Data exchanged via the QuickBooks Online API is governed 
            by <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer">Intuit's Privacy Statement</a>.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, 
            subject to equivalent privacy protections.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: '5. Data Retention',
    content: (
      <p>
        We retain your personal information for as long as your account is active or as needed to provide 
        services, comply with legal obligations, resolve disputes, and enforce agreements. 
        When data is no longer needed, it is securely deleted or anonymized in accordance with applicable regulations.
      </p>
    ),
  },
  {
    id: 'security',
    title: '6. Data Security',
    content: (
      <>
        <p>
          We implement industry-standard technical and organizational security measures to protect your 
          information against unauthorized access, alteration, disclosure, or destruction. These include:
        </p>
        <ul>
          <li>Encryption of data in transit (TLS) and at rest (AES-256).</li>
          <li>Role-based access controls and least-privilege principles.</li>
          <li>Regular security assessments and vulnerability scanning.</li>
          <li>Secure OAuth 2.0 token handling for third-party API integrations.</li>
        </ul>
        <p>
          No method of transmission over the Internet is 100% secure. We cannot guarantee absolute security, 
          but we continuously strive to protect your data.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: '7. Your Rights & Choices',
    content: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access and receive a copy of your personal data.</li>
          <li>Correct inaccurate or incomplete information.</li>
          <li>Request deletion of your data (subject to legal retention obligations).</li>
          <li>Opt out of non-essential communications.</li>
          <li>Revoke third-party integration authorizations (e.g., disconnect QuickBooks).</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '8. Cookies & Tracking',
    content: (
      <p>
        We use essential cookies for session authentication and platform functionality. 
        Analytics cookies (if any) are used in aggregated, anonymized form. You may configure 
        your browser to reject cookies, though this may affect certain platform features.
      </p>
    ),
  },
  {
    id: 'children',
    title: '9. Children\'s Privacy',
    content: (
      <p>
        Our platform is not directed to children under the age of 13. We do not knowingly collect 
        personal information from children. If we become aware that a child under 13 has provided 
        personal data, we will promptly delete it. If you believe a child has submitted data to us, 
        please contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    ),
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes 
        by posting the new policy on this page and updating the "Last Updated" date. 
        Continued use of our services after changes are posted constitutes your acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: (
      <p>
        If you have questions or concerns about this Privacy Policy or our data practices, please contact:
        <br /><br />
        <strong>{ORG_NAME} – Privacy Office</strong><br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
        Website: <a href={SITE_URL} target="_blank" rel="noopener noreferrer">{SITE_URL}</a>
      </p>
    ),
  },
];

export default function PrivacyPage() {
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
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline">
              Terms of Service
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
            Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            How {ORG_NAME} collects, uses, and protects your information across the {APP_NAME} platform.
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
