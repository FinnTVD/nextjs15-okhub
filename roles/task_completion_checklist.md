# Task Completion Checklist

## Before Starting Development
- [ ] Run `npm install` `npm install --legacy-peer-deps` or  to install dependencies
- [ ] Check if development server runs with `npm run dev`
- [ ] Verify TypeScript compilation with `npm run build`

## During Development
- [ ] Follow TypeScript strict mode guidelines
- [ ] Use proper import order (external → internal)
- [ ] Write meaningful variable/function names
- [ ] Add English comments for complex logic
- [ ] Use path aliases (@/*) for clean imports
- [ ] Follow component organization structure

## Before Committing
- [ ] Run `npm run lint:fix` to fix ESLint issues
- [ ] Run `npm run format` to format code
- [ ] Run `npm run build` to ensure build passes
- [ ] Test functionality in development mode
- [ ] Remove any console.log statements (unless specifically requested)

## Code Quality Checks
- [ ] No TypeScript errors
- [ ] ESLint passes without warnings
- [ ] Prettier formatting applied
- [ ] Components follow naming conventions
- [ ] Proper error handling implemented
- [ ] Responsive design considerations

## Performance Considerations
- [ ] Images optimized (WebP/AVIF formats)
- [ ] Bundle size reasonable (use ANALYZE=true npm run build)
- [ ] No unnecessary re-renders
- [ ] Proper use of React hooks
- [ ] Efficient data fetching patterns

## Security Checklist
- [ ] No sensitive data in client-side code
- [ ] Proper authentication handling
- [ ] Input validation with Zod schemas
- [ ] Security headers configured
- [ ] No console.log in production builds