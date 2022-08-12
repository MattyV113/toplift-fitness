import './CSS Files/NavBar.css';
import React, {useState} from 'react';
import Profile from './Profile';
import SidebarData from './SidebarData';
import logo from '../images/TopLift-main.png';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);



  const handleTracker = (e) => {
    e.preventDefault()
    navigate("/tracker")
}
const handleCalendar = (e) => {
    e.preventDefault()
    navigate("/calendar")
}
const handleProfile = (e) => {
    e.preventDefault()
    navigate("/profile")
}
  
const handleHamburger = () => {
    setIsActive(current => !current)
    setOpen(!open)

}

const handleMobileNav = () => {
    setIsActive(current => !current)
}

  return (
    <>
    <nav>
        <div className="container">
        <h1>TopLift</h1>

    <div className="menu">
        <a onClick={handleTracker} className="a-item">Tracker</a>
        <a onClick={handleCalendar} className="a-item">Calendar</a>
        <a onClick={handleProfile} className="a-item">Profile</a>
    </div>
    <button className={isActive ? 'hamburger is-active': 'hamburger'} onClick={handleHamburger}>
       
        <span></span>
        <span></span>
        <span></span>
    </button>
    </div>
    </nav>

    <nav className={isActive ? 'mobile-nav is-active': 'mobile-nav'}>
    <a onClick={handleTracker}>Tracker</a>
    <a onClick={handleCalendar}>Calendar</a>
    <a onClick={handleProfile}>Profile</a>
    </nav>

    </>
  )
}

export default Sidebar;