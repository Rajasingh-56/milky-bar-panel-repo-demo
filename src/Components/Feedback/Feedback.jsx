import React, { useState } from "react";
import "./Feedback.css";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const [textValue, setTextValue] = useState("Write something...");

  const handleFocus = () => {
    if (textValue === "Write something...") {
      setTextValue(""); // Clear default text when focused
    }
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTextValue(e.target.value); // Update state on user input
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Feedback submitted:", textValue); // Log the current value
    navigate("/thankyou");
  };

  return (
    <div className="container">
      <div className="feedback-container">
        <h2 className="que-ans">Answer the Questions</h2>
        <form className="feedback-box" onSubmit={handleSubmit}>
          <h2>Tell us about your most magical moment with Milkybar!</h2>
          <textarea
            id="about"
            value={textValue}
            onFocus={handleFocus}
            onChange={handleChange}
          ></textarea>
          <button className="feed-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
