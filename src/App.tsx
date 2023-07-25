import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./sections/Intro";
import About from "./sections/About";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <Intro />
      <About />
      <Footer />
    </div>
  );
}

export default App;
