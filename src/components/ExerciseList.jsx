import React from 'react'
import exercises from './exercises.json';

function ExerciseList() {
    if (exercises.length === 0) return null;
    return (
        <ul>
            {exercises.map((exercise,key) => {
                return (
                <li key={exercise.id}>{exercise.title}</li>
                )
            })}
        </ul>
    )
  
}

export default ExerciseList;