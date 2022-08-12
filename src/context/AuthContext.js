import React, { useContext, useEffect, useState } from 'react'
import {
createUserWithEmailAndPassword, 
signInWithEmailAndPassword,
onAuthStateChanged
, updateProfile,
signOut,
sendPasswordResetEmail} from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate } from 'react-router';



export function useAuth() {
    return useContext(AuthContext);
}

const AuthContext = React.createContext();



export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, res => {
            res ? setCurrentUser(res) : setCurrentUser(null)
            setError("");
            setLoading(false);
        })
        return unsubscribe
    }, []);

    async function signUp (email, name, password){
        try {
            setLoading(true);
            const user = await createUserWithEmailAndPassword(auth, email, name, password)
            console.log(user)
         } catch(error) {
          setError(error.message)
          console.log(error.message)
        }
        setLoading(false);
    }
   
    async function signIn (email, password){
        try {
            setLoading(true);
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
         } catch(error) {
          setError(error.message)
          console.log(error.message)
        }
        setLoading(false);
    }

    function logout(){
        signOut(auth);
        Navigate("/signin")
    };

    function updateEmail(email){
        return auth.currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return auth.currentUser.updatePassword(password)
    }

    function forgotPassword(email){
        return sendPasswordResetEmail(auth, email)
    }
    
    const value = {
        currentUser,
        loading,
        error,
        signUp,
        signIn,
        logout,
        forgotPassword,
        updateEmail,
        updatePassword
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

