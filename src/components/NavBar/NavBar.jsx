import Brand from "../Brand/Brand";
import CategoryList from "../CartegoryList/CategoryList";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"


function NavBar () {
    return  (
        <nav className="navBar">
            <Brand/>
            <CategoryList/>
            <CartWidget/>
        </nav>
    )

}

export default NavBar;