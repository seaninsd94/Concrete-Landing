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
**Type:** [To be determined - Landing Page/Website/Application]

### Purpose
[This section should be updated with the project's main purpose and goals]

### Key Features
- [Feature 1]
- [Feature 2]
- [Feature 3]

---

## Codebase Structure

```
Concrete-Landing/
├── src/                    # Source code
│   ├── components/        # Reusable components
│   ├── pages/            # Page components/routes
│   ├── styles/           # Stylesheets and styling
│   ├── utils/            # Utility functions
│   ├── assets/           # Images, fonts, static assets
│   └── lib/              # Third-party integrations
├── public/               # Public assets
├── tests/                # Test files
├── docs/                 # Documentation
├── .github/              # GitHub workflows and templates
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
├── CLAUDE.md             # This file - AI assistant guide
└── [config files]        # Various configuration files
```

**Note:** This structure is a template. Update it as the actual project structure emerges.

### Key Directories

#### `/src`
- **Purpose:** Contains all source code for the application
- **Conventions:** [To be defined based on chosen framework]

#### `/components` (if applicable)
- **Purpose:** Reusable UI components
- **Naming Convention:** PascalCase for component names (e.g., `Button.tsx`, `Navigation.jsx`)
- **Structure:** One component per file, co-located styles and tests

#### `/pages` or `/routes` (if applicable)
- **Purpose:** Top-level page components or route handlers
- **Naming Convention:** Follows routing structure

---

## Technology Stack

### Core Technologies
- **Language:** [JavaScript/TypeScript/Other]
- **Framework/Library:** [React/Vue/Next.js/Other]
- **Build Tool:** [Vite/Webpack/Other]
- **Package Manager:** [npm/yarn/pnpm]

### Development Tools
- **Linter:** [ESLint/Other]
- **Formatter:** [Prettier/Other]
- **Testing:** [Jest/Vitest/Cypress/Other]
- **Type Checking:** [TypeScript/Flow/None]

### Deployment
- **Platform:** [Vercel/Netlify/AWS/Other]
- **CI/CD:** [GitHub Actions/Other]

**Note:** Update this section once technologies are chosen.

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

1. **Node.js Version:** [Specify required version, e.g., 18.x or higher]
2. **Environment Variables:** Copy `.env.example` to `.env.local` and configure
3. **IDE Setup:** Recommended extensions for VS Code:
   - ESLint
   - Prettier
   - [Framework-specific extensions]

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

### Adding a New Page/Route

1. Create page component in appropriate directory
2. Add route configuration
3. Update navigation if needed
4. Add tests for new route
5. Update documentation

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
[Add project-specific terminology and concepts here]

### API Endpoints
[Document key API endpoints if applicable]

### Third-Party Services
[List integrated services: payment processors, analytics, etc.]

### Performance Considerations
[Document any performance-critical sections]

### Accessibility Requirements
[Document WCAG compliance level and specific requirements]

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
| 1.0.0 | 2026-01-22 | Initial creation | Claude AI |

---

*This document is a living guide. Keep it updated as the project evolves!*
