import React, {useRef, useState} from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './CSS Files/App.css';
import {Form, Card, Alert, Button} from 'react-bootstrap';


function UpdateProfile() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const { updateEmail, updatePassword, currentUser} = useAuth();


  function handleSubmit(e){
      e.preventDefault()
      if(passwordRef.current.value !== confirmPasswordRef.current.value){
          setError('Passwords do not match')
      }
  

  const promises = []
  setLoading(true)
  setError('')

  if(emailRef.current.value !== currentUser.email){
    promises.push(updateEmail(emailRef.current.value))

  } 
  if (passwordRef.current.value){
    promises.push(updatePassword(passwordRef.current.value))
  }

  Promise.all(promises).then(() => {
      navigate('/profile')
  }).catch (() => {
      setError('failed to update profile')
  }).finally(() => {
      setLoading(false)
  })
}

  return (
   <>
   <div className="signup-container">
    <div className="card-container">
  <Card style={{}} >
    <Card.Body>
    <h2 className="text-center mb-4">Update Profile</h2>
    <br/>
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
    <Form.Group id="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
    </Form.Group>
    <Form.Group id="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Leave blank to keep current password"  ref={passwordRef}  />
    </Form.Group>
    <Form.Group id="password">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Leave blank to keep current password"  ref={confirmPasswordRef} />
    </Form.Group>
    <Button disabled={loading} type="submit" className="w-100 mt-4">Update Profile</Button>
    </Form>
    </Card.Body>
  </Card>
  <div className="w-100 text-center mt-2">
    <Link to="/profile">Cancel</Link>
  </div>
  </div>
  </div>
  </>
  )
}

export default UpdateProfile;