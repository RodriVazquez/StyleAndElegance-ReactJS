


function ItemCounter({stock, decrement, increment, count}) {

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
                
            </div>
        </div>

    )
}

export default ItemCounter;

// este componente lo tengo que llamar en la card que se genera en ver mas