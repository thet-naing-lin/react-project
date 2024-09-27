import React from "react";

const ShowDate = ({ timestamp, timeOnly }) => {
  // for date and time
  const date = new Date(timestamp);
  const time = new Date(timeOnly);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  
  const currentTimeOnly = time.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <p className=" text-xs text-[10px]">{currentDate}</p>
      <p className=" text-xs text-[10px]">
      {(timeOnly && `${currentTimeOnly}`) || (currentTime && `${currentTime}`)} 
      </p>
    </>
  );
};

export default ShowDate;
