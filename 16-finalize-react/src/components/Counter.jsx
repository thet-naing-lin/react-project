import React, { useMemo, useState } from "react";
import CounterView from "./components/CounterView";

const Counter = () => {
  console.log("App Render");

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const doubleTheCount = useMemo(() => {
    console.log("double the count");
    return count * 2;
  }, [count]);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <CounterView count={doubleTheCount} />

        <div className="flex space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={toggleShow}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Show
          </button>
        </div>
        {show && <h1>Showing</h1>}
      </div>
    </div>
  );
};

export default Counter;
