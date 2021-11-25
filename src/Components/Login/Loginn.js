import React from "react"
import { useLocalContext } from "../../context/context";
import { Box, Button } from "@material-ui/core";
import 'firebase/firestore'
import { MicrosoftLoginButton, GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import "./Login.css";
import $ from 'jquery';


(function() {
  $(function() {
    $(".info-item .btn").click(function(){
  $(".container").toggleClass("log-in");
});
$(".container-form .btn").click(function(){
  $(".container").addClass("active");
});
  });

}).call(this);


const Loginn = () => {
  const { login, loggedInUser, loginGit, loginMicrosoft } = useLocalContext();
  console.log(loggedInUser);
  return (
    <div class="bod">
    <div class="container">
  <div class="box"></div>
  <div class="container-forms">
    <div class="container-info">
      <div class="info-item">
        <div class="table">
          <div class="table-cell">
            <p>
              Have an account?
            </p>
            <div class="btn">
              Log in
            </div>
          </div>
        </div>
      </div>
      <div class="info-item">
        <div class="table">
          <div class="table-cell">
            <p>
              Don't have an account? 
            </p>
            <div class="btn">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-form">
      <div class="form-item log-in">
        <div class="table">
          <div class="table-cell">
            <input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
            <Box textAlign= 'center'>
            <Button variant="contained" color= "primary" onClick={() => loginMicrosoft()}>
              Log In
            </Button>
            <MicrosoftLoginButton onClick={() => loginMicrosoft()} size = "40px" />
            <GoogleLoginButton onClick={() => login()} size = "40px" />
            <GithubLoginButton onClick={() => loginGit()} size = "40px" />
            </Box>
          </div>
        </div>
      </div>
      <div class="form-item sign-up">
        <div class="table">
          <div class="table-cell">
            <input name="email" placeholder="Email" type="text" /><input name="fullName" placeholder="Full Name" type="text" /><input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" />
            <Box textAlign= 'center'>
            <Button variant="contained" color= "primary" onClick={() => loginMicrosoft()}>
              Sign up
            </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
)}

export default Loginn;