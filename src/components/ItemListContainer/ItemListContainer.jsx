
import "./ItemListContainer.css"
import useProds from "../../hooks/useProds"
import ItemList from "../ItemDetails/ItemList";


function ItemListContainer() {
    const { loading, products } = useProds();

    if (loading) {
        return <h2>Cargando Productos...</h2>;
    }

    return (
            <ItemList products={products} />
    );
}

export default ItemListContainer;