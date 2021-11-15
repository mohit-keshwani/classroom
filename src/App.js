import React, { useEffect, useState } from "react";
import { Drawer, Login } from "./Components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from './routes/Routes';
import { useLocalContext } from "./context/context"
function App() {
  const {loggedInMail } = useLocalContext();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
        user ={loggedInMail}
        loggedInPath='/'
        path='/signin'exact>
          <Login/>
        </IsUserRedirect>

        <ProtectedRoute user={loggedInMail} path="/" exact>
          <Drawer />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
