# DEVLOG — atlantis-nexus

Registro cronológico de evolución técnica.

> Generado desde `git log`
> **Última actualización:** `2026-05-06T17:56:29Z`  
> **Commits totales:** 40

---

## Modelo de autoridad

Este DEVLOG separa explícitamente dos roles que **no son equivalentes**:

| Columna | Pregunta que responde | Quién |
|---------|----------------------|-------|
| **Decisión** | ¿Quién definió qué construir, cuándo y por qué? | 🏛️ Arquitecto — siempre |
| **Código** | ¿Quién escribió e hizo commit del código? | 🤖 AI Dev (o 🏛️ Architect directamente) |

> El hecho de que `aunexus-lab` aparezca como autor en git **no significa**
> que tomó la decisión. Significa que fue el implementador. La dirección,
> los criterios de aceptación y la aprobación final siempre pertenecen al Arquitecto.

---

## Leyenda

| Símbolo | Rol | Descripción |
|---------|-----|-------------|
| 🏛️ **Architect** | Decisión + (a veces) Código | Define, dirige y aprueba todo |
| 🤖 **AI Dev** | Código únicamente | Implementa bajo dirección del Arquitecto |
| 🔧 **System/CI** | N/A | Scaffolding y automatizaciones |

---

## Resumen

| Métrica | Valor |
|---------|-------|
| Commits totales | 40 |
| Decisiones del Arquitecto | 40 |
| Implementados por AI Dev | 40 |
| Sistema/CI | 0 |

**Desglose de implementadores:**

| Commits | Implementador (git author) | Decisión |
|---------|--------------------------|----------|
| 28 | 👤 `au.nexus` (au.nexus) | 🏛️ Architect |
| 10 | 🏛️ `saezinty` (Architect) | 🏛️ Architect |
| 2 | 🤖 `aunexus-lab` (AI Dev) | 🏛️ Architect |

---

## Historial de commits

Cada fila muestra: **qué** se hizo, **quién tomó la decisión** (siempre el Arquitecto)
y **quién escribió el código** (AI Dev o el Arquitecto directamente).


### 2026-05-05

| Hash | Decisión | Código | Tipo | Descripción |
|------|----------|--------|------|-------------|
| `9fff47c` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: implement Academic Lab UI components and descriptive data structures for both Spanish and English pages |
| `4fe9819` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add Academic Lab link to navigation and footer, and integrate product card into nexus-suite |
| `6dafa15` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add Spanish Academic Lab page and process documentation images |
| `b4521b8` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add Academic Lab landing page and supporting documentation |

### 2026-04-30

| Hash | Decisión | Código | Tipo | Descripción |
|------|----------|--------|------|-------------|
| `01f90be` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: implement Privacy Policy and Terms of Service pages with supporting prose styling |

### 2026-04-14

| Hash | Decisión | Código | Tipo | Descripción |
|------|----------|--------|------|-------------|
| `69a44b4` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add Course Showcase, Nexus Pathways, and Request Management cards to nexus-suite.html |

### 2026-04-07

| Hash | Decisión | Código | Tipo | Descripción |
|------|----------|--------|------|-------------|
| `0c397d4` | 🏛️ Architect | 👤 au.nexus | `refactor` | refactor: update resume pillar styles and remove institutional advantage section |
| `ecf1703` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add Campus Resume infographic section and update info panel styling |
| `901df2f` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add Campus Resume Builder plugin card and orange icon styling |
| `1a6dc72` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: rename Plugins navigation link to Nexus Suite in App component |
| `4a94272` | 🏛️ Architect | 👤 au.nexus | `refactor` | refactor: update navigation link from plugins.html to nexus-suite.html |
| `f42c47e` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add leadership section and infographic components to plugins page |
| `6d805ba` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: replace emoji icons with Lucide vector icons across the plugins page |
| `80c9b75` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add plugins navigation link and create plugins landing page |

### 2026-03-21

