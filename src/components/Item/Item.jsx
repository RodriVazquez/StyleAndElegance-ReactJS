import { Link } from "react-router-dom";
import "./Item.css"

export default function Item({ Item }) {

    const { id, image, title, price, stock } = Item;

    return (
        <div className="card" key={id}>
            <img className="cardImg" src={image} alt="img-product" />
            <h2 className="cardTitle">{title}</h2>
            <p>Stock disponible: {stock}</p>
            <strong className="cardPrice">${price}</strong>
            <Link to={`/item/${id}`}>Ver más</Link>
        </div>
    );
}