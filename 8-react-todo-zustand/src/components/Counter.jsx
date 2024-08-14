import React, { useState } from "react";
import useCounterStore from "../store/useCounterStore";

const Counter = () => {
  // const [count, setCount] = useState(7);

  // console.log(useCounterStore());
  const {
    count,
    resetCount,
    increaseCount,
    decreaseCount,
    increaseFive,
    decreaseFive,
  } = useCounterStore();

  const handleReset = () => {
    // setCount(0);
    resetCount();
  };

  //   const handleIncrement = () => {
  //     // setCount(count + 1);
  //     increaseCount();
  //   };

  //   const handleIncrementFive = () => {
  //     increaseFive(5);
  //   };

  const handleIncrement = (event) => {
    if (event.shiftKey) {
      increaseFive(5); // Increase by 5 if Shift key is held
    } else {
      increaseCount(); // Otherwise, increase by 1
    }
  };

  const handleDecrement = (event) => {
    // setCount(count - 1);
    // decreaseCount();
    if (event.shiftKey) {
      decreaseFive(5);
    } else {
      decreaseCount();
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">Counter</h1>
        <div className="flex justify-center items-center space-x-6 mb-4">
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600"
          >
            -
          </button>
          <span className="text-5xl font-semibold">{count}</span>
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600"
          >
            +
          </button>
          {/* <button
            onClick={handleIncrementFive}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600"
          >
            + 5
          </button> */}
        </div>
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 w-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
