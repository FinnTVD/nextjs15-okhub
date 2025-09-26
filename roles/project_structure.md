# Project Structure

## Root Directory
```
nextjs15-okhub/
├── src/                    # Source code
├── public/                 # Static assets
├── messages/               # i18n translations
├── package.json            # Dependencies and scripts
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
└── components.json         # shadcn/ui configuration
```

## Source Structure (`/src`)
```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── api/               # API routes
│   └── (store)/           # Route groups
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── shared/            # Shared components
│   ├── icons/             # Custom icons
│   └── image/             # Image components
├── layouts/               # Layout components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── utils/                 # Helper functions
├── constants/             # App constants
├── types/                 # TypeScript type definitions
├── schemas/               # Zod validation schemas
├── fetches/               # API fetch functions
├── actions/               # Server actions
├── provider/              # Context providers
├── i18n/                  # Internationalization
├── animations/            # Animation components
├── styles/                # Global styles
└── jsons/                 # JSON data files
```

## Key Configuration Files
- `next.config.ts`: Next.js configuration with Turbopack, image optimization, security headers
- `tailwind.config.ts`: Custom breakpoints and utility classes
- `tsconfig.json`: Path mapping and strict TypeScript settings
- `eslint.config.mjs`: Comprehensive linting rules
- `src/i18n/routing.ts`: Internationalization routing configuration
- `src/auth.ts`: NextAuth.js configuration with JWT handling