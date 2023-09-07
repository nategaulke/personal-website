import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
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
