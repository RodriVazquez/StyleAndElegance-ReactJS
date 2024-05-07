
import ItemDetails from "./ItemDetails";
import "./ItemDetails.css"

export default function ItemList({ products }) {
    return (
        <div className="cardContainer"> 
            {products.map((product) => (
                <ItemDetails key={product.id} ItemDetails={product} />
                // Corrige la llamada al componente ItemDetails y pasa la prop 'ItemDetails'
            ))}
        </div>
    );
}