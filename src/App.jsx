import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  About,
  Experience,
  Socials,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";

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
        <Tech />
        <Works />
        <Socials />
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}
