# Project Structure

## App Router Structure

```
src/app/
├── [locale]/                 # Internationalized routes
│   ├── layout.tsx           # Root layout với providers
│   ├── page.tsx             # Home page
│   └── components/          # Page-specific components
├── api/                     # API routes
│   └── auth/[...next-auth]/ # NextAuth API
└── (sitemap)/               # Sitemap generation
```

## Component Architecture

```
src/components/
├── ui/                      # Base UI components (Radix UI)
├── shared/                  # Reusable shared components
├── image/                   # Image-related components
└── layouts/                 # Layout components
    ├── header/              # Header layout
    └── footer/              # Footer layout
```

## Data Layer

```
src/
├── actions/                 # Server actions
├── fetches/                 # API fetching utilities
├── hooks/                   # Custom React hooks
├── schemas/                 # Zod validation schemas
└── constants/               # App constants
    ├── ENDPOINTS.ts         # API ENDPOINTS
    └── routes.ts            # Route definitions
```

## Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS config
- `eslint.config.mjs` - ESLint configuration
- `tsconfig.json` - TypeScript configuration
- `middleware.ts` - Next.js middleware cho i18n

## Key Features

- **Internationalization**: next-intl với Vietnamese/English
- **Authentication**: NextAuth.js với JWT tokens
- **Styling**: Tailwind CSS với custom utilities
- **Animation**: GSAP + Lenis smooth scroll
- **Forms**: React Hook Form + Zod validation
- **State**: Zustand cho client state
- **Data**: SWR cho server state
