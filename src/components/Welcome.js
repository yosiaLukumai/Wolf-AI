import "../../src/App.css"
import {Image} from "./img"
import welcomePhoto from "../../src/icons/ai.png"

export const WelcomePost = () => {
    const altText  = "ai pic"
    return (
        <div className="Flex">
            <div> <Image altText={altText} imgsrc={welcomePhoto}/></div>
            <div><p className="captionText"> fastest video annotation tool</p></div>
        </div>
    )
}

