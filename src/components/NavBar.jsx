import Brand from "./Brand";
import CategoryList from "./CategoryList";
import CartWidget from "./CartWidget";
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