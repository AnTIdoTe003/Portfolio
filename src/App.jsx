import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Db | theEngineerGuy</title>
        {/* Meta Tags */}
        <meta
          name="description"
          content="Hii, I am Debmalya Biswas Experienced frontend developer from Kolkata. Worked at 3 companies as an intern. Currently a frontend developer intern at Saffronstays. Freelance developer skilled in JavaScript, TypeScript, React, Next.js, SCSS, GoLang, HTML, CSS."
        />
        <meta
          name="keywords"
          content="frontend developer, React, Next.js, JavaScript, TypeScript, SCSS, GoLang, HTML, CSS, Kolkata, Saffronstays"
        />
        <meta name="author" content="Your Name" />{" "}
        {/* Replace with your actual name */}
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Db | theEngineerGuy" />
        <meta
          property="og:description"
          content="Experienced frontend developer from Kolkata. Worked at 3 companies as an intern. Currently a frontend developer intern at Saffronstays. Freelance developer skilled in JavaScript, TypeScript, React, Next.js, SCSS, GoLang, HTML, CSS."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://debmalya-portfolio.vercel.app/"
        />{" "}
        {/* Replace with your actual website URL */}
        <meta
          property="og:image"
          content="https://i.ibb.co/wKRPv0g/screenshot.png"
        />{" "}
        {/* Replace with a link to your actual Open Graph image */}
        <meta property="og:image:alt" content="Db | theEngineerGuy" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Db | theEngineerGuy" />
        <meta
          property="twitter:description"
          content="Hii, I am Debmalya Biswas Experienced frontend developer from Kolkata. Worked at 3 companies as an intern. Currently a frontend developer intern at Saffronstays. Freelance developer skilled in JavaScript, TypeScript, React, Next.js, SCSS, GoLang, HTML, CSS."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/wKRPv0g/screenshot.png"
        />{" "}
        {/* Replace with a link to your actual Twitter image */}
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
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
