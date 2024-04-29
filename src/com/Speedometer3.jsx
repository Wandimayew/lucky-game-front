import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from "socket.io-client";
import HttpClient from '../middleware/HttpClient';

const Speedometer3 = ({ value }) => {
  // State to hold the current count for animation
  const [count, setCount] = useState(0);
  // State to determine if animation is complete
  const [animationComplete, setAnimationComplete] = useState(false);

  // Effect to update the count rapidly until it reaches the actual value
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + 1;
        if (nextCount > value) {
          setAnimationComplete(true);
          clearInterval(interval);
          return value;
        }
        return nextCount;
      });
    }, 1);

    return () => clearInterval(interval);
  }, [value]);

  // Calculate the fill percentage of the circle
  const fillPercentage = (count / 5500) * 100;

  // Calculate the stroke-dasharray for the circular border animation
  const strokeDashArray = Math.ceil(2 * Math.PI * 15 * 0.9);
  const animatedStrokeDashArray = fillPercentage / 100 * strokeDashArray;
  const strokeDashoffset = animationComplete ? 0 : Math.max(strokeDashArray - animatedStrokeDashArray, 0);

  return (
    <div className="relative w-40 h-40">
      <div className="flex items-center justify-center h-full">
        <div className="relative w-full h-full">
          <svg
            className="absolute top-0 left-0 right-0 bottom-0 rounded-full"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
          >
            <circle
              cx="16"
              cy="16"
              r="15"
              fill="none"
              stroke="#F59E0B" // Orange border color
              strokeWidth="4" // Increased border width
              strokeLinecap="round"
              strokeDasharray={`${strokeDashArray} ${strokeDashArray}`}
              strokeDashoffset={strokeDashoffset}
            />
            <circle
              cx="16"
              cy="16"
              r="15"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <span className="text-lg font-bold text-white">{count}</span> {/* Set text color to white */}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [winnersCount,setWinnersCount]=useState(0);
  const api = HttpClient();

  const socket = io("http://localhost:3002");

  socket.on("winnerAdded",(data)=>{
    console.log("message: ",data);
    api.get("api/winner/getWinnerCount")
    // axios
    //   .get("http://localhost:3002/api/winner/getWinnerCount")
      .then((response) => {
        console.log("Winners count is: ",response.data.count);
        setWinnersCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  useEffect(()=>{
    api.get("api/winner/getWinnerCount")
    // axios
    //   .get("http://localhost:3002/api/winner/getWinnerCount")
      .then((response) => {
        console.log("Winners count is: ",response.data.count);
        setWinnersCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });

  },[]) 

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold p-5 pl-10 text-start">Winners</h1>
      
      <Speedometer3 value={winnersCount} />
    </div>
  );
};

export default App;
