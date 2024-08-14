import React from "react";

const Container = ({ children, className }) => {
  // console.log(children);
  return (
    <div className={`w-full md:w-[720px] lg:w-[950px] xl:[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
