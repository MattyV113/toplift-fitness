import React, {useState} from 'react';
import {Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import SidebarData from './SidebarData';
import Background from '../images/signup.png';
import './CSS Files/App.css';
import { useNavigate, Link} from 'react-router-dom';


function Profile() {


  const {currentUser, logout} = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  


  const handleLogOut = async () => {
    setError('');

    try {
      await logout();
      navigate('/signin')
    } catch{
      setError('failed to log out')
    }
  }
  


  return (
    <>
    <div className="profile-container" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
    <div className="profile-card">
      {error && <Alert variant="danger">{error}</Alert>}
    <h2>Profile</h2>
     <p >{currentUser.email}</p>
     <ul>
        {SidebarData.map((val,key) => {
            return (
                <li className="profile-li" key={key}>
                <div id="logo">{val.logo}</div>
                <Link to={val.link}>{val.name}</Link>
                </li>
                )
        })}
        
        </ul>
      <button onClick={handleLogOut}>Log Out</button>
  </div> 
  </div>
    </>
  )
}

export default Profile