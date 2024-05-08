import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Brand.css"


function Brand () {
    return (
        
            <Link to="/">
                <img className="logo" src={logo} alt="logo S&E" />
            </Link>
        
    )
}

export default Brand;