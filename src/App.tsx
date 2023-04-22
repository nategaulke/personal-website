import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./sections/Intro";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-zinc-900">
      <Header />
      <main className="container mx-auto">
        <Intro />
      </main>
      <Footer />
    </div>
  );
}

export default App;
