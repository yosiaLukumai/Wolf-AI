import "./../App.css";
import { useState, useRef } from "react";
import { retriveData, save } from "./../utils/localStorage";
export const TypingBox = ({ file }) => {
  const [Script, changescript] = useState("");
  const textArea = useRef()
  const changeScriptWindow = (e) => {
    e.preventDefault();
    changescript(e.target.value);
  };
  const submit = () => {
    if(Script !== "") {
        // save("swahili_tras", {count:0, scripts:[]})
        let workingFileName = retriveData("defaultFile")
        let data =retriveData(workingFileName)
        data.count = data.count + 1;
        let fileDesc = {
            name:file.name,
            path:("/"+file.name),
            size: (file.size/(1024* 1024)).toFixed(1),
            script:Script,
        }
        data.scripts = [...data.scripts, fileDesc]
        save(workingFileName, data)
        textArea.current.value = ""
        console.log(retriveData(workingFileName));
    }
    
  };
  return (
    <>
      <div className="center" style={{ flexDirection: "column" }}>
        <div>
          <h3 style={{color:"#264653"}}>Write script....</h3>
        </div>
        <div className="textArea">
          <textarea className="text" ref={textArea} onChange={changeScriptWindow}></textarea>
        </div>
        <div>
          <button
            onClick={() => submit()}
            className="saveBut"
            style={{ marginTop: "4px" }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
