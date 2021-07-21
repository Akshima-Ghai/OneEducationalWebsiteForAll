import React from 'react';
import Countdown from 'react-countdown';
import "./Timer.css"

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    return <h1 className="timer__text">{minutes}:{seconds}</h1>;
};

export default function Timer(props){ 
  return (
    <Countdown
      date={props.time}
      renderer={renderer}
    />
  )
}