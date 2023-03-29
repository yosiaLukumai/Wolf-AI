import './App.css';
import { Header } from "./components/Header"
import { Uploader } from "./components/Uploader"
import { WelcomePost } from "./components/Welcome"
import {MediaPlayer} from "./components/MediaPlayer"
import { useState } from "react"
// import {useState} from "react"
function App() {
  const [file, setFiles] = useState(null)
  const closeAllWindow = ()=> {
    setFiles(null)
  }
  const handleFiles = (filesReceived) => {
    if (filesReceived.length === 1 && checkTypeFile(filesReceived[0].type)) {
      setFiles(filesReceived[0])
    }
  }
  const checkTypeFile = (fileType) => {
    fileType = fileType.slice(0, 5)
    if(fileType === 'audio' || fileType === 'video') {
      return true;
    }
    return false;
  }
  let welcomeScreen = () => {
    return (<>
      <Header />
      <WelcomePost />
      <Uploader handleFiles={handleFiles} />
    </>)
  }
  return (
    <div className="App">
      {!file && welcomeScreen()}
      {file && <MediaPlayer exitWindow={closeAllWindow} file={file}/>}
    </div>
  );
}

export default App;
