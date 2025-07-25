# e.l.f. Components

A clean, atomic design-based component library for e.l.f. cosmetics, built with React, TypeScript, Vite, and Storybook.

## 🎯 Project Overview

This is a component library specifically designed for e.l.f. cosmetics, following atomic design principles. All components are developed and previewed exclusively in Storybook, which is deployed to Vercel for easy access.

## 🏗️ Architecture

### Atomic Design Structure
```
src/
├── foundations/          # Design tokens, theme, and foundational elements
├── components/
│   ├── atoms/           # Basic building blocks (buttons, inputs, etc.)
│   ├── molecules/       # Simple combinations of atoms
│   └── organisms/       # Complex UI sections
```

### Technology Stack
- **React 19** + **TypeScript** - Modern component development
- **Vite** - Fast build tool and development server
- **Storybook 9** - Component documentation and preview layer
- **Custom CSS-in-JS** - Vanilla CSS styling with TypeScript
- **Lucide React** - Icon library
- **Vercel** - Deployment platform

## 🚀 Current Status

### ✅ Completed Setup
- [x] React + TypeScript + Vite project initialized
- [x] Storybook configured and deployed to Vercel
- [x] Custom styling system with CSS-in-JS
- [x] Atomic design folder structure created
- [x] First atom component (QuantitySelector) implemented
- [x] Clean component library with zero external UI dependencies
- [x] Automatic GitHub → Vercel deployment pipeline

### 🎨 Components Available

#### Atoms
- **QuantitySelector** - Interactive quantity control with increase/decrease buttons
  - Features: Disabled states, zero quantity handling, customizable styling
  - Stories: Default, Zero, HighQuantity, Disabled, DisabledAtZero

#### Molecules
- **QuantityPricing** - Quantity selector with pricing display
  - Features: Unit price, discounts, total calculations
  - Stories: SimplePricing, DiscountedPricing, HighQuantity, ZeroQuantity, Disabled

## 📁 Project Structure

```
elfComponents/
├── .storybook/                    # Storybook configuration
│   ├── main.ts                   # Storybook main config (clean, no auto-docs)
│   └── preview.tsx               # Storybook preview configuration
├── src/
│   ├── foundations/              # Design tokens and theme
│   │   └── theme.ts              # Global theme and styling configuration
│   ├── components/
│   │   ├── atoms/                # Atomic components
│   │   │   ├── QuantitySelector.tsx
│   │   │   ├── QuantitySelector.stories.tsx
│   │   │   └── index.ts
│   │   ├── molecules/            # Molecular components
│   │   │   ├── QuantityPricing.tsx
│   │   │   ├── QuantityPricing.stories.tsx
│   │   │   └── index.ts
│   │   └── organisms/            # Organism components (empty)
│   ├── App.tsx                   # Main application (minimal)
│   └── main.tsx                  # Application entry point
├── vercel.json                   # Vercel deployment configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start Storybook locally (for development)
npm run storybook

# Start main app locally
npm run dev

# Build for production
npm run build
```

### Adding New Components

1. **Create component** in appropriate atomic design folder:
   ```bash
   # Example: Adding a new atom
   src/components/atoms/NewComponent.tsx
   ```

2. **Create Storybook story**:
   ```bash
   src/components/atoms/NewComponent.stories.tsx
   ```

3. **Export from index**:
   ```bash
   # Add to src/components/atoms/index.ts
   export { default as NewComponent } from './NewComponent'
   ```

4. **Commit and push** - Automatic deployment to Vercel

## 🌐 Deployment

### Storybook Deployment
- **URL**: https://vercel.com/rmarti55s-projects/elf-components/deployments
- **Auto-deploy**: Every push to `main` branch triggers deployment
- **Clean**: Shows only our custom-built components with zero external UI dependencies

### Build Configuration
- **Framework**: Storybook
- **Build Command**: `npm run build-storybook --no-manager-cache`
- **Output Directory**: `storybook-static`

## 🎨 Design System

### Theme Configuration
- **Colors**: e.l.f. brand colors + gray scale
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system
- **Breakpoints**: Mobile-first responsive design

### Component Guidelines
- Use CSS-in-JS with TypeScript for styling
- Extend with e.l.f. specific styling
- Include comprehensive Storybook stories
- Follow atomic design principles
- Export through index files for clean imports

### Atomic Storybook Coverage
- **Every atom must have its own Storybook story.** Never skip atomic-level documentation. This ensures visibility, testability, and proper design system hygiene.

### Atomic Composition Rule
- **Always compose new organisms and molecules from existing atoms and molecules in the component library unless a clear gap is identified.** Do not create new primitives unless necessary.

## 📝 Recent Changes

### Latest Updates
- ✅ Clean, minimalist documentation in Storybook
- ✅ Implemented clean component-only Storybook deployment
- ✅ Added QuantitySelector as first atom component
- ✅ Configured automatic GitHub → Vercel deployment
- ✅ Set up atomic design folder structure

## 🔧 Configuration Files

### Key Configuration
- **`.storybook/main.ts`** - Clean Storybook config (no auto-docs)
- **`vercel.json`** - Vercel deployment settings
- **`src/foundations/theme.ts`** - Global theme variables and styling configuration

## 🎯 Next Steps

1. **Add more e.l.f. components** from screenshots and existing code
2. **Expand atomic design system** with molecules and organisms
3. **Enhance theme** with specific e.l.f. brand colors
4. **Add component documentation** and usage guidelines

## ⚠️ CRITICAL DEVELOPMENT RULES

### Screenshot Analysis Protocol
**NEVER assume or interpret - only implement what you see:**
1. **Look at the actual visual elements** in screenshots, not what you expect to see
2. **Count and identify each element** exactly as it appears
3. **Follow the layout order precisely** - left to right, top to bottom
4. **Don't add redundant elements** - if a price appears once, don't show it multiple times
5. **Question your assumptions** - if something seems "wrong," the screenshot is right, you're wrong

### Common Mistakes to Avoid
- **Redundant pricing displays** - showing unit price in multiple places
- **Incorrect math assumptions** - calculating totals when unit prices are needed
- **Layout misinterpretation** - reading "x $10.00" when it's just "x" + "$10.00"
- **Overcomplicating simple layouts** - adding elements that don't exist in the reference

**Remember: The screenshot is the source of truth. Your interpretation is often wrong.**

---

**Note**: This is a clean, focused component library. All components live in Storybook as the primary interface. The main app serves as a minimal example and is not the primary development environment.
