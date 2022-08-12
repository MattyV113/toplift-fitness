import React, { useState, useRef } from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap';
import {useNavigate, Link } from 'react-router-dom';
import './CSS Files/NavBar.css';
import Background from '../images/signup.png';
import { useAuth } from '../context/AuthContext';

function SignIn() {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  

    
    const {signIn, forgotPassword } = useAuth();

    function loginUser(e){
      e.preventDefault();
      const email = emailRef.current.value
      const password = passwordRef.current.value
      if (email && password){
        setError('')
        setLoading(true)
        signIn(email, password)
        navigate('/profile')
      
      }else{
        setError('Failure to sign in')
      }
        setLoading(false)
    }
  


    const handleForgotPassword = () => {
      const email = emailRef.current.value
      if(email) forgotPassword((email).then(() => emailRef.current.value = ""))
    }



  return (
   <>
   <div className="signup-container" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}} >
     <div className="card-container">
        <Card>
          <Card.Body>
            {error && <Alert className="danger">{error}</Alert>}
          <h2 className="text-center mb-4">Sign In</h2>
          <Form onSubmit={loginUser}>
          <Form.Group id="username">
          <Form.Label>Username</Form.Label>
          <Form.Control className="mb-3" type="text"  ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control className="mb-3" type="password" ref={passwordRef} required />
          </Form.Group>
          <button type="submit" className="sign-in-button">Sign In</button>
          </Form>
          </Card.Body>
          <div className="forgot-pass" style={{color:'black'}}>
     Don't have an account? <Link to="/signup">Sign Up</Link>
      <br/>
     <Link to="/forgot-password" className="w-100">Reset Password</Link>
    </div>
        </Card>
    
  </div>
  </div>
  </>
  )
}

export default SignIn