import {useState, useEffect, useRef} from "react"
import {retriveData, save} from "./../utils/localStorage"
export const FileSetting = ({exitWindow}) => {
    const [sFormat, changeSformat] = useState(null) 
    const [showBlock, changeShowBlock] = useState(false)
    const [inputFilename, changeInputFilename] = useState("")
    const filename = useRef()
    useEffect(()=> {
        if(retriveData("defaultFile")) {
            changeSformat(retriveData("defaultFile"))
        }else {
            save("sample1", {count:0, scripts:[]})
            save("defaultFile", "sample1")
        }
    }, [])
    const download = (content, fileName, contentType)=> {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
      }
    const downloadFile = () => {
        console.log("---downloading the file----");
        let filenameAppended = sFormat + ".json"
        download(JSON.stringify(retriveData(sFormat)), filenameAppended, "application/json")
    }
    const changesformat = (e) => {
        if(showBlock) {
            if(inputFilename !== sFormat && inputFilename !== "") {
                // we can change the format of the file and update the location of the saved data path
                save("defaultFile", inputFilename)
                save(inputFilename, {count:0, scripts:[]})
                changeSformat(inputFilename)
                changeShowBlock(false)
                console.log("------------");
            }
            changeShowBlock(false)
        }else {
            changeShowBlock(true)
        }
    }

    const obtainNewValue= (e) => {
        changeInputFilename(e.target.value)
    }
    return (
        <div style={{paddingTop: "10px"}}>
            <h3 style={{textAlign:"center", color:"#264653"}}>Script settings</h3>
            <div style={{textAlign:"center"}}>
            {showBlock && <div ><label style={{color:"#264653", fontSize:"1.2rem", fontWeight:"bold"}}>File name<input type="text" maxLength={25} ref={filename}  onChange={(e)=> obtainNewValue(e)} ></input></label> </div>}
                <div style={{paddingTop:"15px", color:"#264653", fontSize:"1.2rem", fontWeight:"bold"}} >Saving as: <span style={{color:"#3a86ff"}}>{sFormat}.json</span>  <button onClick={()=>changesformat()} className="rename">{showBlock ? "Save changes": "Rename"}</button></div>
                <div style={{paddingTop:"15px"}}><button onClick={()=> downloadFile()} className="download">Download</button></div>
                <div style={{paddingTop:"25px"}}><button onClick={()=>exitWindow()} className="exit">EXIT</button></div>
            </div>
        </div>
    )
} 