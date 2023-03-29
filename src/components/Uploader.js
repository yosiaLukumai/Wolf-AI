import "./../App.css";
import dragIcon from "../icons/drag.png";
import { useRef } from "react";
export const Uploader = ({ handleFiles }) => {
  // const [files, setFiles] = useState(null)
  const inputRef = useRef();
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };
  const setFilesFromUI = (files) => {
    handleFiles(files);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="boxSize"
      >
        <div
          className={`dragDiv`}
          onDragOver={handleDragOver}
          onDrop={handleDragDrop}
        >
          <div>
            <img className="imgClass" src={dragIcon} alt="drag-icon"></img>
          </div>
          <div>drag file here</div>
        </div>
        <div className="dragButton" onClick={() => inputRef.current.click()}>
          <input
            type="file"
            multiple
            hidden
            onChange={(event) => setFilesFromUI(event.target.files)}
            ref={inputRef}
          />
          upload the file
        </div>
      </div>
    </>
  );
};
