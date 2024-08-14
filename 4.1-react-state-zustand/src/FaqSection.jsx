import React, { useState } from "react";
import FAQ from "./FAQ";
import useFaqStore from "./store/useFaqStore";

const FaqSection = () => {
  
  const {faq} = useFaqStore();

  return (
    <div className=" p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        FAQ
      </h1>

      <div className="flex flex-col">
        {faq.map((el) => (
          <FAQ
            key={el.id}
            faqQuestion={el}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
