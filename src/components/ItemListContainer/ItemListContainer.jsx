import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/mock';
import ItemList from '../Item/ItemList';

function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (category) {
                const filteredProducts = res.filter((item) => item.category === category);
                setProducts(filteredProducts);
                } else {
                setProducts(res);
                }
                setLoading(false); 
            });

    
            return () => {
                setProducts([]);
                setLoading(true);
            };
    }, [category]);

    if (loading) {
        return <h2>Cargando Productos...</h2>;
    }

    return <ItemList products={products} />;
}

export default ItemListContainer;
