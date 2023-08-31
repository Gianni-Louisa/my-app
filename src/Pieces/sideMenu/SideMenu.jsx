
import "./sideMenu.scss";

export default function sideMenu({menuOpen,setMenuOpen}) {
    return (
        <div className={"sideMenu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#portfolio">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#works">To Be Continued</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#testimonial"></a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href ="#contact"></a>
                </li>
            </ul>
        </div>
    )
}
