import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Home.css";
import { STATES } from "../Lib/Consts";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mobile: Yup.string()
    .matches(/^[5-9]{1}[0-9]{9}$/, "Invalid mobile")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Enter valid email id"),

  state: Yup.string().required("*Please select a State"),
  agree: Yup.boolean()
  .oneOf([true], "You must accept the terms")
  .required("You must accept the terms"),
});

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="sub-containers">
        <Formik 
        key="home"
          initialValues={{
            name: "",
            mobile: "",
            email: "",
            state: "",
            agree: false,
          }}
          validationSchema={SignupSchema} // Temporarily comment this out
          onSubmit={(values) => {
            console.log("Form submitted", values);
            navigate("/Verification");
          }}
        >
          {({ errors, touched, values, handleBlur, handleChange }) => (
            <Form className="form-section">
              <h1>Registration</h1>
              
              <div className="admission-form first-last-name">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <span className="error">{errors.name}</span>
                )}
              </div>

              <div className="admission-form">
                <input
                  type="number"
                  name="mobile"
                  placeholder="Enter Mobile No"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.mobile && touched.mobile && (
                  <span className="error">{errors.mobile}</span>
                )}
              </div>

              <div className="admission-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email ID"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="admission-form">
                <select
                  name="state"
                  placeholder="Enter Batch No"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" label="Select State" />
                  {STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && touched.state && (
                  <span className="error">{errors.state}</span>
                )}
              </div>

              {/* <div className="admission-form check-box">
                <label htmlFor="check">
                  <input
                    id="check"
                    name="check"
                    type="checkbox"
                    onChange={handleChange}
                  />
                </label>
                I Accept to the
                <a href="/">Terms & Conditions</a> and I understand that my
                personal data will be processed in accordance with the{" "}
                <a href="/">Nestlé privacy policy.</a> I understand that i can
                withdraw my consent at any time.
                {errors.check && <span className="error">{errors.check}</span>}
              </div> */}

              <div className="input-group admission-form">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="tandcBox"
                  />
                  <div className="check-info">
                    <p>
                      {" "}
                      I agree to the{" "}
                      <u className="terms-link">Terms & Conditions{""}</u> and I
                      understand that my personal <br />
                      data will be processed in accordance with the{" "}
                      <u className="terms-link">
                        Nestle privacy policy.
                        <br />
                        {""}
                      </u>{" "}
                      I understand that I can withdraw my consent at any time.
                    </p>
                  </div>
                </label>
                {errors.agree && touched.agree && (
                  <span className="error">{errors.agree}</span>
                )}
              </div>
              

              <div className="admission-form otp-btns">
                <button type="submit">Get OTP</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Home;
