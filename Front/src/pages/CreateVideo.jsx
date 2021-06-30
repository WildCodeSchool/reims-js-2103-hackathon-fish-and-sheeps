import React, { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl, faStop } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import "../components/Css/CreateVideo.css";
import "./CreateVideo.css";

function CreateVideo({ userVideos, myVideoTitle, setMyVideoTitle }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isRecording, setIsRecording] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);

    fetch("http://localhost:8000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // RECORD COMPONENT FUNCTION CALLED IN LINE 69
  const getUserTitle = (e) => {
    setMyVideoTitle(e.target.value);
  };

  const RecordView = () => {
    const { startRecording, stopRecording, mediaBlobUrl, previewStream } =
      useReactMediaRecorder({
        video: true /* add this line to access stream functionality
      'screen: true' */,
      });

    const myStartRecording = () => {
      startRecording();
      setIsRecording(true);
    };

    const myStopRecording = () => {
      stopRecording();
      setIsRecording(false);
    };

    const videoRef = useRef();
    useEffect(() => {
      if (videoRef.current == null) {
        return;
      }

      if (previewStream?.active) {
        videoRef.current.srcObject = previewStream;
      } else {
        videoRef.current.srcObject = null;
      }
    }, [previewStream]);

    const url = `http://localhost:5000/api/upload`;
    console.log(myVideoTitle);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myVideoTitle),
    };

    const postToServer = () => {
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          userVideos.push(data);
        });
    };

    return (
      <div className="reactVideo">
        <video id="video" ref={videoRef} src={mediaBlobUrl} controls autoPlay />
        <div className="videoButtons">
          <button className="startRecording" onClick={myStartRecording}>
            <FontAwesomeIcon
              className={isRecording ? "iconNotRecording" : "iconRecording"}
              icon={faRecordVinyl}
            />{" "}
            Start Recording
          </button>
          <button className="stopRecording" onClick={myStopRecording}>
            Stop Recording{" "}
            <FontAwesomeIcon
              className={isRecording ? "iconRecording" : "iconNotRecording"}
              icon={faStop}
            />
          </button>
        </div>
        <button
          type="button"
          role="button"
          className="publish__button"
          onClick={postToServer}
        >
          Post
        </button>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <FollowBar />
        <div className="search">
          <div className="records">
            <label id="label" htmlFor="videoTitle">
              Your video Title goes here
            </label>
            <input
              type="text"
              name="videoTitle"
              id="title"
              onChange={getUserTitle}
            />
            <div className="reactVideoRecorder">{RecordView()}</div>
            <input
              className="load"
              id="post"
              type="file"
              name="file"
              onChange={changeHandler}
            />
            {selectedFile != null ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {new Date(selectedFile.lastModified).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p id="select">Select a file to show details</p>
            )}
            <div>
              <button className="btnSubmit" onClick={handleSubmission}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CreateVideo.propTypes = {
  userVideos: PropTypes.string.isRequired,
  myVideoTitle: PropTypes.string.isRequired,
  setMyVideoTitle: PropTypes.func.isRequired,
};
export default CreateVideo;
