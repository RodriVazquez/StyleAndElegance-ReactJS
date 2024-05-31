import Brand from "../Brand/Brand";
import CategoryList from "../CartegoryList/CategoryList";
import "./NavBar.css"


function NavBar () {
    return  (
        <nav className="navBar">
            <Brand/>
            <CategoryList/>
        </nav>
    )

}

export default NavBar;