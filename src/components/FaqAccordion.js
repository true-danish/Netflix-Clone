import { useState } from "react";
import { faqData } from "../utils/constants";

const FaqAccordionItem = ({ ele }) => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow(!show);
  };

  return (
    <div className="mb-2 ">
      <h1
        onClick={handleClick}
        className="text-xl lg:text-3xl cursor-pointer p-4  bg-slate-800 flex justify-between items-center"
      >
        {ele.title}
        <span
          className={`text-3xl px-4  rounded-full ${
            show && "rotate-45"
          } transition-all `}
        >
          +
        </span>
      </h1>

      <p
        className={` transition-[max-height]  linear origin-bottom  max-h-0  overflow-hidden text-lg mt-1 mb-4 bg-slate-800 ${
          show && "max-h-96 p-4"
        }`}
      >
        {ele.description}
      </p>
    </div>
  );
};

const FaqAccordion = () => {
  return (
    <section className="max-container">
      <div className="w-full max-w-4xl mx-auto ">
        <h1 className="text-2xl lg:text-4xl font-bold my-8">
          Frequently Asked Questions
        </h1>
        <div>
          {faqData.map((ele, indx) => (
            <FaqAccordionItem ele={ele} key={indx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
