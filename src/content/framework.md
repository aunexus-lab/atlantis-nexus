The **Nexus Framework** is the integration backbone that connects the university's Student Information System (SIS) with its online campus (Moodle LMS). It follows a **hub-and-spoke architecture** where one central API translates institutional data into consumable services — and every plugin, assistant, and automation extends from it.

> The design philosophy is simple: **the SIS is the source of truth; the LMS is the experience layer.**

---

## Architectural Design

The framework is built on three tiers:

1. **Data Gateway** — `NexusSIS` exposes the Campus Nexus SIS via a clean REST/JSON API, hiding the complexity of OData, CQRS commands, and stored procedures behind simple endpoints.
2. **Intelligence Layer** — `CampusMCP` adds AI reasoning on top of the gateway, connecting Azure OpenAI with function-calling to answer student queries in natural language.
3. **Experience Plugins** — Six Moodle plugins consume the gateway to deliver attendance, financial status, course management, AI tutoring, resume building, and payments — directly inside the LMS.

---

## Solution Catalog

| Solution | Type | Scope |
|----------|------|-------|
| **NexusSIS** | Python Flask API | Central gateway — translates Campus Nexus OData/CQRS into 15+ REST endpoints covering finances, academics, financial aid, attendance, enrollment, and Entra ID provisioning |
| **CampusMCP** | FastAPI + Azure OpenAI | AI-powered campus assistant — 7 MCP tools for natural-language queries about balances, courses, GPA, payments. FERPA-compliant. Bilingual (EN/ES) |
| **Attendance** | Moodle local plugin | Weekly attendance grid with color-coded badges, role-based editing, SIS sync (read + write), activity auto-attendance, and hold group enforcement |
| **AttendanceTrack** | *(planned)* | Attendance analytics and reporting — historical trends, early alerts, completion tracking |
| **LinkClass** | Moodle local plugin | Two-panel admin dashboard for SIS ↔ Moodle course creation, linking, and enrollment. Semester tree browser, auto-user creation with OIDC, instructor enrollment |
| **FinStatus** | Moodle block plugin | Financial status block — shows program enrollment, balance, and color-coded status badges. Configurable payment button |
| **Campus Resume** | Moodle local plugin | AI-powered resume builder with multi-layer caching, block-based layout, PDF export. Includes mock interview simulator with voice input and speech analytics |
| **VideoClass** | Moodle course format | Custom course format with section-focused video navigation and built-in AI tutor that reads section resources (PDFs, pages, books) as context |
| **Stripe Gateway** | Moodle local plugin | Shared Stripe payment infrastructure — configure API keys once, any plugin can create checkout sessions. Webhook routing to consumer plugins |

---

## Benefits for the Campus LMS

- **Data-driven by default** — Every plugin reads live institutional data from the SIS instead of duplicating it in Moodle. Student rosters, enrollment statuses, and financial records are always current.
- **Automated enrollment** — LinkClass creates Moodle courses from SIS sections, provisions user accounts via Entra ID, and enrolls students and instructors — eliminating manual setup each semester.
- **AI-native experience** — Students interact with an intelligent assistant (CampusMCP) and an AI tutor (VideoClass) directly inside the LMS, without leaving Moodle.
- **Unified payments** — The Stripe Gateway provides a single payment infrastructure that any plugin can use, from invoice payments to resume credits.

## Benefits for Professors

- **Attendance at a glance** — The attendance grid shows the entire class × meeting-date matrix with color-coded badges (P/A/E/T). Changes sync back to the SIS in real time.
- **Hold group enforcement** — Students with financial or administrative holds are automatically blocked from attendance, following institutional policy without manual intervention.
- **Activity auto-attendance** — When a student submits a mapped Moodle activity, attendance is posted to the SIS automatically — reducing clerical burden.
- **AI tutor in every course** — VideoClass extracts PDF, page, and book content from each section and feeds it to the AI tutor, giving students section-aware academic support 24/7.
- **Course creation in clicks** — LinkClass lets staff create and link courses from the semester tree, preview the roster, and run enrollment — all from one dashboard.

## Benefits for University Operations

- **Financial visibility** — FinStatus gives every student a real-time view of their enrollment status, program balance, and payment options — reducing inquiries to the finance office.
- **Enrollment integrity** — LinkClass's enrollment preview categorizes students into ready / already enrolled / missing / no email — surfacing data quality issues before they become problems.
- **Audit trail** — Every action in LinkClass is logged with JSON details. Attendance changes are synced bidirectionally with the SIS. Resume sessions are soft-deleted but never lost.
- **FERPA compliance** — CampusMCP runs on Azure OpenAI within a private VNet. PII is stripped before AI processing. Email-override security prevents cross-student access.
- **Scalable payments** — The Stripe Gateway handles webhook routing and session management centrally. Adding payment capabilities to new plugins requires only a few lines of PHP.
- **Student career services** — The Resume Builder generates professional resumes from institutional data and AI, while the mock interview simulator helps students prepare — all within the LMS.
