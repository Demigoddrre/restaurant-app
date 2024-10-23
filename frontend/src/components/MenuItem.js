import React, { useState } from 'react';

function MenuItem({ item, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="menu-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                />
                <button onClick={() => addToCart(item, quantity)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default MenuItem;
