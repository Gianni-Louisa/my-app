
import "./sideMenu.scss";

export default function sideMenu({menuOpen,setMenuOpen}) {
    return (
        <div className={"sideMenu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#testimonial">Testimonial</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
