import CartIcon from "../CartIcon/CartIcon";
import "./CartWidget.css"

function CartWidget () {
    return (
        <div className="cart">
            <CartIcon/>
            <strong>4</strong>
        </div>
    )
}

export default CartWidget;
