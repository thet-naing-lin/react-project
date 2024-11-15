import React, { useEffect, useState } from "react";

const Clock = () => {
  console.log("Clock render");

  const [time, setTime] = useState(new Date());

  const clockRunner = () => {
    const currentTime = new Date();
    console.log(currentTime);
    setTime(currentTime);
  };

  useEffect(() => {
    console.log("Clock mounted");

    const runningClock = setInterval(clockRunner, 1000);

    return () => {
      console.log("Clock unmounted");
      clearInterval(runningClock);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="flex items-center justify-center p-5 bg-blue-950 text-white">
      <div className=" p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Digital Clock</h1>
        <p className="text-6xl font-mono tracking-widest">{formattedTime}</p>
      </div>
    </div>
  );
};

export default Clock;
