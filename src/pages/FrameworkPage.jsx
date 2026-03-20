import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FrameworkDiagram from '../components/FrameworkDiagram';
import Section from '../components/Section';
import useJsonLd from '../hooks/useJsonLd';

/* ── Solution data ─────────────────────────────────────── */
const solutions = [
    {
        id: 'nexussis',
        name: 'NexusSIS',
        tag: 'API Gateway',
        tagColor: 'bg-blue-600',
        type: 'Python Flask API',
        summary: 'Central gateway that translates the Campus Nexus SIS (OData/CQRS) into 15+ clean REST/JSON endpoints.',
        features: [
            'Student financials — balance, transactions, invoices, payment posting',
            'Academics — GPA, courses, degree pathway, class sections',
            'Attendance — roster, meeting dates, read/write attendance records',
            'Financial aid — awards, loans',
            'Enrollment — semester tree, registration terms, class sections',
            'Entra ID — user provisioning via Microsoft Graph',
        ],
        repo: 'https://github.com/aunexus-lab/nexussis',
    },
    {
        id: 'campusmcp',
        name: 'CampusMCP',
        tag: 'AI Service',
        tagColor: 'bg-violet-600',
        type: 'FastAPI + Azure OpenAI',
        summary: 'AI-powered campus assistant. Students ask questions in natural language and the LLM queries real SIS data via function-calling.',
        features: [
            '7 MCP tools — balance, transactions, payments, GPA, courses, degree, profile',
            'Bilingual — responds in Spanish or English automatically',
            'FERPA compliant — Azure VNet isolation, data never leaves tenant',
            'Dual interface — REST /chat for Moodle + MCP/SSE for Claude Desktop',
            'Admin prompt editor — live-edit system prompt without redeploy',
        ],
        repo: 'https://github.com/aunexus-lab/campusmcp',
    },
    {
        id: 'attendance',
        name: 'Attendance Tracker',
        tag: 'Moodle Plugin',
        tagColor: 'bg-emerald-600',
        type: 'Moodle local plugin',
        summary: 'Weekly attendance grid with color-coded badges. Read and write attendance directly to/from the SIS.',
        features: [
            'Visual attendance grid — students × meeting dates with P/A/E/T badges',
            'Role-based access — students see read-only; teachers can edit',
            'Activity auto-attendance — auto-post "Attended" when student submits mapped activity',
            'Hold group enforcement — block attendance for students in configurable SIS groups',
            'Smart auto-mapping — proposes activity-to-meeting-date mappings by due date',
        ],
        repo: 'https://github.com/aunexus-lab/attendance',
    },
    {
        id: 'linkclass',
        name: 'LinkClass',
        tag: 'Moodle Plugin',
        tagColor: 'bg-emerald-600',
        type: 'Moodle local plugin',
        summary: 'Two-panel admin dashboard that bridges SIS and Moodle — create courses, link sections, and enroll students from the semester tree.',
        features: [
            'Semester tree browser — Financial → Registration → Class Sections',
            'Course creation — create Moodle courses from SIS sections',
            'Course linking — associate existing Moodle courses with SIS sections',
            'Enrollment preview — ready / already enrolled / missing / no email',
            'Auto-create users — provision missing Moodle accounts via OIDC (Entra ID)',
            'Instructor enrollment — auto-enroll section instructor as Editing Teacher',
        ],
        repo: 'https://github.com/aunexus-lab/linkclass',
    },
    {
        id: 'finstatus',
        name: 'FinStatus',
        tag: 'Moodle Plugin',
        tagColor: 'bg-emerald-600',
        type: 'Moodle block plugin',
        summary: 'Financial status block that shows enrollment, balance, and color-coded status badges inside Moodle.',
        features: [
            'Auto-fetches data using authenticated user\'s email',
            'Color-coded enrollment status badges (Active, Graduate, Dropped, Re-Entry)',
            'Configurable payment button linking to external payment page',
            'Bilingual — English and Spanish language packs',
            'Student group badges — SGroup and GroupTitle display',
        ],
        repo: 'https://github.com/aunexus-lab/mdlfinstatus',
    },
    {
        id: 'resume',
        name: 'Campus Resume',
        tag: 'Moodle Plugin',
        tagColor: 'bg-emerald-600',
        type: 'Moodle local plugin',
        summary: 'AI-powered resume builder with multi-layer caching, block-based layout, PDF export, and a mock interview simulator with voice input.',
        features: [
            'Block-based resume builder — drag & drop ordering, toggle blocks on/off',
            'Multi-layer caching — course, context, layout, and render cache levels',
            'AI-generated content — professional summary, skills, highlights',
            'Mock interview simulator — AI-powered Q&A with voice input (Web Speech API)',
            'Speech analytics — WPM, filler words, pauses, self-corrections',
            'Credit-based billing with Stripe integration',
            'Admin dashboard — interviews, resumes, prompt editor',
        ],
        repo: 'https://github.com/aunexus-lab/campusresume',
    },
    {
        id: 'videoclass',
        name: 'VideoClass',
        tag: 'Course Format',
        tagColor: 'bg-amber-600',
        type: 'Moodle course format',
        summary: 'Custom course format with section-focused video navigation and an AI tutor that reads course resources as context.',
        features: [
            'Section-focused navigation — one section at a time, topics-based',
            'Built-in AI tutor — reads PDFs, pages, books, URLs from the current section',
            'Resource context builder — extracts text from 7+ module types with truncation',
            'CampusMCP integration — uses the same AI backend for consistency',
            'Configurable system prompt — customize AI behavior per site',
        ],
        repo: 'https://github.com/aunexus-lab/moodle-course',
    },
    {
        id: 'stripe',
        name: 'Stripe Gateway',
        tag: 'Payments',
        tagColor: 'bg-pink-600',
        type: 'Moodle local plugin',
        summary: 'Shared Stripe payment infrastructure. Configure API keys once — any Moodle plugin can accept payments.',
        features: [
            'Centralized configuration — one settings page for all plugins',
            'Checkout session API — any plugin creates sessions with a few lines of PHP',
            'Webhook dispatcher — routes Stripe events to consumer plugins via component_callback',
            'Webhook signature verification — secure event handling',
        ],
        repo: 'https://github.com/aunexus-lab/stripepayment',
    },
    {
        id: 'attendancetrack',
        name: 'AttendanceTrack',
        tag: 'Planned',
        tagColor: 'bg-gray-400',
        type: 'Planned repository',
        summary: 'Attendance analytics and reporting — historical trends, early alerts, and completion tracking. Currently in planning.',
        features: [
            'Historical attendance trends and visualizations',
            'Early warning alerts for at-risk students',
            'Completion tracking and reporting',
        ],
        repo: 'https://github.com/aunexus-lab/attendancetrack',
    },
];

