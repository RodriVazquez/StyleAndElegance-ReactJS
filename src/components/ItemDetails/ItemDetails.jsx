import useCounter from "../../hooks/useCounter";
import ItemCounter from "../ItemCounter/ItemCounter"; 
import "./ItemDetails.css";


export default function ItemDetails({ ItemDetails }) {
    const { count, increment, decrement } = useCounter(0);

    const { id, image, title, price, stock } = ItemDetails; // Extrae las propiedades de ItemDetails

    return (
        <div className="card" key={id}>
            <img className="cardImg" src={image} alt="img-product" />
            <h2 className="cardTitle">{title}</h2>
            <strong className="cardPrice">${price}</strong>
            <div>
                <ItemCounter
                    count={count}
                    decrement={decrement}
                    increment={increment}
                    stock={stock}
                />
            </div>
        </div>
    );
}