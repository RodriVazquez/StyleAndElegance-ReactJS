import useCounter from "../../hooks/useCounter";
import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.css"


export default function ItemDetail ({ item }) {
    const { count, increment, decrement } = useCounter(0);

        if (!item) {
            return <p>Producto no encontrado.</p>;
        }
    
        const { id, image, title, price, stock, category, description } = item;
    
        return (
        
            <div className="card-detail-container" key={id}>
                <img className="cardImg-detail" src={image} alt={title} />
                <div className="card-detail">
                    <h2 className="cardTitle-detail">{title}</h2>
                    <p className="cardCategory-detail">Categoria: {category}</p>
                    <p className="cardDescription-detail">Descripción: {description}</p>
                    <strong className="cardPrice-detail">${price}</strong>
                    <div>
                    <ItemCounter
                        count={count}
                        decrement={decrement}
                        increment={increment}
                        stock={stock}
                    />
                    </div>
                </div>
            </div>
        );
    };