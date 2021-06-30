import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Screen from "./pages/Screen.jsx";
import ProfileWeb from "./pages/ProfileWeb.jsx";
import CreateVideo from "./pages/CreateVideo.jsx";
import "./App.css";
import Profile from "./pages/Profile.jsx";
import AddContext from "./contexts/AddContext.jsx";

function App() {
  const [play, setPlay] = React.useState(false);
  const [follow, setFollow] = React.useState(false);
  const [userVideos, setUserVideos] = React.useState([
    {
      id: 1,
      title: "Title video 1",
      src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
    },
    {
      id: 2,
      title: "Title video 2",
      src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
    },
    {
      id: 3,
      title: "Title video 3",
      src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
    },
    {
      id: 4,
      title: "Title video 4",
      src: "https://www.youtube.com/watch?v=4pO-HcG2igk",
    },
  ]);

  return (
    <div className="App">
      <AddContext.Provider
        value={{
          play,
          setPlay,
          follow,
          setFollow,
          userVideos,
          setUserVideos,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/webdesigner" exact component={ProfileWeb} />
            <Route path="/chat" exact component={Screen} />
            <Route path="/create" exact component={CreateVideo} />
          </Switch>
        </BrowserRouter>
      </AddContext.Provider>
    </div>
  );
}

export default App;
