# Student Setup Guide

**Microsoft Account → GitHub → VS Code → Copilot → Project Delivery**

This guide explains how to configure a **professional development environment** using your **institutional Microsoft account** to complete course projects hosted on GitHub.

The setup supports:

* Local development **or** cloud-based development
* AI-assisted coding with **Copilot**
* Industry-standard workflows (branches, pull requests, reproducibility)

---

## 0. Prerequisites Checklist

Before you begin, make sure you have:

* ✅ Institutional Microsoft 365 email (e.g., `@atlantisuniversity.edu`)
* ✅ A personal **GitHub account**
* ✅ **Visual Studio Code** installed
* ✅ Access to the course repository (invitation accepted)

---

## 1. Create or Prepare Your GitHub Account

1. Go to GitHub and **create an account** using your institutional email
   (or add it as a verified secondary email).
2. Verify your email address.
3. Accept the **repository or organization invitation** (check email or GitHub notifications).

📘 **Official guide:**

* GitHub Account Setup
  [https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github)

**Best practice:**
Use **one GitHub account only** for coursework to avoid authentication issues in VS Code.

---

## 2. Enable GitHub Copilot (Free for Students)

Students are eligible for **Copilot Pro at no cost** after verification.

### Step A — Apply for GitHub Education

1. Visit: [https://education.github.com/pack](https://education.github.com/pack)
2. Apply using your institutional email.
3. Verification typically takes **a few hours to a few days**.

📘 **Guide:**

* GitHub Student Developer Pack
  [https://docs.github.com/en/education/about-github-education/github-education-for-students](https://docs.github.com/en/education/about-github-education/github-education-for-students)

### Step B — Enable Copilot

Once approved:

* Go to GitHub → Settings → Copilot
* Enable Copilot for your account

📺 **Short intro video:**

* “GitHub Copilot in VS Code”
  [https://www.youtube.com/watch?v=Fi3AJZZregI](https://www.youtube.com/watch?v=Fi3AJZZregI)

---

## 3. Install and Authenticate Visual Studio Code

1. Download **Visual Studio Code**
   [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Open VS Code.
3. Click the **Accounts** icon (bottom-left).
4. Sign in with **GitHub**.

📘 **Guide:**

* Signing in to GitHub from VS Code
  [https://code.visualstudio.com/docs/sourcecontrol/github](https://code.visualstudio.com/docs/sourcecontrol/github)

---

## 4. Install GitHub Copilot in VS Code

In VS Code → Extensions, install:

* **GitHub Copilot**
* **GitHub Copilot Chat** (recommended)

After installation:

* You’ll be prompted to sign in with GitHub
* Copilot activates automatically in supported files

📘 **Official docs:**

* Copilot in VS Code
  [https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-your-ide](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-your-ide)

---

## 5. Create Your Project Workspace

You have **two supported workflows**.

---

### Option A — Local Development (Recommended)

1. Open the project repository on GitHub.
2. Click **Code → HTTPS → Copy URL**.
3. In VS Code:

   * Open Command Palette → `Git: Clone`
   * Paste the URL
   * Choose a local folder

VS Code will automatically authenticate with GitHub.

📘 **Guide:**

* Cloning repositories in VS Code
  [https://code.visualstudio.com/docs/sourcecontrol/overview](https://code.visualstudio.com/docs/sourcecontrol/overview)

---

### Option B — Cloud Development (Codespaces)

Use this if:

* You cannot install dependencies locally
* The project includes a `.devcontainer/` configuration

Steps:

1. In GitHub → **Code → Codespaces → Create codespace**
2. (Optional) Open the Codespace in your local VS Code

📘 **Guides:**

* Introduction to Codespaces
  [https://docs.github.com/en/codespaces/overview](https://docs.github.com/en/codespaces/overview)
* Using Codespaces in VS Code
  [https://code.visualstudio.com/docs/remote/codespaces](https://code.visualstudio.com/docs/remote/codespaces)

---

## 6. Configure the Runtime Environment

Follow the project README. Most academic projects fall into one of these patterns:

---

### Python Projects

```bash
python -m venv .venv
```

Activate:

* Windows:

```powershell
.\.venv\Scripts\Activate.ps1
```

* macOS/Linux:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

📘 Python environments:

* [https://code.visualstudio.com/docs/python/environments](https://code.visualstudio.com/docs/python/environments)

---

### Node.js Projects

```bash
npm install
npm run dev
```

📘 Node.js in VS Code:

* [https://code.visualstudio.com/docs/nodejs/nodejs-tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)

---

### Dev Containers / Docker

If instructed:

* Command Palette → **Dev Containers: Reopen in Container**

📘 Dev Containers:

* [https://containers.dev/](https://containers.dev/)
* [https://code.visualstudio.com/docs/devcontainers/containers](https://code.visualstudio.com/docs/devcontainers/containers)

---

## 7. Standard Academic Git Workflow (Required)

1. Create a working branch:

```bash
git checkout -b feature/your-name
```

2. Commit your work:

```bash
git add .
git commit -m "Describe your changes"
```

3. Push your branch:

```bash
git push -u origin feature/your-name
```

4. Open a **Pull Request** in GitHub.

📘 GitHub Flow:

* [https://docs.github.com/en/get-started/quickstart/github-flow](https://docs.github.com/en/get-started/quickstart/github-flow)

---

## 8. How to Use Copilot Responsibly (Academic Integrity)

Recommended usage:

* “Explain what this function does.”
* “Suggest improvements without changing behavior.”
* “Generate tests for this module.”

Always:

* Review Copilot output
* Run the code
* Understand what you submit

📘 Copilot & academic use:

* [https://docs.github.com/en/copilot/using-github-copilot/responsible-use-of-github-copilot](https://docs.github.com/en/copilot/using-github-copilot/responsible-use-of-github-copilot)

---

## 9. Common Issues & Fixes

| Issue                  | Solution                            |
| ---------------------- | ----------------------------------- |
| Copilot not activating | Update VS Code, re-login to GitHub  |
| Push denied            | Confirm correct GitHub account      |
| Repo access denied     | Accept invitation or request access |
| Environment fails      | Use Codespaces / Dev Container      |

---

## What This Setup Teaches (Intentionally)

This environment is part of your learning outcomes:

* Reproducible systems
* Professional collaboration
* AI-assisted (not AI-dependent) development
* Portfolio-ready workflows


