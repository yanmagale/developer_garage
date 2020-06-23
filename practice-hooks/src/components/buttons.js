import React, { useState, useEffect } from 'react';

const Button = () => {
  // Declare a new state variable, which we'll call "count"
  const [clickedTimes, updateClickedTimes] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${clickedTimes} times`;

    return () => {console.log(clickedTimes)};
  });

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