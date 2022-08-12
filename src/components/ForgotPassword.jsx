import React, {useState, useRef} from 'react'
import { useAuth } from '../context/AuthContext';
import {Card, Button, Form, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function ForgotPassword() {
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { forgotPassword } = useAuth();

    const handleForgotPassword = async (e) => {
        e.preventDefault()

      try {  
          setMessage('');
          setError("");
            setLoading(true)
            await forgotPassword(emailRef.current.value)
            setMessage("Check your email inbox to finish password reset")
    } catch{
        setError("Failed to reset password")
    }

      }



  return (
    <>
    <div className="card-container">
    <Card>
    <Card.Body>
     <h2 className="text-center mb-4">Reset Password</h2>
    <br/>
    <Form>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
    <Form.Group id="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" ref={emailRef}  required />
    </Form.Group>
    <Button disabled={loading} type="submit" className="w-100 mt-4" onClick={handleForgotPassword}>Reset Password</Button>
    </Form>
    </Card.Body>
  </Card>
  <div className="w-100 text-center mt-2">
    <Link to="/signin">Sign In</Link>
  </div>
  </div>
  </>
  )
}

export default ForgotPassword