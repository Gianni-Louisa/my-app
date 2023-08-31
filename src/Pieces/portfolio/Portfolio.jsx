import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

import {
  python,
  javascript,
  react,
  htmlcss,
  java,
} from "../../data";

export default function Portfolio({menuOpen,setMenuOpen}) {
  const [selected,setSelected] = useState("python");
  const [data,setData] = useState([]);
  const list = [
    {
      id: "python",
      title: "Python",
    },
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "react.js",
      title: "React.js",
    },
    {
      id: "html&css",
      title: "HTML & CSS",
    },
    {
      id: "java",
      title: "Java",
    },
  ];
  
  useEffect(() => {
   switch(selected) {
     case "python":
       setData(python);
   }
   switch(selected) {
    case "javascript":
      setData(javascript);
  }
  switch(selected) {
    case "react.js":
      setData(react);
  }
  switch(selected) {
    case "html&css":
      setData(htmlcss);
      break;
    case "html&css":
      setData(htmlcss);
  }
  switch(selected) {
    case "java":
      setData(java);
  }

    }, [selected]);
  
  return (
    


    <div className="portfolio" id="portfolio">
      <div className={"cc "+(menuOpen && "active")}>
            <ul>
                <li>
                    <a>Languages</a>
                </li>
            </ul>
      </div>
      
   

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            menuOpen
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>\
        
        </div>
        ))}
      </div>
      </div>
    
  )
}
