import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup to avoid memory leaks
    };
  }, []); // Empty dependency array ensures this runs only once after mounting

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    return `${padZero{hours}}:${padZero{minutes}}:${padZero{seconds}} ${meridiem}`;
    function padZero(number) {
      return (number <10 ? "0":"")+number;
    }
      

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
