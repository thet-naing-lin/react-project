import React, { useState } from "react";
import useFaqStore from "./store/useFaqStore";

const FAQ = ({ faqQuestion: { id, question, answer, isOpen } }) => {
  const {toggleQuestion} = useFaqStore();

  const handleToggle = () => {
    toggleQuestion(id);
  };

  return (
    <div className="">
      <div
        onClick={handleToggle}
        className="border border-black p-5 flex justify-between items-center select-none active:scale-95 duration-500"
      >
        <h1 className={`text-xl ${isOpen ? "font-bold" : ""}`}>{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <p className={`bg-gray-300 p-5 text-justify ${isOpen ? "" : "hidden"}`}>
        {answer}
      </p>
    </div>
  );
};

export default FAQ;
