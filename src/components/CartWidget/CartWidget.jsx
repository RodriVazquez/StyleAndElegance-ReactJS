import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget () {

    const { cartQuantity } = useContext(CartContext);

    return (
            <div className="cart">
                <Link className="cart-link" to="/carrito"> <CartIcon/> </Link> 
                <strong className="numberProds">
                    {cartQuantity()}
                </strong>
            </div>
    )
}

export default CartWidget;
