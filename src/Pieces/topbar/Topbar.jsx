import "./topbar.scss"
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Gianni Louisa</a>
            <div className="itemcontainter">
              <PhoneIphoneTwoToneIcon className="icon"/>
              <span>(913)-292-9440</span>
              <MailTwoToneIcon className="icon2"/>
              <span>GianniLouisa@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>

          </div>
        </div>
    </div>
  )
}
