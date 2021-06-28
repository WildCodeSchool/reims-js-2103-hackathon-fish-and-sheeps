import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import "./Css/VideoProfile.css";

function VideoProfile({ title, src }) {
  return (
    <div className="user__video">
      <p>{title}</p>
      <ReactPlayer height={"100%"} width={"100%"} url={src} />
    </div>
  );
}

VideoProfile.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default VideoProfile;
