import React, { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import NavBar from "../components/NavBar.jsx";
import FollowBar from "../components/FollowBar.jsx";
import "../App.css";
import "./CreateVideo.css";

function CreateVideo() {
  const [selectedFile, setSelectedFile] = useState();

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

  const RecordView = () => {
    const {
      status,
      startRecording,
      stopRecording,
      mediaBlobUrl,
      previewStream,
    } = useReactMediaRecorder({ video: true });

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
    return (
      <div className="reactVideo">
        <p>{status}</p>
        <video ref={videoRef} src={mediaBlobUrl} controls autoPlay />
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
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
            <div className="reactVideoRecorder">{RecordView()}</div>
            <input type="file" name="file" onChange={changeHandler} />
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
              <p>Select a file to show details</p>
            )}
            <div>
              <button onClick={handleSubmission}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateVideo;
