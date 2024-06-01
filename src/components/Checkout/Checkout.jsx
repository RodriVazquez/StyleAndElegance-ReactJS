import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import './Checkout.css'


const Checkout = () => {

    const [orderId, setOrderId] = useState("")
    const { cart, total, clearCart } = useContext (CartContext);
    const { register, handleSubmit } = useForm();

    const buyCart = (data) => {
        const order = {
            client: data,
            products: cart,
            total: total()
        }

        const orderRef = collection(db, "orders");

        addDoc (orderRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                clearCart();
            })
    }

    if (orderId) {
        return (
        <div>
            <h2>!Gracias por su compra!</h2>
            <p>Tu número de pedido es: {orderId}</p>
        </div>
    )}

    return (
        <div className="checkout">
            <form className="form-checkout" onSubmit={handleSubmit(buyCart)}>
                <h2 className="title-checkout">Finalizar compra</h2>

                <input type="text" placeholder="Ingresa tu nombre" autoComplete="off" {...register("name")}/>
                <input type="email" placeholder="Ingresa tu e-mail" autoComplete="off" {...register("email")}/>
                <input type="phone" placeholder="Ingresa tu teléfono" autoComplete="off" {...register("phone")}/>

                <button type="submit">Comprar</button>

            </form>
        </div>
    )
}


export default Checkout;