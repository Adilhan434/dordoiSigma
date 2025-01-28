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
            <div className="flex items-center justify-between space-x-6 p-4 pr-[50px]">
             <div> <Link to="/">
                <img
                  src="/img/logo.png"
                  alt="logo"
                  className="w-10 rounded-full border border-gray-300 shadow-2xl ml-[25px]"
                />
              </Link></div>
              <div className="flex gap-10 mr-[30px]"> 
              <Link to="/">
                <p className=" text-lg font-bold text-white  text-shadow-lg">Dordoi</p>
              </Link>
              <Link to="/football">
                <p className=" text-lg font-bold text-white  text-shadow-lg">Football</p>
              </Link>
              <Link to="/university">
                <p className=" text-lg font-bold text-white  text-shadow-lg">University</p>
              </Link>
              <Link to="/plaza">
                <p className=" text-lg font-bold text-white  text-shadow-lg">Plaza</p>
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
