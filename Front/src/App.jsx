import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Screen from "./pages/Screen.jsx";
import "./App.css";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/screen" exact component={Screen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
