import React, { useState } from "react";
import "./Auth.css";
import icon from "../../assets/logo.png";
import eyeIcon from "../../assets/eye-icon.svg";
import eyeSlashIcon from "../../assets/eye-slash-icon.svg";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter an email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name  to continue...");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container">
        {!isSignup && (
          <img src={icon} alt="QuestionPucho" className="login-logo" />
        )}
        <div className="auth-form-container">
          <h1>{isSignup ? "Create your account" : ""}</h1>
          {isSignup && (
            <p className="auth-agreement">
              By clicking “Sign up”, you agree to our
              <span className="link"> terms of service</span> and acknowledge
              you have read our
              <span className="link"> privacy policy</span>.
            </p>
          )}
          {isSignup && (
            <label htmlFor="username" className="user">
              <h4 className="font">UserName</h4>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              <h4 className="font">Email</h4>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label htmlFor="password">
              <div className="pass-div">
                <h4 className="font">Password</h4>
                {!isSignup && <a href="">Forgot password?</a>}
                
                
              </div>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="toggle-password-visibility"
                >
                  <img
                    src={showPassword ? eyeSlashIcon : eyeIcon}
                    alt={showPassword ? "Hide password" : "Show password"}
                    width="24"
                    height="24"
                  />
                </span>
              </div>
              {isSignup && (
                <p className="password-requirements">
                  Must contain 8 characters, including at least 1 letter and 1
                  number
                </p>
              )}
            </label>
            <button type="submit" className="auth-btn">
              {isSignup ? "Sign up" : "Log in"}
            </button>
            <hr />
          </form>
        </div>
        <p className="text">
          {isSignup ? "Already have an account?" : "Don't have an account?  "}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? (
              <span style={{ color: "#1B75D0" }}> Log in</span>
            ) : (
              <span style={{ color: "#1B75D0" }}> Sign up</span>
            )}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
