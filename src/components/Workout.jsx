import React from 'react'
import './CSS Files/Exercise.css';
import { ImCheckmark2 } from 'react-icons/im';
import {RiDeleteBinLine} from 'react-icons/ri';

const Workout = ({exercise, workouts, id, setWorkouts, reps, sets}) => {

    const deleteHandler = (id) => {
       const updatedWorkouts = [...workouts].filter(item => item.id !== id)
        setWorkouts(updatedWorkouts)
        localStorage.setItem('My_Workout', '')
      }
    
  

  return (
    <>
    <div className="workout-item">
    
        <li className="workout-display">Exercise: {exercise} 
        <br />
        Sets: {sets} 
        <br />
        Reps: {reps}</li>
        <button onClick={() => deleteHandler(id)} className="delete-btn" ><RiDeleteBinLine size={20} /> </button>
    </div>
    </>
  )
}

export default Workout;