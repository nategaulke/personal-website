import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./sections/Intro";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