| Hash | Decisión | Código | Tipo | Descripción |
|------|----------|--------|------|-------------|
| `8e7d241` | 🏛️ Architect | 🏛️ Architect (directo) | `fix` | fix: update sitemap.xml with all section anchors for better crawl depth |
| `60c849f` | 🏛️ Architect | 🏛️ Architect (directo) | `—` | ci: retry deployment |
| `d67e814` | 🏛️ Architect | 🏛️ Architect (directo) | `feat` | feat: add hidden semantic section + inline HowTo JSON-LD after Build Process for AI crawlers |
| `a75cbf2` | 🏛️ Architect | 🏛️ Architect (directo) | `fix` | fix: hide SEO fallback with visually-hidden CSS to prevent flash of unstyled text |
| `be54077` | 🏛️ Architect | 🏛️ Architect (directo) | `feat` | feat: full AI indexability — semantic HTML fallback, robots.txt, sitemap.xml, OG/Twitter meta, enhanced JSON-LD with DefinedTermSet and teaches |
| `7ac74d6` | 🏛️ Architect | 🏛️ Architect (directo) | `fix` | fix: move Google verification file to public/ so Vite includes it in build output |
| `18de4cf` | 🏛️ Architect | 🏛️ Architect (directo) | `chore` | chore: Add Google site verification file for Google Search Console verification. |
| `c52b08e` | 🏛️ Architect | 🏛️ Architect (directo) | `fix` | fix: add Course and HowTo types to static JSON-LD for Google Rich Results eligibility |
| `784d88a` | 🏛️ Architect | 🏛️ Architect (directo) | `refactor` | refactor: Split JSON-LD implementation into static definitions in `index.html` and dynamic generation from a new content registry. |
| `74834cc` | 🏛️ Architect | 🏛️ Architect (directo) | `feat` | feat: Add Method page with new content sections and PRD documentation. |

### 2026-03-20

| Hash | Decisión | Código | Tipo | Descripción |
|------|----------|--------|------|-------------|
| `6ce3c47` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: add JSON-LD structured data for AI indexing and SEO |
| `3575c65` | 🏛️ Architect | 👤 au.nexus | `fix` | fix: add CNAME for nexus.atlantisuniversity.edu |
| `15e9a65` | 🏛️ Architect | 👤 au.nexus | `fix` | fix: custom domain deployment — set base to /, add 404.html SPA redirect |
| `571db17` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: Implement client-side routing with `react-router-dom` to introduce a new framework diagram page and refactor the landing page. |

### 2026-01-08

| Hash | Decisión | Código | Tipo | Descripción |
|------|----------|--------|------|-------------|
| `2d47bb6` | 🏛️ Architect | 🤖 AI Dev | `—` | Create student_instructions.md |
| `53a45cb` | 🏛️ Architect | 👤 au.nexus | `—` | Feat: Add Projects section and remove legacy modules |

### 2026-01-07

| Hash | Decisión | Código | Tipo | Descripción |
|------|----------|--------|------|-------------|
| `2789364` | 🏛️ Architect | 👤 au.nexus | `—` | Fix: Domains layout zigzag and ordered list styling |
| `f551cf0` | 🏛️ Architect | 👤 au.nexus | `—` | Chore: Update favicon and metadata |
| `1219238` | 🏛️ Architect | 👤 au.nexus | `—` | Feat: Complete UI overhaul - 3D Images, Grid Layouts, and Academic Typography |
| `0a66fbe` | 🏛️ Architect | 👤 au.nexus | `—` | Design: Separate Hero text blocks while keeping tight leading |
| `c6358b6` | 🏛️ Architect | 👤 au.nexus | `—` | Fix: Force hero typography via Markdown components prop |
| `f1b785f` | 🏛️ Architect | 👤 au.nexus | `—` | Design: Update Hero typography to match reference (Huge/Bold/Tight) |
| `49e2160` | 🏛️ Architect | 👤 au.nexus | `—` | Fix: Enable raw HTML in Markdown (hero br tags) |
| `72f7d5b` | 🏛️ Architect | 👤 au.nexus | `—` | Refactor content to use Markdown files |
| `6eb0bb1` | 🏛️ Architect | 👤 au.nexus | `feat` | feat: Initial project setup for the Atlantis Nexus academic capability framework website. |
| `7d240cf` | 🏛️ Architect | 🤖 AI Dev | `—` | Initial commit |

---

*Generado por `scripts/update-devlog.sh` — 2026-05-06T17:56:29Z*
