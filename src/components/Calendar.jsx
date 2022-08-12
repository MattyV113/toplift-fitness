import React, {useState, useEffect} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import NavBar from './NavBar';
import './CSS Files/NavBar.css';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})




function ExerciseCalendar() {

  const [newEvent, setNewEvent] = useState({title: "", start:"", end:""});
  const [allEvents, setAllEvents] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('My_Calendar')
    if (data) {
      setAllEvents(JSON.parse(data))
    }
  }, [])
  
  useEffect(() => {
    if(allEvents.length !== 0) {
    localStorage.setItem('My_Calendar', JSON.stringify(allEvents))
    }
  },[allEvents])

  function handleAddEvent(e) {
    setAllEvents([...allEvents, newEvent])
  }

  return (
   <div className="calendar-container">
    <NavBar />
    <br />
      <h1 className="title">Calendar</h1>
      <div className="calendar-form">
        <input type="text" placeholder="Add Workout" className="calendar-input"
        value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})}  />
        <DatePicker  className="date-picker" placeholderText="Start Date"
        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
        <DatePicker className="date-picker" placeholderText="End Date" style={{marginBottom: "8px"}}
        selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
        <button  onClick={handleAddEvent} className="calendar-button">Add Event</button>
      </div>
      <br />
     <div className="calendar-display">
      <Calendar localizer={localizer} events={allEvents} 
      startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}}  />
      </div>
    </div>
  )
}

export default ExerciseCalendar;