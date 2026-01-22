# CLAUDE.md - AI Assistant Guide for Concrete-Landing

> Last Updated: 2026-01-22
>
> This document serves as a comprehensive guide for AI assistants (like Claude) working on the Concrete-Landing codebase. It provides essential context about the project structure, development workflows, and conventions to follow.

## Table of Contents

- [Project Overview](#project-overview)
- [Codebase Structure](#codebase-structure)
- [Technology Stack](#technology-stack)
- [Development Workflow](#development-workflow)
- [Coding Conventions](#coding-conventions)
- [Git Workflow](#git-workflow)
- [Testing Strategy](#testing-strategy)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)
- [AI Assistant Guidelines](#ai-assistant-guidelines)

---

## Project Overview

**Project Name:** Concrete-Landing
**Repository:** seaninsd94/Concrete-Landing
**Type:** Landing Page / Marketing Website

### Purpose
A modern, responsive landing page for a concrete services company. The site showcases services, builds trust through testimonials, and provides an easy way for potential customers to get in touch.

### Key Features
- Hero section with animated statistics and smooth navigation
- Interactive features showcase with hover effects
- Customer testimonials with ratings and social proof
- Functional contact form with service selection
- Fully responsive design for all devices
- SEO optimized with proper metadata

---

## Codebase Structure

```
Concrete-Landing/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout with metadata & fonts
│   │   ├── page.tsx             # Main landing page (imports all components)
│   │   └── globals.css          # Global styles & Tailwind directives
│   └── components/               # React components
│       ├── Hero.tsx             # Hero section with nav, CTA, stats
│       ├── Features.tsx         # Features grid & services list
│       ├── Testimonials.tsx     # Customer testimonials & trust badges
│       ├── Contact.tsx          # Contact form & info
│       └── Footer.tsx           # Footer with links & social media
├── public/                       # Static assets (future: images, favicon)
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
├── .eslintrc.json              # ESLint configuration
├── README.md                    # Project documentation
└── CLAUDE.md                    # This file - AI assistant guide
```

### Key Directories

#### `/src/app`
- **Purpose:** Next.js App Router directory containing routes and layouts
- **Key Files:**
  - `layout.tsx`: Root layout defining HTML structure, metadata, and fonts
  - `page.tsx`: Home page that composes all landing page sections
  - `globals.css`: Global styles including Tailwind directives

#### `/src/components`
- **Purpose:** Reusable React components for the landing page
- **Naming Convention:** PascalCase (e.g., `Hero.tsx`, `Features.tsx`)
- **Components:**
  - `Hero.tsx`: Hero section with navigation, headline, CTA buttons, and stats
  - `Features.tsx`: Services showcase with icons and feature cards
  - `Testimonials.tsx`: Customer reviews with ratings and trust metrics
  - `Contact.tsx`: Contact form with validation and business info
  - `Footer.tsx`: Footer with navigation, social links, and legal info
- **Patterns:** Each component is self-contained with 'use client' directive when needed

#### `/public`
- **Purpose:** Static assets served directly (images, fonts, favicon)
- **Access:** Files accessible at root URL path (e.g., `/public/logo.png` → `/logo.png`)

---

## Technology Stack

### Core Technologies
- **Language:** TypeScript 5.3
- **Framework:** Next.js 14 (React 18) with App Router
- **Styling:** Tailwind CSS 3.4
- **Icons:** React Icons 5.0
- **Package Manager:** npm (compatible with yarn/pnpm)

### Development Tools
- **Linter:** ESLint (Next.js config)
- **Type Checking:** TypeScript strict mode
- **Testing:** None configured yet (recommended: Jest + React Testing Library)

### Deployment
- **Recommended Platform:** Vercel (optimized for Next.js)
- **Alternatives:** Netlify, AWS Amplify, Azure Static Web Apps
- **Build Command:** `npm run build`
- **Output:** `.next` directory (Node.js server + static assets)

---

## Development Workflow

### Getting Started

```bash
# Clone the repository
git clone [repository-url]
cd Concrete-Landing

# Install dependencies
npm install  # or yarn install, or pnpm install

# Start development server
npm run dev  # or yarn dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

1. **Node.js Version:** 18.0 or higher (specified in package.json engines)
2. **Environment Variables:** Create `.env.local` for local environment variables (not required for basic setup)
3. **IDE Setup:** Recommended extensions for VS Code:
   - ESLint (dbaeumer.vscode-eslint)
   - Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
   - TypeScript and JavaScript (built-in)
   - ES7+ React/Redux/React-Native snippets

---

## Coding Conventions

### General Principles

1. **Clarity over Cleverness:** Write clear, readable code
2. **DRY (Don't Repeat Yourself):** Extract reusable logic
3. **YAGNI (You Aren't Gonna Need It):** Don't over-engineer
4. **Keep It Simple:** Avoid unnecessary complexity

### Code Style

#### Naming Conventions

- **Variables/Functions:** camelCase (`getUserData`, `isActive`)
- **Components:** PascalCase (`UserProfile`, `NavigationBar`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_RETRIES`)
- **Files:** Match the main export (e.g., `UserProfile.tsx` for `UserProfile` component)
- **CSS Classes:** kebab-case or BEM notation

#### File Organization

```javascript
// 1. Imports - external dependencies first
import React from 'react';
import { useState } from 'react';

// 2. Imports - internal dependencies
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';

// 3. Type definitions (if TypeScript)
interface Props {
  title: string;
}

// 4. Component definition
export function MyComponent({ title }: Props) {
  // Component logic
}

// 5. Helper functions (if small and component-specific)
function helperFunction() {
  // ...
}
```

#### Comments

- Use comments for **why**, not **what**
- Document complex algorithms or business logic
- Keep comments up-to-date with code changes
- Use JSDoc for public APIs and component props

```javascript
// Good: Explains why
// Using setTimeout to debounce to prevent excessive API calls
setTimeout(handleSearch, 300);

// Bad: Explains what (obvious from code)
// Set timeout to 300ms
setTimeout(handleSearch, 300);
```

---

## Git Workflow

### Branch Strategy

- **Main Branch:** `main` or `master` - production-ready code
- **Feature Branches:** `feature/description` or `claude/session-id`
- **Bug Fix Branches:** `fix/bug-description`
- **Hot Fix Branches:** `hotfix/critical-issue`

### Commit Message Format

Follow the Conventional Commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(auth): add user login functionality

fix(navigation): resolve mobile menu overflow issue

docs(readme): update installation instructions

refactor(api): simplify error handling logic
```

### Commit Best Practices

1. **Atomic Commits:** Each commit should represent one logical change
2. **Descriptive Messages:** Explain what and why, not how
3. **Present Tense:** Use "add feature" not "added feature"
4. **Reference Issues:** Include issue numbers when applicable

### Pull Request Process

1. Create feature branch from main
2. Make changes and commit
3. Push to remote: `git push -u origin branch-name`
4. Create PR with clear description
5. Address review feedback
6. Merge after approval

---

## Testing Strategy

### Test Structure

```
__tests__/
├── unit/          # Unit tests for individual functions/components
├── integration/   # Integration tests
└── e2e/          # End-to-end tests
```

### Testing Conventions

1. **File Naming:** `ComponentName.test.tsx` or `functionName.test.ts`
2. **Test Organization:** Use `describe` blocks to group related tests
3. **Test Names:** Should clearly describe what is being tested

```javascript
describe('UserProfile', () => {
  describe('when user is authenticated', () => {
    it('displays user name', () => {
      // Test implementation
    });

    it('shows logout button', () => {
      // Test implementation
    });
  });

  describe('when user is not authenticated', () => {
    it('redirects to login page', () => {
      // Test implementation
    });
  });
});
```

### When to Write Tests

- **New Features:** Write tests alongside implementation
- **Bug Fixes:** Add regression test before fixing
- **Refactoring:** Ensure existing tests pass
- **Critical Paths:** Prioritize testing user-facing features

---

## Common Tasks

### Adding a New Feature

1. Create feature branch: `git checkout -b feature/feature-name`
2. Implement feature following coding conventions
3. Add tests for new functionality
4. Update documentation if needed
5. Commit changes with descriptive message
6. Push and create pull request

### Fixing a Bug

1. Create fix branch: `git checkout -b fix/bug-description`
2. Write a failing test that reproduces the bug
3. Fix the bug
4. Verify test passes
5. Commit and push

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update a specific package
npm update package-name

# Update all packages (with caution)
npm update

# Check for security vulnerabilities
npm audit
npm audit fix
```

### Adding a New Page/Route (Next.js App Router)

1. Create new directory in `src/app/` (e.g., `src/app/about/`)
2. Add `page.tsx` in the new directory
3. Optionally add `layout.tsx` for route-specific layout
4. Update navigation in `Hero.tsx` or `Footer.tsx`
5. Update sitemap and metadata as needed

Example:
```bash
mkdir src/app/about
# Create src/app/about/page.tsx with your content
# Page will be accessible at /about
```

### Adding a New Component

1. Create `.tsx` file in `src/components/` with PascalCase name
2. Add 'use client' directive if component uses hooks or interactivity
3. Export as default function
4. Import and use in `src/app/page.tsx` or other components
5. Follow existing patterns for styling (Tailwind classes)

---

## Troubleshooting

### Common Issues

#### Build Fails

1. Clear cache: `npm run clean` or `rm -rf node_modules .next .cache`
2. Reinstall dependencies: `npm install`
3. Check Node.js version matches requirements

#### Tests Failing

1. Run tests in watch mode: `npm test -- --watch`
2. Check for environment variable issues
3. Clear test cache if applicable

#### Development Server Issues

1. Check port conflicts (default ports: 3000, 5173, 8080)
2. Restart dev server
3. Check for syntax errors in recently modified files

---

## AI Assistant Guidelines

### Before Making Changes

1. **Read Before Editing:** Always read files before making changes
2. **Understand Context:** Review related files to understand the full context
3. **Check Existing Patterns:** Follow established patterns in the codebase
4. **Ask When Uncertain:** Use AskUserQuestion tool for clarification

### Making Changes

1. **Minimal Changes:** Only modify what's necessary for the task
2. **Consistency:** Match existing code style and patterns
3. **Test Changes:** Verify changes work as expected
4. **Document Decisions:** Explain non-obvious choices in comments or commit messages

### Code Quality Checklist

Before committing, verify:

- [ ] Code follows project conventions
- [ ] No unnecessary changes or over-engineering
- [ ] Comments added for complex logic
- [ ] Tests added or updated
- [ ] No console.logs or debug code left behind
- [ ] No security vulnerabilities introduced
- [ ] Documentation updated if needed

### Security Considerations

Always check for:

- **XSS (Cross-Site Scripting):** Sanitize user input, avoid `dangerouslySetInnerHTML`
- **SQL Injection:** Use parameterized queries, never concatenate SQL
- **Command Injection:** Validate and sanitize command arguments
- **Authentication/Authorization:** Verify permissions before sensitive operations
- **Sensitive Data:** Never commit API keys, passwords, or tokens
- **Dependencies:** Keep dependencies updated, check for known vulnerabilities

### What to Avoid

- ❌ Creating files when editing existing ones would work
- ❌ Adding unnecessary abstractions or "future-proofing"
- ❌ Over-documenting obvious code
- ❌ Adding features not requested
- ❌ Breaking changes without discussion
- ❌ Committing commented-out code
- ❌ Using deprecated APIs or patterns

### Communication

- Be concise and clear in commit messages
- Explain tradeoffs in pull request descriptions
- Reference issue numbers when applicable
- Use code comments for complex logic
- Output explanations directly, not via echo or comments

---

## Project-Specific Notes

### Domain Concepts
- **Landing Page Sections**: Hero, Features, Testimonials, Contact, Footer
- **CTA (Call To Action)**: Buttons that drive user engagement ("Get Started", "Contact Us")
- **Smooth Scrolling**: Navigation uses `scrollIntoView` for seamless section transitions
- **Form Submission**: Currently simulated with timeout; needs backend integration

### Component Patterns
- **'use client' Directive**: Used in components with interactivity (onClick, useState, forms)
- **Responsive Design**: Mobile-first approach with Tailwind responsive classes (sm:, md:, lg:)
- **Color System**: Primary colors defined in tailwind.config.ts (blue-based palette)
- **Icons**: Imported from `react-icons/fa` (Font Awesome)

### Integration Points (Future)
- Contact form needs backend API endpoint for form submissions
- Email service integration (SendGrid, Mailgun, or similar)
- Analytics (Google Analytics, Plausible, etc.)
- CMS integration if content needs to be editable (Sanity, Contentful)

### Performance Considerations
- Next.js automatically optimizes images when using `next/image`
- App Router provides automatic code splitting
- Tailwind CSS purges unused styles in production
- Consider lazy loading for below-the-fold content in future

### Accessibility
- Semantic HTML used throughout (section, nav, button, form)
- aria-labels added for icon-only buttons
- Keyboard navigation supported
- Color contrast meets WCAG AA standards
- Further improvements: Add focus indicators, ARIA landmarks, screen reader testing

---

## Additional Resources

- **Repository:** https://github.com/seaninsd94/Concrete-Landing
- **Documentation:** [Link to docs]
- **Design System:** [Link if applicable]
- **API Docs:** [Link if applicable]
- **Deployment Dashboard:** [Link if applicable]

---

## Maintenance

This document should be updated:

- When project structure changes significantly
- When new conventions are adopted
- When new tools or technologies are added
- After major architectural decisions
- Periodically (at least quarterly) to ensure accuracy

**Last Review Date:** 2026-01-22
**Next Review Due:** 2026-04-22

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2026-01-22 | Initial creation with template structure | Claude AI |
| 1.1.0 | 2026-01-22 | Updated with actual Next.js project details | Claude AI |

---

*This document is a living guide. Keep it updated as the project evolves!*
