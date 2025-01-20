import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="abt-info">
          <h2>History</h2>
          <p>
            Nestlé accidentally invented Milkybar in 1936 when kitchen staff
            added cocoa butter to a batch of Nestrovit, a vitamin-enriched
            condensed milk for children. Milkybar production stopped during
            World War II due to shortages of milk and sugar. In the 2000s, the
            recipe was improved to use only natural ingredients.
          </p>
        </div>
        <div className="abt-info">
          <h2>Ingredients</h2>
          <p>
            Milkybar contains no artificial colors, flavors, or preservatives.
          </p>
        </div>
        <div className="abt-info">
          <h2>Popularity</h2>
          <p>
            Milkybar is the UK's top white chocolate brand and is also popular
            in Continental Europe and Latin America. In some countries, it's
            known by the name Galak.
          </p>
        </div>
        <div className="abt-info">
          <h2>Taste</h2>
          <p>
            Milkybar is rich, creamy, and delicious, and can be enjoyed after a
            meal, on the go, or whenever you're in the mood for a sweet treat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
