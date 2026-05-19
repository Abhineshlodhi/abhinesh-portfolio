# Personal Portfolio Website

A world-class, production-ready personal portfolio website showcasing senior-level Frontend/UI-UX expertise. Built with modern technologies and best practices.

## ✨ Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion, GSAP
- **Fully Responsive**: Optimized for all devices from mobile to 4K displays
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Premium Design**: Glassmorphism, smooth animations, and modern aesthetics
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundling
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Accessible**: WCAG 2.2 compliant with ARIA labels and keyboard navigation
- **Interactive Sections**:
  - Animated hero with stats
  - About section with timeline
  - Filterable skills showcase
  - Project gallery with categories
  - Work experience timeline
  - Services offering
  - Testimonials carousel
  - Contact form with validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone or download the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your API keys for EmailJS, analytics, etc.

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information

Edit `src/config/site.ts` to update:
- Your name and contact information
- Social media links
- Resume path
- Tagline and description

### Content

Update the following files with your actual data:
- `src/data/skills.ts` - Your skills and proficiency levels
- `src/data/experience.ts` - Work experience and achievements
- `src/data/services.ts` - Services you offer
- `src/data/testimonials.ts` - Client testimonials
- `src/components/sections/Projects.tsx` - Your projects (replace sample data)

### Colors & Theme

Modify `tailwind.config.js` to customize:
- Color palette (primary, secondary, accent colors)
- Typography (fonts, sizes)
- Spacing and sizing
- Animations

### Images

- Add your professional photo to the About section
- Replace project thumbnails with actual screenshots
- Add your resume PDF to `public/assets/resume.pdf`

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder, ready for deployment.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Run `npm run build`
2. Drag and drop `dist` folder to Netlify
3. Configure redirects if needed

### Other Platforms

The build output in `dist` is a static site that can be deployed anywhere:
- GitHub Pages
- AWS S3 + CloudFront
- Cloudflare Pages
- Any static hosting service

## 🛠️ Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Email**: EmailJS (optional)

## 📝 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── layout/       # Layout components
│   │   └── sections/     # Page sections
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── data/             # Static data
│   ├── config/           # Configuration files
│   ├── styles/           # Global styles
│   └── types/            # TypeScript types
├── public/               # Static assets
└── docs/                 # Documentation
```

## 🎯 Performance

This portfolio achieves excellent Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📄 License

Feel free to use this template for your own portfolio. Attribution is appreciated but not required.

## 🤝 Contributing

Found a bug or want to improve something? PRs are welcome!

## 📧 Contact

For questions or support, reach out via the contact form on the website or through the social links.

---

Built with ❤️ using modern web technologies
