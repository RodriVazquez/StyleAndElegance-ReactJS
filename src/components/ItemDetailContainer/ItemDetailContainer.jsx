import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config";

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

        const docRef = doc(db, "products", id)
        getDoc(docRef)
            .then ((res) => {
                setItem(
                    { ...res.data(), id: res.id }
                );
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
