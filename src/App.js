import './App.css';
import React, {useState} from 'react';

function App() {
  const [secondHandRotation, setSecondhandRotation] = useState(90);
  const [minuteHandRotation, setMinuteHandRotation] = useState(90);
  const [hourHandRotation, setHourHandRotation] = useState(90);
  const [digitalTime, setDigitalTime] = useState(0);

  /*
  **Calculate the degrees to point each hand based on current seconds/minutes/hour & total degrees 
    in a circle and the original 90 degree angle (12 o'clock).
  */  
  const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds(); 
     
    // Calculate teh current degree of the second hand by using the current second of the minute
    const updatedSecondHandDegrees = ((seconds/60) * 360) + 90;
    setSecondhandRotation(updatedSecondHandDegrees);

    // Calcuate the current degree of the minute hand by using the current minute of the hour
    const minutes = now.getMinutes();
    const updatedMinuteHandDegrees = ((minutes/60) * 360) + 90;
    setMinuteHandRotation(updatedMinuteHandDegrees);

    // Calcuate the current degree of the hour hand by using the current minute of the hour
    const hours = now.getHours();
    const updateHourHandDegrees = ((hours/12) *360) + 90;
    setHourHandRotation(updateHourHandDegrees);

    // Calcuate the current digital time
    let test = now.toLocaleTimeString();
    setDigitalTime(test);
  }

  setInterval(setDate, 1000) 

  return (
    <div className="page-style">
      <article id="digital-time">
        <h1>{digitalTime}</h1>
      </article>
      <main id="clock-face">
        <section id="hour-hand" className="hand" style={{transform:`rotate(${hourHandRotation}deg)`}} ></section>
        <section id="minute-hand" className="hand" style={{transform:`rotate(${minuteHandRotation}deg)`}}></section>
        <section id="second-hand" className="hand" style={{transform:`rotate(${secondHandRotation}deg)`}}></section>
      </main>
    </div>
  );
}

export default App;
