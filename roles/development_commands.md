# Development Commands

## Development Commands

```bash
# Start development server với Turbopack
npm run dev

# Build production với Turbopack
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Build Analysis

```bash
# Analyze bundle size
ANALYZE=true npm run build
```

## System Commands (macOS/Darwin)

```bash
# File operations
ls -la                    # List files with details
cd /path/to/directory     # Change directory
find . -name "*.tsx"      # Find TypeScript React files
grep -r "pattern" .       # Search pattern in files

# Git operations
git status                # Check git status
git add .                 # Stage all changes
git commit -m "message"   # Commit changes
git push origin main      # Push to remote

# Process management
ps aux | grep node        # Find Node.js processes
kill -9 PID               # Kill process by PID
```

## Environment Setup

- **Node.js**: Version 20+
- **Package Manager**: npm
- **Extensions**: Code Spell Checker, ESLint
- **Editor**: VS Code recommended

## Development Workflow

1. `npm run dev` - Start development
2. Code changes with TypeScript
3. `npm run lint` - Check code quality
4. `npm run build` - Test production build
5. Commit và push changes
