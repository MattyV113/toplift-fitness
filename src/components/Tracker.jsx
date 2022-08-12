import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import TrackerForm from './TrackerForm';
import './CSS Files/NavBar.css';
import './CSS Files/Exercise.css';
import WorkoutList from './WorkoutList';

function Tracker() {
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('My_Workout')
     if (data) { 
        setWorkouts(JSON.parse(data))
     }
        },[])

  useEffect(() => {
    if (workouts.length !== 0){
    localStorage.setItem('My_Workout', JSON.stringify(workouts))
    }
         }, [workouts])


  return (
    <>
    <NavBar />
    <div className="exercise-container">
    <div className="exercise-form">
    <TrackerForm sets={sets} setSets={setSets} 
    setReps={setReps} reps={reps} 
    setExercise={setExercise} exercises={exercises}
    setWorkouts={setWorkouts} workouts={workouts} error={error} setError={setError} />
    </div>
    <WorkoutList workouts={workouts} setWorkouts={setWorkouts}  />
    </div>
    </>

  )
}

export default Tracker;