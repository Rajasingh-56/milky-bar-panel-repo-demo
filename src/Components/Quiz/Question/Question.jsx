import React, { useState } from "react";

const  Question = ({ questionNo, question, options, isLast, handleSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set selected option only if none is selected

  };

  return (
    <div className="quiz-question">
      <h2>
        {questionNo}. {question}
      </h2>
      <ul>
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`option ${selectedOption === option ? "selected" : ""}`}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        className="otp-btn"
        onClick={handleSubmit}
        disabled={!selectedOption} // Disable if no option is selected
      >
        {/* {isLast ? "Submit" : "Next"} */}
        {isLast ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Question;
