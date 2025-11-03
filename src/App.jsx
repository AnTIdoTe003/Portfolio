import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

// Lazy load heavy 3D canvas component for better LCP
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>Debmalya Biswas - Frontend & Full Stack Developer | SaffronStays SDE-1</title>
        <meta name="title" content="Debmalya Biswas - Frontend & Full Stack Developer | SaffronStays SDE-1" />
        <meta
          name="description"
          content="Debmalya Biswas is a Frontend & Full Stack Developer (SDE-1) at SaffronStays. Achieved 25% increase in booking value, migrated APIs from Node.js to Go, and developed features like Web-Checkin, ticketing systems, and hotel search filters. Expert in Next.js, React, TypeScript, GoLang, Node.js, and MongoDB."
        />
        <meta
          name="keywords"
          content="Debmalya Biswas, debmalya biswas, debmalya biswas frontend, debmalya biswas frontend developer, debmalya biswas saffronstays, debmalya biswas full stack, debmalya biswas sde, debmalya biswas react, debmalya biswas developer, frontend developer, full stack developer, React developer, Next.js developer, TypeScript developer, GoLang developer, JavaScript developer, SaffronStays developer, Kolkata developer, web developer portfolio"
        />
        <meta name="author" content="Debmalya Biswas" />
        <link rel="canonical" href="https://www.debmalya.in/" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.debmalya.in/" />
        <meta property="og:site_name" content="Debmalya Biswas Portfolio" />
        <meta property="og:title" content="Debmalya Biswas - Frontend & Full Stack Developer | SaffronStays SDE-1" />
        <meta
          property="og:description"
          content="Debmalya Biswas is a Frontend & Full Stack Developer (SDE-1) at SaffronStays. Achieved 25% increase in booking value, migrated APIs from Node.js to Go, and developed features like Web-Checkin, ticketing systems, and hotel search filters. Expert in Next.js, React, TypeScript, GoLang, Node.js, and MongoDB."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/wKRPv0g/screenshot.png"
        />
        <meta property="og:image:alt" content="Debmalya Biswas - Frontend & Full Stack Developer Portfolio" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.debmalya.in/" />
        <meta name="twitter:title" content="Debmalya Biswas - Frontend & Full Stack Developer | SaffronStays SDE-1" />
        <meta
          name="twitter:description"
          content="Debmalya Biswas - SDE-1 at SaffronStays. Achieved 25% increase in booking value, migrated APIs to Go, developed Web-Checkin & ticketing systems. Expert in Next.js, React, TypeScript, GoLang, Node.js."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/wKRPv0g/screenshot.png"
        />
      </Helmet>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <Suspense fallback={<div />}>
              <StarsCanvas />
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
