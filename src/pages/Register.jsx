import React from "react";
import TextField from "@mui/material/TextField";

import "../styles/Register.css";
import Sidebar from "../components/Sidebar";

function Register() {
  return (
  <Sidebar>
      <div className="register__section">
      <div className="text__input__box">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="medium"
          fullWidth
        />
      </div>

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

      <p className="register__policy__para">
        By clicking Agree & Join, you agree to the LinkedIn{" "}
        <span>User Agreement, Privacy Policy, </span>and{" "}
        <span>Cookie Policy.</span>
      </p>

      <p className="join__button">Agree & join</p>

      <p className="or__text">or</p>

      <div className="register__with__google__button__container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"
          alt=""
        />
        <p>Sign in with Google</p>
      </div>

      <p className="already__have__an__account__text">
        Already have an account? <span>Sign in</span>
      </p>
    </div>
  </Sidebar>
  );
}

export default Register;
