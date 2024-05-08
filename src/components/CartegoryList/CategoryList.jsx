
import { Link } from "react-router-dom";
import "./CategoryList.css"


function CategoryList () {
    return (
        <ul className="list">
            <li className="listLi"><Link className="listItem" to="/">Inicio</Link></li>
            <li className="listLi"><Link className="listItem" to="/productos/remeras">Remeras</Link></li>
            <li className="listLi"><Link className="listItem" to="/productos/pantalones">Pantalones</Link></li>
            <li className="listLi"><Link className="listItem" to="/productos/buzos">Buzos</Link></li>
            <li className="listLi"><Link className="listItem" to="/productos/calzado">Calzado</Link></li>
        </ul>
    )
}

export default CategoryList;