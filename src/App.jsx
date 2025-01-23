import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Football from "./pages/Football";
import Home from "./pages/Home";
import University from "./pages/University";
import Plaza from "./pages/Plaza";

function App() {
  return (
    <main className="overflow-x-hidden min-h-screen relative">
      <Router>
        {/* Hero Section */}
        <div className="relative">
          {/* Навбар */}
          <div className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
            <div className="flex items-center justify-between space-x-6 p-4">
             <div> <Link to="/">
                <img
                  src="/img/logo.png"
                  alt="logo"
                  className="w-10 rounded-full border border-gray-300 shadow-2xl"
                />
              </Link></div>
              <div className="flex gap-10 "> 
              <Link to="/">
                <p className="text-lg font-bold text-white">Dordoi</p>
              </Link>
              <Link to="/football">
                <p className="text-lg font-bold text-white">Football</p>
              </Link>
              <Link to="/university">
                <p className="text-lg font-bold text-white">University</p>
              </Link>
              <Link to="/plaza">
                <p className="text-lg font-bold text-white">Plaza</p>
              </Link></div>
            </div>
          </div>

         
          
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/university" element={<University/>} />
          <Route path="/football" element={<Football />} />
          <Route path="/plaza" element={<Plaza />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
