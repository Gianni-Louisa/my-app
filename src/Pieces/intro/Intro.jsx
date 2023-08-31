
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import gianni from './Gianni.png'
import arrow from './downarrow.png'
export default function Intro({menuOpen, setMenuOpen}) {
  const textRef = useRef();
  
  useEffect(() => {
    init(textRef.current, {
       showCursor: true,
       backDelay: 2000,
       backSpeed: 75,
       strings: ['Junior Software Engineer', 'University of Kansas Student' ],
       });
  },[]);
  
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className={"imgContainer "+ (menuOpen && "active")}>
          <img src={gianni} alt=""/>
        </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Gianni Louisa</h1>
          <h3><span ref={textRef} className={"Place_Holder "+ (menuOpen && "active")}></span></h3>
        </div>
        <a href="#portfolio">
          <img src={arrow} alt=""/>
        </a>
      </div>
    </div>
  )
}
