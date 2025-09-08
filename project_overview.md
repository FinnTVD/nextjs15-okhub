# Project Overview - nextjs15-okhub

## Mục đích dự án

Dự án Next.js 15 với tên "okhub" - một ứng dụng web hiện đại hỗ trợ đa ngôn ngữ (Vietnamese/English) với các tính năng:

- Authentication với NextAuth.js
- Internationalization (i18n) với next-intl
- UI components với Radix UI và Tailwind CSS
- Animation với GSAP và Lenis
- Form handling với React Hook Form và Zod validation
- State management với Zustand
- Data fetching với SWR

## Tech Stack

- **Framework**: Next.js 15.5.2 với Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 với custom utilities
- **UI Components**: Radix UI primitives
- **Authentication**: NextAuth.js v5 (beta)
- **Internationalization**: next-intl
- **Animation**: GSAP, Lenis smooth scroll
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand
- **Data Fetching**: SWR
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Fonts**: Geist Sans, Geist Mono

## Cấu trúc thư mục chính

- `src/app/[locale]/` - App router với internationalization
- `src/components/` - Reusable UI components
- `src/actions/` - Server actions
- `src/fetches/` - API fetching utilities
- `src/hooks/` - Custom React hooks
- `src/i18n/` - Internationalization config
- `src/layouts/` - Layout components
- `src/provider/` - Context providers
- `src/schemas/` - Zod validation schemas
- `src/utils/` - Utility functions
- `src/constants/` - Constants và ENDPOINTS
