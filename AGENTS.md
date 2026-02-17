# Agent Instructions for Astroland

## Package Manager
- **Use pnpm** for all package installations and scripts
- Do NOT use npm or yarn

## Styling 
- **Always use tailwindcss for styling** - apply Tailwind classes to HTML elements, not CSS style blocks
- Prefer Tailwind utilities over custom CSS (e.g., `transition-all duration-300` instead of `<style>`)
- Use `dark:` variant for dark mode styles (e.g., `dark:opacity-100`)
- Only use `<style>` blocks when Tailwind utilities cannot achieve the desired behavior

## TypeScript & Types
- **Always ensure TypeScript is installed** as a dev dependency
- Run `pnpm astro sync` after major config changes to regenerate types
- Types are generated in `.astro/types.d.ts`

## Project Type
- Astro static site builder with Tailwind CSS
- Personal blog with MDX support for interactive components
- Geist font family (locally hosted in `/public/geist-font/`)
- Bearnie UI components
