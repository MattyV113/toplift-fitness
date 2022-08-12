import React from 'react'
import './CSS Files/Exercise.css';


function TrackerForm({exercises,setExercise, reps, sets, setReps, setSets, workouts, setWorkouts, error, setError}) {


    const handleSubmit = (e) => {
      e.preventDefault();
     setWorkouts([ ...workouts,
          {
             id: Math.floor(Math.random() * 1000),
             exercise: exercises,
             sets: sets,
             reps: reps,
             completed: false
         }
        ])
        
       setExercise('')
       setReps('')
       setSets('')
    }

  
    const handleExercise = (e) => {
        e.preventDefault();
        setExercise(e.target.value)
    }
  
    const handleSets = (e) => {
      e.preventDefault()
      setSets(e.target.value)
    }
  
    const handleReps = (e) => {
      e.preventDefault()
      setReps(e.target.value)
    }


  
 return (
    <>
    
  <form>
    <label>Exercise</label>
    <input className="exercise" required value={exercises} onChange={handleExercise}/>

    <label>Sets</label>
    <input className="sets" required value={sets} onChange={handleSets} />

    <label>Reps</label>
    <input className="reps" required value={reps} onChange={handleReps} />
    <div className="select-form">
    </div>
    <button className="form-button" onClick={handleSubmit}>Add</button>

  </form> 
  </>
 )
}

export default TrackerForm;