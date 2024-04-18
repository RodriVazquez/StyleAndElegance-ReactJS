import logo from "../assets/logo.png"
import "./Brand.css"


function Brand () {
    return (
        <div>
            <img className="logo" src={logo} alt="logo S&E" />
        </div>
    )
}

export default Brand;