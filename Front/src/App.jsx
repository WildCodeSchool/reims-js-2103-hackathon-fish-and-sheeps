import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Screen from "./pages/Screen.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/screen" exact component={Screen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
