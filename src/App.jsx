import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Parrainage from "./pages/Parrainage/Parrainage";
import NotFound from "./components/NotFound";
import { useEffect } from "react";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parrainage" element={<Parrainage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;