import '../style/style.css';
import '../style/menu.css';
import { MdKeyboardArrowRight } from "react-icons/md";

export const ArrowButton = () => {

    const openMenu = (e) => {
        
    }

    return(
        <div className="buttonDiv">
            <button className="arrowButton">
                <a href="javascript:void(0)" className="openButton" onClick={openMenu}><MdKeyboardArrowRight /></a>
            </button>
        </div>
    );

}

export default ArrowButton