/* ── Benefit Icons (inline SVGs) ────────────────────────── */
const BenefitIcon = ({ type }) => {
    const cls = "w-7 h-7 text-gray-700 shrink-0";
    switch (type) {
        case 'lms':
            return (
                <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
                </svg>
            );
        case 'professors':
            return (
                <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.54 23.54 0 0 0-2.34 6.782c5.03.954 10.24.954 15.27 0a23.54 23.54 0 0 0-2.34-6.782M12 3l8.485 4.263M12 3 3.515 7.263M12 3v7.147m8.485-2.884L12 10.147m8.485-2.884v3.386l-3.515 1.768" />
                </svg>
            );
        case 'operations':
            return (
                <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
            );
        default:
            return null;
    }
};

/* ── Benefits data ─────────────────────────────────────── */
const benefitSections = [
    {
        id: 'lms',
        title: 'Campus Online (LMS)',
        subtitle: 'The learning platform becomes data-driven and intelligent',
        items: [
            { title: 'Live institutional data', desc: 'Every plugin reads directly from the SIS — rosters, enrollment, finances are always current. No manual data imports.' },
            { title: 'Automated enrollment', desc: 'LinkClass creates courses, provisions users via Entra ID, and enrolls students and instructors — eliminating manual setup each semester.' },
            { title: 'AI-native experience', desc: 'Students interact with an intelligent assistant (CampusMCP) and AI tutor (VideoClass) directly inside the LMS.' },
            { title: 'Unified payments', desc: 'The Stripe Gateway provides a single payment infrastructure that any plugin can use, from invoice payments to resume credits.' },
        ],
    },
    {
        id: 'professors',
        title: 'Professors',
        subtitle: 'Less clerical work, more teaching',
        items: [
            { title: 'Attendance at a glance', desc: 'The attendance grid shows the entire class × meeting-date matrix with color-coded badges. Changes sync to the SIS in real time.' },
            { title: 'Hold group enforcement', desc: 'Students with financial or administrative holds are automatically blocked from attendance, following institutional policy.' },
            { title: 'Activity auto-attendance', desc: 'When a student submits a mapped Moodle activity, attendance is posted to the SIS automatically.' },
            { title: 'AI tutor in every course', desc: 'VideoClass gives students section-aware academic support 24/7, without additional work from the instructor.' },
        ],
    },
    {
        id: 'operations',
        title: 'University Operations',
        subtitle: 'Visibility, compliance, and automation',
        items: [
            { title: 'Financial visibility', desc: 'FinStatus gives every student a real-time view of their enrollment status and balance — reducing inquiries to the finance office.' },
            { title: 'Enrollment integrity', desc: 'LinkClass\'s enrollment preview surfaces data quality issues (missing accounts, no email) before they become problems.' },
            { title: 'FERPA compliance', desc: 'CampusMCP runs on Azure OpenAI within a private VNet. PII is stripped before AI processing. Email-override prevents cross-student access.' },
            { title: 'Full audit trail', desc: 'Every action in LinkClass is logged. Attendance syncs bidirectionally with the SIS. Resume sessions are soft-deleted but never lost.' },
            { title: 'Career services', desc: 'The Resume Builder generates professional resumes from institutional data. The mock interview simulator helps students prepare — all within the LMS.' },
        ],
    },
];

