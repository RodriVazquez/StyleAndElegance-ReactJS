import { useEffect, useState } from "react";
import { getProducts } from "../data/mock";


export default function useProds () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true)
    useEffect(() => {
    getProducts()
        .then((data) => {setProducts(data)})
        .catch((error) => console.error('Error al obtener productos:', error))  
        .finally (()=> setLoading(false))
    }, []); 
    return { products, loading }
}