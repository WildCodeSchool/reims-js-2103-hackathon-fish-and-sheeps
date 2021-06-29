import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Screen from "./pages/Screen.jsx";
import ProfileWeb from "./pages/ProfileWeb.jsx";
import "./App.css";
import Profile from "./pages/Profile.jsx";
import AddContext from "./contexts/AddContext.jsx";

function App() {
  const [play, setPlay] = React.useState(false);
  const [follow, setFollow] = React.useState(false);
  return (
    <div className="App">
      <AddContext.Provider value={{ play, setPlay, follow, setFollow }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/webdesigner" exact component={ProfileWeb} />
            <Route path="/chat" exact component={Screen} />
          </Switch>
        </BrowserRouter>
      </AddContext.Provider>
    </div>
  );
}

export default App;
