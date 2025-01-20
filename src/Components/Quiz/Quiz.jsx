import React, { useState } from "react";
import "./Quiz.css";
import { QuizData } from "../Lib/QuizData";
import Question from "./Question/Question";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [index, setIndex] = useState(0); // Track the current question index
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [answers, setAnswers] = useState([]); // Store all answers

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Save the selected answer for the current question
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: QuizData[index].question, selectedOption },
    ]);

    const nextIndex = index + 1;
    if (nextIndex < QuizData.length) {
      setIndex(nextIndex); // Move to the next question
      setSelectedOption(null); // Reset selected option
    } else {
      console.log("Quiz Completed. Answers:", answers);
      navigate("/feedback");
    }
  };

  // const handleOptionClick = (option) => {
  //   if (selectedOption === null) {
  //     setSelectedOption(option);   }
  // };

  return (
    <div className="container">
      <div className="quiz-container">
        <h2 className="que-ans">Answer the Questions</h2>
        <Question
          key={index}
          questionNo={index + 1}
          question={QuizData[index].question}
          options={QuizData[index].options}
          isLast={index + 1 === QuizData.length}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Quiz;

{
  /* <div className="quiz-question">
          <h2>
          {index + 1}. {QuizData[index].question}
          </h2>
          <ul>
            <li
              onClick={() => handleOptionClick("a")}
              className={`option ${selectedOption === "a" ? "selected" : ""}`}
            >
              a) {QuizData[index].option1}
            </li>
            <li
              onClick={() => handleOptionClick("b")}
              className={`option ${selectedOption === "b" ? "selected" : ""}`}
            >
              b) {QuizData[index].option2}
            </li>
            <li
              onClick={() => handleOptionClick("c")}
              className={`option ${selectedOption === "c" ? "selected" : ""}`}
            >
              c) {QuizData[index].option3}
            </li>
            <li
              onClick={() => handleOptionClick("d")}
              className={`option ${selectedOption === "d" ? "selected" : ""}`}
            >
              d) {QuizData[index].option4}
            </li>
          </ul>
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!selectedOption} // Disable if no option is selected
          >
            {index + 1 === QuizData.length ? "Submit" : "Submit"}
          </button>
        </div> */
}
