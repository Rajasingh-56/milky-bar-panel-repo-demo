import React from "react";
import "./Thankyou.css";

const Thankyou = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="thankyou-info">
          <h2 className="greetings">
            Thank you for <br />
            Participating!
          </h2>
          <div className="image-sec">
          <img src="./Assets/pngwing.com.png" alt="" />
          <img src="./Assets/pngwing.com.png" alt="" />
          </div>

          <p>
            If you are a Lucky winner, you <br />
            will recieve SMS Communitication <br />
            with a unique reward code.
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
