import React from "react";

import ButtonTchat from "./ButtonTchat.jsx";
import ButtonWeb from "./ButtonWeb.jsx";
import AddContext from "../contexts/AddContext.jsx";
import "./Css/FollowBar.css";

function FollowBar() {
  const [change, setChange] = React.useState(false);
  const { play } = React.useContext(AddContext);
  const { follow } = React.useContext(AddContext);

  return (
    <>
      <div className="followbar">
        {change === true && (
          <>
            <button
              className="btnChange"
              type="button"
              onClick={() => setChange(!change)}
            >
              Following
            </button>

            {follow === true && <ButtonWeb />}
          </>
        )}

        {change === false && (
          <>
            <button
              className="btnChange"
              type="button"
              onClick={() => setChange(!change)}
            >
              Chat
            </button>
            {play === true && <ButtonTchat />}
          </>
        )}
      </div>
    </>
  );
}

export default FollowBar;
