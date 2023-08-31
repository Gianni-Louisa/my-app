import Topbar from "./Pieces/topbar/Topbar";
import Intro from "./Pieces/intro/Intro";
import Portfolio from "./Pieces/portfolio/Portfolio";
import Works from "./Pieces/works/Works";
import Testimonial from "./Pieces/testimonial/Testimonial";
import Contact from "./Pieces/contact/Contact";
import "./app.scss";
import { useState } from "react";
import SideMenu from "./Pieces/sideMenu/SideMenu";

// Stopped at 1 hr minutes on video
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Works/>
       <Testimonial/>
       <Contact/>
     </div>
    </div>
  );
}
export default App;
