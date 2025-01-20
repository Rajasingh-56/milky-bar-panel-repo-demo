import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Verification.css";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Verification = () => {
  const [otp, setOtp] = useState("");
  const [countDown, setCountDown] = useState(10);
  const [otpResent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (countDown > 0) {
      const intervalId = setInterval(() => {
        setCountDown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [countDown]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleResendOtp = () => {
    console.log("Resending OTP...");
    setCountDown(10);
  };

  const handleVerify = () => {
    console.log("Verifying OTP:", otp);
    navigate("/quiz");
  };

  return (
    <div className="container">
      <div className="sub-containers">
        <Formik
          key="verify"
          initialValues={{
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // console.log(values, action.resetForm());
          }}
        >
          {({ errors, touched, values, handleBlur }) => (
            <Form className="forms-section">
              <h1 className="info">Verification</h1>
              <div className="admissions-forms">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter 4 Digit OTP"
                  value={otp}
                  onChange={handleOtpChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <div className="resend-info">
                <label>
                  {countDown > 0
                    ? `Resend OTP in ${countDown} seconds`
                    : "Did not receive One Time Password yet?"}
                </label>
                <p className="resend-link">
                  <a
                    href="#"
                    onClick={handleResendOtp}
                    disabled={countDown > 0 || otpResent}
                  >
                    Resend
                  </a>
                </p>
              </div>

              <div className="admission-form submit-btn">
                <button type="submit" onClick={handleVerify}>
                  Verify OTP
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Verification;
