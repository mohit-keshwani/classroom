import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, Input, InputLabel, Avatar, Dialog, Slide, TextField } from "@material-ui/core";
import "./Todo.css";
import db from "../../lib/firebase";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalContext } from "../../context/context";
import { Update } from "@material-ui/icons";
import { Close } from "@material-ui/icons";
import { UpdateTodo } from ".."

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide directon="up" ref={ref} {...props} />
});

const App = () => {
    const {todoClassDialog, setTodoClassDialog, loggedInUser, login, loggedInMail} = useLocalContext();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  //const isUser = isAuthenticated && user;
  //const firebaseUser = isUser;
  useEffect(() => {
    if (loggedInMail) {
      db.collection(loggedInMail)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setTodos(
            snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
          );
        });
    }
  }, [loggedInMail]);
  //const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  // console.log(timestamp);

  console.log("isuser", loggedInMail);
  const addTodo = (event) => {
    event.preventDefault();
    if (loggedInUser.email) {
      db.collection(loggedInUser.email).add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setInput("");
    }
  };

  // const timestamp = new Date(timestamp?.toDate()).toUTCString();
  return (
        <div className="Appp">
        <Dialog
                fullScreen
                open={todoClassDialog}
                onClose={() => setTodoClassDialog(false)}
                TransitionComponent={Transition}
            >
            <div className="joinClass__wrapper">
            <div
              className="joinClass__wraper2"
              onClick={() => setTodoClassDialog(false)}
            >
              <Close className="joinClass__svg" />
              <div className="joinClass__topHead">To-Do</div>
            </div>
          </div>

          <Box textAlign='center' >
          
            {loggedInUser && (
                <h4>
                
                <div>

                </div>
                </h4>
              )}

              <h1>Your To-Do List </h1>
              <h4>    
              
              </h4>
              <form>
                <FormControl>
                <h4> </h4>
                  <InputLabel>✅ Write A To-do</InputLabel>
                  <Input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                  />
                  <Button
                  disabled={!input}
                  type="submit"
                  onClick={addTodo}
                  variant="contained"
                  color="primary"
                >
                  Add Todo
                </Button>
                </FormControl>
              </form>
              </Box>


               <ul>
                {todos.map((todo, index) => (
                  <UpdateTodo
                    passedTodo={todo}
                    index={index}
                    firebaseUser={loggedInUser.email}
                    key={index}
                  />
                ))}
              </ul>
              </Dialog>
            </div>
  );
}

export default App;