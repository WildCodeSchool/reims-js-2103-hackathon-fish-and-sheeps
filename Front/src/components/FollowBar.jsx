import React from "react";
import ButtonContact from "./ButtonContact.jsx";
import ButtonTchat from "./ButtonTchat.jsx";
import "./Css/FollowBar.css";

function FollowBar() {
  const [change, setchange] = React.useState(false);

  return (
    <>
      <div className="followbar">
        {change === true && (
          <>
            <button
              className="btnChange"
              type="button"
              onClick={() => setchange(!change)}
            >
              Following
            </button>
            <ButtonContact />
          </>
        )}

        {change === false && (
          <>
            <button
              className="btnChange"
              type="button"
              onClick={() => setchange(!change)}
            >
              Tchat
            </button>
            <ButtonTchat />
          </>
        )}
      </div>
    </>
  );
}

export default FollowBar;
