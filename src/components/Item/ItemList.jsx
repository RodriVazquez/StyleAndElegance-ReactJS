
import Item from "./Item";
import "./Item.css"

export default function ItemList({ products }) {
    return (
        <div className="cardContainer"> 
            {products.map((product) => (
                <Item key={product.id} Item={product} />
            ))}
        </div>
    );
}