import React, { memo } from "react";

const CounterView = memo(({ count }) => {
  console.log("CounterView Render");
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-5xl font-semibold text-gray-700 mb-4">{count}</p>
    </>
  );
});

export default CounterView;
