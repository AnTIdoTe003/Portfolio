# Debmalya Biswas - Portfolio Website

> Frontend & Full Stack Developer | SDE-1 at SaffronStays

A modern, high-performance portfolio website built with React, Three.js, and optimized for search engines and performance.

## 🚀 Live Demo

[https://www.debmalya.in/](https://www.debmalya.in/)

## 🛠️ Built With

- **React 18** - UI library
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for React Three Fiber
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **EmailJS** - Contact form

## ✨ Features

- 🎨 Modern and responsive design
- 🌐 3D interactive elements with Three.js
- ⚡ Optimized for performance (Lighthouse 100/100 LCP)
- 🔍 SEO optimized with structured data
- 📱 Mobile-friendly
- ♿ Accessible (WCAG compliant)
- 🎭 Smooth animations with Framer Motion
- 📧 Working contact form

## 🎯 SEO Optimizations

This portfolio is optimized to rank for:
- Debmalya Biswas
- Debmalya Biswas frontend developer
- Debmalya Biswas full stack developer
- Debmalya Biswas SaffronStays
- Debmalya Biswas React developer

### SEO Features:
- ✅ Comprehensive meta tags (Open Graph, Twitter Cards)
- ✅ JSON-LD structured data (Person, WebSite, ProfilePage schemas)
- ✅ Optimized title tags and descriptions
- ✅ Canonical URLs
- ✅ XML sitemap
- ✅ Robots.txt configuration
- ✅ Geographic targeting (Kolkata, India)

## ⚡ Performance Optimizations

### Lighthouse Scores Target: 100/100

- **Image Optimization**: Preloading, lazy loading, WebP format
- **Code Splitting**: Vendor chunks for better caching
- **Lazy Loading**: Heavy 3D components loaded on demand
- **Minification**: Terser with production optimizations
- **CSS Optimization**: Code splitting enabled
- **Network**: DNS prefetch and preconnect

### LCP Optimizations:
- Hero image preloading with `fetchpriority="high"`
- Explicit image dimensions to prevent CLS
- Lazy loading for below-the-fold images
- Optimized bundle sizes

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/AnTIdoTe003/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install
# or
yarn install
```

## 🚀 Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to view the app.

## 🏗️ Build

```bash
# Create production build
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── assets/          # Images, icons, and other static assets
│   ├── components/      # React components
│   │   ├── canvas/      # 3D components (Three.js)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/       # Constants and configuration
│   ├── hoc/            # Higher-order components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.cjs # Tailwind configuration
└── package.json        # Dependencies

```

## 🎨 Customization

1. Update personal information in `/src/constants/index.js`
2. Replace images in `/src/assets/`
3. Modify colors in `/tailwind.config.cjs`
4. Update meta tags in `/index.html` and `/src/App.jsx`

## 🔍 SEO Configuration

Update the following for your own portfolio:
- Meta tags in `index.html`
- Structured data (JSON-LD) in `index.html`
- `robots.txt` configuration
- `sitemap.xml` URLs
- Open Graph images

## 📊 Performance Monitoring

### Tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

## 🌟 Sections

1. **Hero** - Introduction with 3D elements
2. **About** - Overview and expertise
3. **Experience** - Work history timeline
4. **Tech Stack** - Technologies and tools
5. **Projects** - Portfolio projects
6. **Contact** - Contact form

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Debmalya Biswas**
- Portfolio: [www.debmalya.in](https://www.debmalya.in/)
- GitHub: [@AnTIdoTe003](https://github.com/AnTIdoTe003)
- LinkedIn: [Debmalya Biswas](https://www.linkedin.com/in/debmalya-biswas/)

## 🙏 Acknowledgments

- Three.js community for amazing 3D libraries
- React Three Fiber team
- Tailwind CSS team
- All open-source contributors

## 📄 Additional Documentation

See [SEO_PERFORMANCE_OPTIMIZATIONS.md](./SEO_PERFORMANCE_OPTIMIZATIONS.md) for detailed information about all SEO and performance optimizations implemented.

---

⭐ Star this repo if you find it helpful!
