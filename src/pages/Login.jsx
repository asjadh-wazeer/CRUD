import React from "react";
import TextField from "@mui/material/TextField";
import HomeImage from "../assets/LoginPageImg.svg";

import "../styles/Login.css";
function Login() {
  return (
    <div className="login__section">
      <div className="login__section__left__container">
        <div className="text__input__box">
          <TextField
            id="outlined-basic"
            label="Email or Phone"
            variant="outlined"
            size="medium"
            fullWidth
          />
        </div>

        <div className="text__input__box ">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="medium"
            fullWidth
          />
        </div>

        <p className="forgot__password">Forgot Password?</p>

        <p className="signin__button">Sign in</p>

        <p className="or__text">or</p>

        <div className="signin__with__google__button__container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"
            alt=""
          />
          <p>Sign in with Google</p>
        </div>
        <p className="new__to__our__page__button">New to our page? Join now</p>
      </div>

      <div className="login__section__right__container">
        <img src={HomeImage} alt="" />
      </div>
    </div>
  );
}

export default Login;
