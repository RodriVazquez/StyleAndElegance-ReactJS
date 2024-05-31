


function ItemCounter({stock, decrement, increment, count, addToCart}) {

    return (
        <div>
            <h3>Stock:{ stock }</h3>
            <div>
                <button 
                    onClick={ decrement } 
                    disabled ={ count <= 0 } 
                > - </button>

                <span>{ count }</span>

                <button 
                    onClick={ increment } 
                    disabled ={ count >= stock }
                > + </button>
                <br /> 
                <button
                    onClick= { addToCart }
                    disabled= {count <= 0}
                > Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCounter;
