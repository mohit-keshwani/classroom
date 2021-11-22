import React from "react"
import logo from "../../Assets/submission.png";
import { useLocalContext } from "../../context/context";
import { Box, Button } from "@material-ui/core";
import "./Login.css";

const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div class="bod">
    <div class="container">
  <div class="box"></div>
  <div class="container-forms">
    <div class="container-info">
      <div class="info-item">
      </div>
      <div class="info-item">
        <div class="table">
          <div class="table-cell">
            <p>
              Don't have an account? 
            </p>
            <Button variant="contained" color= "primary" onClick={() => login()}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-form">
      <div class="form-item log-in">
        <div class="table">
          <div class="table-cell">
            <input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
            <Box textAlign='center'>
            <Button variant="contained" color= "primary" onClick={() => login()}>
              Log In
            </Button>
            </Box>
          </div>
        </div>
      </div>
      <div class="form-item sign-up">
        <div class="table">
          <div class="table-cell">
            <input name="email" placeholder="Email" type="text" /><input name="fullName" placeholder="Full Name" type="text" /><input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
            <div class="btn">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Login;
