# Development Commands

## Package Manager
- Using npm (package-lock.json present)

## Development
```bash
# Start development server with Turbopack
npm run dev

# Build for production (includes linting and formatting)
npm run build

# Start production server
npm start
```

## Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without fixing
npm run format:check
```

## Build Analysis
```bash
# Analyze bundle size
ANALYZE=true npm run build
```

## Git Commands (Darwin/macOS)
```bash
# Basic git operations
git status
git add .
git commit -m "message"
git push origin main

# File operations
ls -la                    # List files
cd /path/to/directory     # Change directory
find . -name "*.tsx"      # Find TypeScript React files
grep -r "pattern" src/    # Search in source files
```

## System Utilities (macOS)
```bash
# Process management
ps aux | grep node        # Find Node processes
kill -9 PID              # Kill process by ID

# File system
open .                    # Open current directory in Finder
pwd                       # Print working directory
which node                # Find Node.js installation
```