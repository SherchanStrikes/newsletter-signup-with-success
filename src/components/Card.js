import React, { useState, useEffect } from "react";
import logo from "../assets/illustration-sign-up-desktop.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
  // const notify = () => ;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Regular expression for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    setIsValid(emailPattern.test(inputEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isValid && email !== ''){
        navigate("/success/" + document.getElementById("myInput").value);
    }else{
      toast("Invalid!")
    }
  };

  return (
    <div
      className="bg-CharcoalGrey d-flex justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="row flex-row-md-reverse flex-row-reverse shadow-lg p-3 mb-md-5 bg-body-tertiary rounded-5 m-2 my-md-5 mx-md-3">
      <div className="col-md-5  d-flex justify-content-center">
          <img src={logo} className="w-100 rounded-start " alt="..." />
        </div>
        <div className="col-md-7  py-md-5">
          <div className="col-md-10 px-md-5">
            <header
              className="py-2 pt-4 text-DarkSlateGrey"
              style={{ fontWeight: 700, fontSize: "3rem", lineHeight: "3rem" }}
            >
              Stay updated!
            </header>
            <p className=" py-2">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="p-0 " style={{ listStyle: "none" }}>
              <li
                className="text-DarkSlateGrey d-flex py-2 "
                style={{ fontWeight: 400 }}
              >
                <span className="pe-3 ">
                  <i className="bi bi-check-circle-fill text-primary" />
                </span>
                Product discovery and building what matters
              </li>
              <li
                className="text-DarkSlateGrey d-flex py-2 "
                style={{ fontWeight: 400 }}
              >
                <span className="pe-3 ">
                  <i className="bi bi-check-circle-fill text-primary" />
                </span>
                Measuring to ensure updates are a success
              </li>
              <li
                className="text-DarkSlateGrey d-flex py-2 "
                style={{ fontWeight: 400 }}
              >
                <span className="pe-3 ">
                  <i className="bi bi-check-circle-fill text-primary" />
                </span>
                And much more!
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label
                    for="exampleInputEmail1"
                    className="form-label fw-bold text-DarkSlateGrey"
                  >
                    Email address
                  </label>
                  {!isValid && (
                    <span
                      className="error-text text-primary"
                      style={{ fontWeight: 700 }}
                    >
                      Valid email required
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  className={`form-control custom-input ps-3 ${
                    isValid ? "" : "bg-primarylight border-primary"
                  }`}
                  id="myInput"
                  aria-describedby="emailHelp"
                  placeholder="email@company.com"
                />

                <div className="my-3 d-flex justify-content-center">
                  <button
                    className={`btn activeBtn w-100 py-3 text-white btn-DarkSlateGrey`}
                    style={{ fontWeight: 700 }}
                  >
                    Subscribe to monthly newsletter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
