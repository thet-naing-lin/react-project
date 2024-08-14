import React, { useState } from "react";

const App = () => {
  // console.log(useState(0));

  const [count, setCount] = useState(1);
  //   console.log(count);

  const handleIncrement = () => {
    // console.log("u click");
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="p-10">
      <h1 className="text-9xl font-bold">{count}</h1>
      <button
      onClick={handleDecrement}
        className=" border border-black bg-black 
            text-white px-4 py-2 rounded-md me-3"
      >
        decrement
      </button>
      <button
      onClick={handleIncrement}
        className=" border border-black bg-black 
            text-white px-4 py-2 rounded-md"
      >
        increment
      </button>
    </div>
  );
};

export default App;
