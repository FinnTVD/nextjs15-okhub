# Code Style and Conventions

## TypeScript Configuration
- Strict mode enabled with additional safety checks
- Path mapping configured for clean imports (@/* aliases)
- Target: ES2022 with modern module resolution

## ESLint Rules
- **Quotes**: Single quotes preferred
- **Semicolons**: Disabled (no semicolons)
- **Indentation**: 2 spaces
- **Max line length**: 100 characters
- **Import order**: Alphabetical with grouping
- **Console**: Only warn/error allowed in production

## Naming Conventions
- **Files**: kebab-case for components, camelCase for utilities
- **Components**: PascalCase
- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase

## Code Organization
- Components organized by feature in `/src/components`
- UI components in `/src/components/ui` (generated, no linting)
- Shared components in `/src/components/shared`
- Custom hooks in `/src/hooks`
- Utilities in `/src/utils`
- Constants in `/src/constants`
- Types in `/src/types`
- Schemas in `/src/schemas`

## Import Patterns
```typescript
// External libraries first
import React from 'react'
import { NextPage } from 'next'

// Internal imports with @ aliases
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

## Comments
- All comments must be in English
- Use meaningful variable/function names to avoid excessive comments
- Document complex logic and business rules