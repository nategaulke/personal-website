import Header from "./components/layout/Header";
import MobileHeader from "./components/layout/MobileHeader";
import Footer from "./components/layout/Footer";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      {isMobile ? <MobileHeader /> : <Header />}
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
