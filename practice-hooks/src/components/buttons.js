import React, { useState, useEffect } from 'react';

const Button = () => {
  // Declare a new state variable, which we'll call "count"
  const [clickedTimes, updateClickedTimes] = useState(0);
  const [isOnline, setIsOnline] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('Effect 1')
    document.title = `You clicked ${clickedTimes} times`;
  }, [clickedTimes]);

  useEffect(() => {
    console.log('Effect 2')
    setIsOnline(true)

    return () => {console.log('true')}
  }, [isOnline])

  const updateNumber = (number) => updateClickedTimes(number ** 2); 

  return (
    <div>
      <p>You clicked {clickedTimes} times</p>
      <button onClick={() => updateNumber(clickedTimes + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Button;