import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();



export const CartProvider = ({ children }) => {

    const getInitialCart = () => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    };

    
    const [cart, setCart] = useState(getInitialCart);

    const addToCart = (item, count, stock) => {
        // Verifica si la cantidad deseada excede el stock disponible antes de continuar con la FN. Si es así, termina acá.
        if (count > stock) {
            alert("La cantidad deseada excede el stock disponible");
            return; // Si este if es true, la función termina acá 
        }
    
        const itemInCart = { ...item };
        itemInCart.quantity = count;
    
        const newCart = [...cart];
        const inCart = newCart.find((prod) => prod.id === itemInCart.id);
    
        if (inCart) {
            // Verifica si la cantidad total en el carrito más la cantidad deseada excede el stock
            if (inCart.quantity + count > stock) {
                alert("La cantidad total deseada excede el stock disponible");
            } else {
                inCart.quantity += count;
            }
        } else {
            newCart.push(itemInCart);
        }
    
        setCart(newCart);
    };

    const cartQuantity = () => {
        return cart.reduce ((acc, prod)=> acc + prod.quantity, 0);
    }

    const total = () => {
        return cart.reduce ((acc, prod)=> acc + prod.price * prod.quantity, 0);
    }

    const clearCart = () => {
        setCart ([])
    }

    useEffect (() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            cartQuantity, 
            total, 
            clearCart 
        }}>
            {children}
        </CartContext.Provider>
    );
};