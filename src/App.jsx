import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  About,
  Socials,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
  Academic,
} from "./components";
import Experience from "./components/Experience";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Academic />
        <Tech />
        <Works />
        <Socials />
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}
