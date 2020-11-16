import './App.css';
import React, {useState} from 'react';

function App() {
  const [secondHandRotation, setSecondhandRotation] = useState(90);

  const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds(); 
    /*Calculate the degrees to point the hand based on seconds & total degrees 
    in a circle and the original 90 degree angle (12 o'clock)*/   
    const updatedSecondHandDegrees = ((seconds/60) * 360) + 90;
    setSecondhandRotation(updatedSecondHandDegrees);
    console.log(seconds);
  }

  setInterval(setDate, 1000)
  return (
    <div className="page-style">
      <main id="clock-face">
        <section id="hour-hand" className="hand" ></section>
        <section id="minute-hand" className="hand"></section>
        <section id="second-hand" className="hand"style={{transform:`rotate(${secondHandRotation}deg)`}}></section>
      </main>
    </div>
  );
}

export default App;
