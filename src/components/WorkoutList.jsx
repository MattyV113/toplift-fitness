import React from 'react'
import Workout from './Workout';
import './CSS Files/Exercise.css';


function WorkoutList({setWorkouts,workouts, error, setError}) {


  return (
    <>
    <div className="workout-header">
    <h1 className="workout-title">Workout</h1> 
    </div>
        <ul>
            {workouts.map(workout => (
                <Workout error={error} workouts={workouts} setWorkouts={setWorkouts} setError={setError} id={workout.id} key={workout.id} exercise={workout.exercise} reps={workout.reps} sets={workout.sets} />
             ))}
        </ul>
        </>
  )
}

export default WorkoutList;