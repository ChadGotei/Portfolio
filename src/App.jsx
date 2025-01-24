import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  About,
  Contact,
  Experience,
  Socials,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

export default function App() {
  return (
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
        <Socials />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Toaster />
    </BrowserRouter>
  );
}
