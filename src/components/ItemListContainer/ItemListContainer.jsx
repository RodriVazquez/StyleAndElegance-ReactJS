import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../Item/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../firebase/config"



function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const category = useParams().category;
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
		const prodRef = collection(db, "products");
        if (!category) {
            getDocs(prodRef)
                .then ((res) => {
                    setProducts(
                        res.docs.map((doc) => {
                            return { ...doc.data(), id: doc.id }
                        })
                    );
                    setLoading(false);
                })
            
        } else {
            const prodRef = collection(db, "products");
            const q = query(prodRef, where("category", "==", category));

            getDocs(q)
                .then((res) => {
                    setProducts(
                        res.docs.map((doc) => {
                            return { ...doc.data(), id: doc.id }
                        })
                    );
                    setLoading(false);
                });
        }
    }, [category]);

    if (loading) {
        return <h2>Cargando Productos...</h2>;
    }

    return <ItemList products={products} />;
}

export default ItemListContainer;
