import "./../App.css";
import {FileSetting} from "./fileSetting"
import {TypingBox} from "./BoxTyping"
// import {useState} from "react"
// import { fileSetting } from "./fileSetting";
export const MediaPlayer = ({ file, exitWindow }) => {
 
  const createMediaURL = () => {
    return URL.createObjectURL(file);
  };

  


  const audioPlayer = () => {
    return (
      <>
      <div className="divideTwo">
        <div className="centerMedia mediaStyle">
          <div style={{ paddingTop: "6px" }}>
            <h4 style={{ textAlign: "center",color:"#264653" }}>Audio Player</h4>
          </div>
          <iframe
            className="audioPlayer"
            src={createMediaURL()}
            title={file.name}
            about={file.name}
          ></iframe>
         
        </div>
        <div className="desc">
        <FileSetting exitWindow={exitWindow}/>
        </div>
        </div>
       
      </>
    );
  };
  const videoPlayer = () => {
    return (
      <>
      <div className="center">
      <iframe
          className="videoPlayer"
          src={createMediaURL()}
          title={file.name}
          about={file.name}
        ></iframe>
         <div className="desc">
        <FileSetting exitWindow={exitWindow}/>
        </div>
      </div>
       
      </>
    );
  };
  return (
    <>
      <div className="">
        {file.type.slice(0, 5) === "audio" ? audioPlayer() : videoPlayer()}
        <TypingBox file={file}/>
      </div>
    
    </>
  );
};
