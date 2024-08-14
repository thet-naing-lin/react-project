import React, { useState } from "react";

const ShowMyName = () => {

    const [name, setName] = useState("");

  const handleThet = () => {
    // console.log("Thet");
    setName(name + " Thet");
  };

  const handleNaing = () => {
    setName( name + " Naing");
  };

  const handleLin = () => {
    setName(name + " Lin");
  }

  const handleRemoveName = () => {
    setName("")
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">My Name is "{name}"</h1>
      <div className=" flex gap-5">
        <button
        onClick={handleThet}
          className=" border border-black bg-black 
            text-white px-4 py-2 rounded-md"
        >
          Thet
        </button>
        <button
        onClick={handleNaing}
          className=" border border-black bg-black 
            text-white px-4 py-2 rounded-md"
        >
          Naing
        </button>
        <button
        onClick={handleLin}
          className=" border border-black bg-black 
            text-white px-4 py-2 rounded-md"
        >
          Lin
        </button>
        <button
        onClick={handleRemoveName}
          className=" border border-red-500 bg-red-500 
            text-white px-4 py-2 rounded-md"
        >
          Remove Name
        </button>
      </div>
    </div>
  );
};

export default ShowMyName;
