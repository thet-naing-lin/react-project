import React from "react";

const PageLoading = () => {
  return (
    // loading stye 1
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm">
      <div className="loader"></div>
    </div>

    // loading style 2
    // <div className="w-full fixed top-0 left-0">
    //   <div className="h-1.5 w-full bg-white overflow-hidden">
    //     <div className="page-loading-progress w-full h-full bg-teal-800 left-right" />
    //   </div>
    // </div>
  );
};

export default PageLoading;
