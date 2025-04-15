import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import komponen umum
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// Import halaman utama
import Hero from "./component/Hero";
import Project from "./component/Project";
import Experience from "./component/Experience";
import About from "./component/About";

// Import halaman detail project
import Project1 from "./Project/Satu"; 
import Project2 from "./Project/Dua";
import  Project3 from "./Project/Tiga";
import Project4 from "./Project/Empat";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* Navbar akan selalu tampil */}
      <Navbar />

      <Routes>
        {/* Halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Project />
              <Experience />
             
             
            </>
          }
        />

        {/* Halaman lain */}
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3/>}/>
        <Route path="/project4" element={<Project4/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
