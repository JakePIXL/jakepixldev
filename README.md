# JakePIXL.dev

My personal website and blog built with Astro, featuring a minimal burtalism inspired design focused on content and readability. Visit it at [jakepixl.dev](https://jakepixl.dev).

## What's Inside

- Personal blog posts about cybersecurity, Rust development, and technology
- Project showcase highlighting my work like ChunkVault
- Responsive design with a custom brutalist aesthetic
- RSS feed for blog posts
- Open Graph image generation for social sharing

## Local Development

First, install dependencies using pnpm:

```bash
pnpm install
```

Then start the development server:

```bash
pnpm dev
```

The site will be available at http://localhost:4321

## Technology Stack

- [Astro](https://astro.build) - Static site generator
- [TailwindCSS](https://tailwindcss.com) - Styling
- [Prettier](https://prettier.io) - Code formatting
- Custom icons

## Fonts

This project uses Berkeley Mono as its primary font, which requires a personal license. I have purchased a personal license for this font, but if you fork this project you'll need to either:

1. Purchase your own Berkeley Mono license
2. Replace it with another monospace font

Note: The font files are not included in this repository due to licensing restrictions.

## Build & Deploy

Build the production site:

```bash
pnpm build
```

Preview the built site locally:

```bash
pnpm preview
```

## Project Structure

- `src/content/` - Blog posts and project data 
- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layouts
- `src/pages/` - Site pages and routing
- `src/assets/` - Static assets and styles
- `public/` - Public files like fonts and images

## Contributing

While this is my personal site, I welcome bug reports and suggestions! Feel free to:

1. Create an issue for bugs or feature ideas
2. Submit a pull request with improvements
3. Share feedback on the design and content

## License

MIT License - Feel free to use any code from this site for your own projects, just please don't copy the content or design wholesale.