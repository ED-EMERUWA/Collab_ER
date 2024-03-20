import React, { useState, useEffect } from 'react';

export default function App() {
  const [showDiv, setshowDiv] = useState('y');
  const [apiResult, setApiResult] = useState(null); // Change to null instead of []

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
        const data = await response.json();
        setApiResult(data); // Update the state with fetched data
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const logit = () => {
    console.log('hi');
    console.log('yo');
    setshowDiv('x');
  };

  return (
    <>
      <h1>Click the Button Below</h1>
      <button onClick={logit}>Click me</button>

      {apiResult && ( // Check if apiResult is not null before rendering
        <div>
          <div className="title">{apiResult.title}h k hjh</div>
          <div className="year">{apiResult.year}</div>
          <div className="author">{apiResult.author}</div>
          <div className="wiki">{apiResult.wiki}</div>
        </div>
      )}

      <div>{showDiv}</div>
    </>
  );
}
