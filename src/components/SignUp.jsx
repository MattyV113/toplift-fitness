import React, { useState, useRef} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import Background from '../images/signup.png';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const { signUp} = useAuth();

  function registerUser(e){
    e.preventDefault();
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const confirmPassword = confirmPasswordRef.current.value
    const name = userRef.current.value
    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }
    if (email && name && password){
      setError('')
      setLoading(true)
      setSuccess(true)
      signUp(emailRef.current.value, passwordRef.current.value, userRef.current.value)
      navigate('/signin')
    
    }else{
      setError('Failure to sign user up')
    }
      setLoading(false)
  }

  return (
   <>
   <div className="signup-container" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
    <div className="card-container">
  <Card>
    <Card.Body>
    <h2 className="text-center mb-4">TopLift</h2>
    <p>Track all of your workouts and see the progress unfold as you reach your fitness goals!</p>
    <br/>
    <Form onSubmit={registerUser}>
      {success && <Alert variant="success">User Registered</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
    <Form.Group id="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" ref={emailRef}  required />
    </Form.Group>
    <Form.Group id="username">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  ref={userRef}  required />
    </Form.Group>
    <Form.Group id="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  ref={passwordRef}  required />
    </Form.Group>
    <Form.Group id="password">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password"  ref={confirmPasswordRef} required />
    </Form.Group>
    <Button disabled={loading} type="submit" className="w-100 mt-4">Sign Up</Button>
    </Form>
    </Card.Body>
    <div className="w-100 text-center mt-2 mb-4" style={{color: 'black'}}>
    Already have an account? <Link  className="link-success" to="/signin">Sign In</Link>
  </div>
  </Card>
 
  </div>
  </div>
  </>
  )
}

export default SignUp