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
          content="Hello there! I'm Debmalya Biswas, a seasoned frontend developer hailing from Kolkata. With a rich internship background at three distinguished companies, I currently contribute my skills as a frontend developer intern at Saffronstays. As a versatile freelance developer, I specialize in JavaScript, TypeScript, React, Next.js, SCSS, GoLang, HTML, and CSS. Let's craft compelling digital experiences together!"
        />
        <meta
          name="keywords"
          content="frontend developer, React, Next.js, JavaScript, TypeScript, SCSS, GoLang, HTML, CSS, Kolkata, Saffronstays"
        />
        <meta name="author" content="Your Name" />{" "}

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Db | theEngineerGuy" />
        <meta
          property="og:description"
          content="Hello there! I'm Debmalya Biswas, a seasoned frontend developer hailing from Kolkata. With a rich internship background at three distinguished companies, I currently contribute my skills as a frontend developer intern at Saffronstays. As a versatile freelance developer, I specialize in JavaScript, TypeScript, React, Next.js, SCSS, GoLang, HTML, and CSS. Let's craft compelling digital experiences together!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.debmalya.in/"
        />{" "}

        <meta
          property="og:image"
          content="https://i.ibb.co/wKRPv0g/screenshot.png"
        />{" "}
        {/* Replace with a link to your actual Open Graph image */}
        <meta property="og:image:alt" content="https://i.ibb.co/wKRPv0g/screenshot.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Db | theEngineerGuy" />
        <meta
          property="twitter:description"
          content="Hello there! I'm Debmalya Biswas, a seasoned frontend developer hailing from Kolkata. With a rich internship background at three distinguished companies, I currently contribute my skills as a frontend developer intern at Saffronstays. As a versatile freelance developer, I specialize in JavaScript, TypeScript, React, Next.js, SCSS, GoLang, HTML, and CSS. Let's craft compelling digital experiences together!"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/wKRPv0g/screenshot.png"
        />{" "}
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
