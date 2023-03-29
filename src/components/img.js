import "./../styles/basic.css"
import PropTypes from "prop-types"
export const Image = ({imgsrc, altText}) => {
    return (
        <img src={imgsrc} alt={altText} className="imgAuto"></img>
    )
}

Image.propTypes  = {
    imgsrc: PropTypes.string.isRequired,
    altText: PropTypes.string,
}