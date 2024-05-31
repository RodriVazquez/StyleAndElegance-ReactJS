import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {

    const { cart, total, clearCart } = useContext (CartContext)
    

    return (

        <div>
            <h1>Carrito</h1>
            
            {cart.map ((prod) =>  
                <div key={prod.id}>
                    <h3>{prod.title}</h3>
                    <p>Precio por unidad: ${prod.price}</p>
                    <strong>Precio total: ${prod.price * prod.quantity}</strong>
                    <p>Cant: {prod.quantity}</p>
                    <br />
                </div>
            )}

            {
                cart.length > 0 ?
                <>
                    <h2>Precio Total: {total()}</h2>
                    <button onClick={clearCart}>Vaciar carrito</button>
                </> :
                <h3>Carrito vacío 😢</h3>
            }
        </div>
    )
}

export default Cart