# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development Server:**
```bash
npm run dev           # Start Vite development server
```

**Build & Deployment:**
```bash
npm run build         # TypeScript compilation + Vite build
npm run preview       # Preview production build locally
```

**Code Quality:**
```bash
npm run lint          # ESLint with TypeScript support
npm run format        # Prettier formatting
npm run format:check  # Check Prettier formatting
```

## Project Architecture

### Core Structure
This is a **component forge** project built with React + TypeScript + Vite, designed to showcase generated UI components for a boxer website (Kumar Prescod).

### Key Architecture Patterns

**Generated Component System:**
- All UI components live in `src/components/generated/`
- The main component `BoxerWebsite.tsx` orchestrates the entire page
- Components are designed to be self-contained with embedded styling
- App.tsx has a dynamic component loading system with a %EXPORT_STATEMENT% marker

**Light Mode Enforcement:**
- The project is **hardcoded to light mode only**
- `src/main.tsx` contains aggressive light mode enforcement
- `src/lib/utils.ts` includes utilities to strip dark mode classes
- Never add dark mode classes or dark theme support

**Configuration Integration:**
- Uses shadcn/ui component system (components.json)
- Tailwind CSS with custom path aliases (@/* → src/*)
- Configured for "new-york" style with CSS variables

### Component Architecture

**Main Component Flow:**
```
App.tsx → BoxerWebsite.tsx → [Header, HeroSection, AboutSection, MediaGallerySection, SponsorSection, ShopSection]
```

**Component Characteristics:**
- Heavy use of Framer Motion for animations
- Lucide React icons throughout
- Embedded YouTube videos in HeroSection
- Responsive design with mobile-first approach
- Each section component is fully self-contained

### Technology Stack

**Core Technologies:**
- React 19 with TypeScript
- Vite for build system and dev server
- Tailwind CSS v4 with @tailwindcss/vite plugin
- Framer Motion for animations

**Notable Dependencies:**
- @dnd-kit/* (drag and drop - currently has deleted files)
- @react-three/fiber and @react-three/drei (3D capabilities)
- Lucide React (icons)
- Various UI libraries (recharts, react-hook-form, etc.)

### Development Patterns

**File Organization:**
- Generated components in `src/components/generated/`
- Utilities in `src/lib/utils.ts`
- Settings and types in `src/settings/`
- Hooks in `src/hooks/`

**Styling Approach:**
- Tailwind utility classes with custom color scheme (orange/red theme)
- No separate CSS modules - all styling is inline with components
- Uses cn() utility for conditional class merging

### Important Constraints

**Light Mode Only:**
- Never implement dark mode features
- Always use light theme colors and classes
- The `ensureLightMode()` and `removeDarkClasses()` utilities enforce this

**Component Generation Context:**
- This appears to be a component showcase/demo project
- The %EXPORT_STATEMENT% marker in App.tsx suggests dynamic component swapping
- Focus on self-contained, visually impressive components

**Vite Configuration:**
- Uses path aliases (@ → src/)
- Tailwind CSS integrated via Vite plugin
- Standard React plugin configuration