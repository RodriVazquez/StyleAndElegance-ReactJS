import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsForId } from "../../data/mock";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";


export default function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
    
        getProductsForId(Number(id))
            .then ((res)=> {
                setItem(res);
            })
    }, [id]);

    return (
        <div className="cardContainer-detail">
            {
            item ? (<ItemDetail item={item} />) : (<p>Cargando producto o producto no encontrado.</p>)
            }
        </div>
    );
}
