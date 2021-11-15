import React, { useState } from "react";
import { Avatar, Button, Dialog, Slide, TextField } from "@material-ui/core";
import { useLocalContext } from "../../context/context";
import { Close } from "@material-ui/icons";
import "./style.css";
import db from "../../lib/firebase";

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide directon="up" ref={ref} {...props} />
});

const JoinClass = () => {
    const {joinClassDialog, setJoinClassDialog, loggedInUser} = useLocalContext();
    return(
        <div>
            <Dialog
                fullScreen
                open={joinClassDialog}
                onClose={() => setJoinClassDialog(false)}
                TransitionComponent={Transition}
            >
            <div className="joinClass">
          <div className="joinClass__wrapper">
            <div
              className="joinClass__wraper2"
              onClick={() => setJoinClassDialog(false)}
            >
              <Close className="joinClass__svg" />
              <div className="joinClass__topHead">Join Club</div>
            </div>
            <Button
              className="joinClass__btn"
              variant="contained"
              color="primary"
            >
              Join
            </Button>
          </div>
          <div className="joinClass__form">
            <p className="joinClass__formText">
              You're currently signed in as {loggedInUser?.email}
            </p>
            <div className="joinClass__loginInfo">
              <div className="joinClass__classLeft">
                <Avatar src={loggedInUser?.photoURL} />
                <div className="joinClass__loginText">
                  <div className="joinClass__loginName">
                    {loggedInUser?.displayName}
                  </div>
                  <div className="joinClass__loginEmail">
                    {loggedInUser?.email}
                  </div>
                </div>
              </div>
              <Button variant="outlined" color="primary">
                Logout
              </Button>
            </div>
          </div>
          <div className="joinClass__form">
            <div
              style={{ fontSize: "1.25rem", color: "#3c4043" }}
              className="joinClass__formText"
            >
              Club Code
            </div>
            <div
              style={{ color: "#3c4043", marginTop: "-5px" }}
              className="joinClass__formText"
            >
              Ask your club's admin for the class code, then enter it here.
            </div>
            <div className="joinClass__loginInfo">
              <TextField
                id="outlined-basic"
                label="Class Code"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Owner's email"
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default JoinClass;
