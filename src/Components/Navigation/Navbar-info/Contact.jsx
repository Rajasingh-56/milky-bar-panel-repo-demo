import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p className="note">Corporate Office</p>
          <p>Nestlé India Ltd.</p>
          <p>
            Nestlé House, Jacaranda Marg M Block DLF City Phase II, National
            Highway 8 Gurgaon 122002, India
          </p>
        </div>
        <div className="contact-info">
          <p className="note">Important Phone Numbers</p>
          <p>
            Nestlé Head Office <br />
            Tel: +91 124 238 93 00 <br /> Fax: +91 124 238 93 99
          </p>
          <br />
          <p>
            Journalist Enquiries <br />
            Tel: +91 124 3321824 / 1275
          </p>
          <br />
          <p>
            Milkybar is a white chocolate brand owned by Nestlé. It's made with
            natural ingredients and is known for its creamy texture. Milkybar is
            made with sustainably sourced cocoa from the Nestlé Cocoa Plan,
            which is certified by the Rainforest Alliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
