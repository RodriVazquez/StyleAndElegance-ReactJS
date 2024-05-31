
import { Link } from "react-router-dom";
import "./CategoryList.css"
import CartWidget from "../CartWidget/CartWidget";


function CategoryList () {
    return (
        <ul className="list">
            <li className="listLi"><Link className="listItem" to="/">Inicio</Link></li>
            <li className="listLi"><Link className="listItem" to="/productos/remeras">Remeras</Link></li>
            <li className="listLi"><Link className="listItem" to="/productos/pantalones">Pantalones</Link></li>
            <li className="listLi"><Link className="listItem" to="/productos/buzos">Buzos</Link></li>
            <li className="listLi"><Link className="listItem" to="/productos/calzado">Calzado</Link></li>
            <li className="listItem-cart" to="/carrito"> <CartWidget/> </li>
            
        </ul>
    )
}

export default CategoryList;