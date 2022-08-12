import React, { useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';



export default function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault()
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn", false);
    navigate('/signin')

  }

  return (
      <div className="topbar">
     <h1 className="title">TopLift</h1>
     <h1 className="signout" onClick={handleSignOut}>Sign Out</h1>
    </div>
  );
}