import React, { useState } from "react";
import ProductTable from "./components/ProductTable";
import Clock from "./components/Clock";

const App = () => {
  const [show, setShow] = useState(false);

  const handleTableShow = () => {
    setShow(!show);
  };
  return (
    <div className="p-10">
      <button
        onClick={handleTableShow}
        className="px-4 py-2 bg-gray-500 mb-10 text-white rounded hover:bg-gray-600"
      >
        Show
      </button>
      {show && <ProductTable />}
    </div>
  );
};

export default App;