/* ── Sub-nav sections ──────────────────────────────────── */
const sections = [
    { id: 'architecture', label: 'Architecture' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'benefits', label: 'Benefits' },
];

/* ── Solution Card ─────────────────────────────────────── */
function SolutionCard({ sol }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`border rounded-xl transition-all duration-300 ${open ? 'border-gray-300 shadow-lg bg-white' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left p-5 cursor-pointer"
            >
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold text-white ${sol.tagColor}`}>
                                {sol.tag}
                            </span>
                            <h3 className="text-lg font-semibold text-gray-900">{sol.name}</h3>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">{sol.type}</p>
                    </div>
                    <span className={`text-gray-400 transition-transform duration-300 text-lg ${open ? 'rotate-180' : ''}`}>
                        ▾
                    </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{sol.summary}</p>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Key capabilities</h4>
                    <ul className="space-y-2">
                        {sol.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={sol.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-700 transition-colors no-underline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

/* ── Benefit Card ──────────────────────────────────────── */
function BenefitCard({ item }) {
    return (
        <div className="p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all">
            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
    );
}

/* ── Main Framework Page ───────────────────────────────── */
function FrameworkPage() {
    const [activeSection, setActiveSection] = useState('architecture');

    useJsonLd({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'TechArticle',
                '@id': 'https://nexus.atlantisuniversity.edu/framework',
                url: 'https://nexus.atlantisuniversity.edu/framework',
                headline: 'Nexus Framework — Integration Ecosystem',
                description: 'The integration backbone connecting the Student Information System (SIS) with the online campus. A hub-and-spoke architecture with a central API gateway, AI services, and Moodle plugins that turn institutional data into experiences.',
                author: { '@id': 'https://nexus.atlantisuniversity.edu/#org' },
                isPartOf: { '@id': 'https://nexus.atlantisuniversity.edu/#website' },
                about: { '@type': 'Thing', name: 'Educational Technology Integration' },
                articleSection: ['Architecture', 'Solution Catalog', 'Benefits']
            },
            ...solutions.map(sol => ({
                '@type': 'SoftwareSourceCode',
                name: sol.name,
                description: sol.summary,
                codeRepository: sol.repo,
                programmingLanguage: sol.type.includes('Python') ? 'Python'
                    : sol.type.includes('FastAPI') ? 'Python'
                        : sol.type.includes('Moodle') ? 'PHP'
                            : sol.type.includes('course format') ? 'PHP'
                                : 'PHP',
                applicationCategory: sol.tag,
                author: { '@id': 'https://nexus.atlantisuniversity.edu/#org' }
            }))
        ]
    }, 'framework');

    // Track scroll position to highlight active nav item
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 140;
            for (const sec of [...sections].reverse()) {
                const el = document.getElementById(sec.id);
                if (el && el.offsetTop <= scrollY) {
                    setActiveSection(sec.id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* ── Top Bar ── */}
            <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors text-sm no-underline">
                            ← Atlantis Nexus
                        </Link>
                        <span className="text-gray-300">|</span>
                        <span className="font-semibold text-lg tracking-tight">Nexus Framework</span>
                    </div>
                    <nav className="hidden md:flex gap-1">
                        {sections.map(sec => (
                            <a
                                key={sec.id}
                                href={`#${sec.id}`}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all no-underline ${activeSection === sec.id
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {sec.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="pt-24 pb-32">

                {/* ── Hero ── */}
                <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-black mb-6">
                        Nexus Framework
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
                        The integration backbone that connects the Student Information System (SIS)
                        with the online campus. A central API, AI services, and Moodle plugins
                        that turn institutional data into experiences.
                    </p>

                    <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
                        <div>
                            <div className="text-3xl font-black text-black">9</div>
                            <div className="text-sm text-gray-500 mt-1">Repositories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-black">3</div>
                            <div className="text-sm text-gray-500 mt-1">Layers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-black">15+</div>
                            <div className="text-sm text-gray-500 mt-1">API Endpoints</div>
                        </div>
                    </div>
                </section>

                {/* ── ARCHITECTURE ── */}
                <section id="architecture" className="max-w-4xl mx-auto px-6 py-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight border-b border-gray-200 pb-2">
                        Architectural Design
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-2 text-lg">
                        The framework follows a <strong className="text-gray-900">hub-and-spoke</strong> design in three layers:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 my-8">
                        <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">Layer 1 — Data Gateway</div>
                            <h3 className="font-semibold text-gray-900 mb-1">NexusSIS API</h3>
                            <p className="text-sm text-gray-600">Translates the complexity of OData, CQRS, and stored procedures into simple, secure REST/JSON endpoints.</p>
                        </div>
                        <div className="p-5 bg-violet-50 rounded-xl border border-violet-100">
                            <div className="text-xs font-bold text-violet-600 uppercase tracking-wide mb-2">Layer 2 — Intelligence</div>
                            <h3 className="font-semibold text-gray-900 mb-1">CampusMCP + AI</h3>
                            <p className="text-sm text-gray-600">Adds AI reasoning on top of the gateway data. Azure OpenAI with function-calling for natural language queries.</p>
                        </div>
                        <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-100">
                            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">Layer 3 — Experience</div>
                            <h3 className="font-semibold text-gray-900 mb-1">Moodle Plugins</h3>
                            <p className="text-sm text-gray-600">Six plugins consume the gateway to deliver attendance, finances, courses, AI tutoring, resumes, and payments inside the LMS.</p>
                        </div>
                    </div>

                    <FrameworkDiagram />

                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-500 mt-8 text-sm">
                        The SIS is the source of truth; the LMS is the experience layer. Every plugin reads live data — there is never a manual import.
                    </blockquote>
                </section>

                {/* ── SOLUTIONS ── */}
                <section id="solutions" className="max-w-4xl mx-auto px-6 py-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight border-b border-gray-200 pb-2">
                        Solution Catalog
                    </h2>
                    <p className="text-gray-500 mb-8">
                        Each repository is an independent solution with its own lifecycle. Click to expand.
                    </p>

                    <div className="grid gap-4">
                        {solutions.map(sol => (
                            <SolutionCard key={sol.id} sol={sol} />
                        ))}
                    </div>
                </section>

                {/* ── BENEFITS ── */}
                <section id="benefits" className="max-w-4xl mx-auto px-6 py-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight border-b border-gray-200 pb-2">
                        Benefits
                    </h2>
                    <p className="text-gray-500 mb-10">
                        The impact of the framework, organized by audience.
                    </p>

                    <div className="space-y-12">
                        {benefitSections.map(section => (
                            <div key={section.id}>
                                <div className="flex items-center gap-3 mb-2">
                                    <BenefitIcon type={section.id} />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                                        <p className="text-sm text-gray-500">{section.subtitle}</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-3 mt-4">
                                    {section.items.map((item, i) => (
                                        <BenefitCard key={i} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <footer className="border-t border-gray-100 py-12 text-center text-sm text-gray-400">
                <p>© 2026 Atlantis Nexus. Nexus Framework Documentation.</p>
            </footer>
        </div>
    );
}

export default FrameworkPage;
