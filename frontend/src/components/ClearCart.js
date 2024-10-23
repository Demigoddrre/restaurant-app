// src/components/ClearCart.js

import React from 'react';

const ClearCart = ({ clearCart }) => {
    return (
        <div>
            <button onClick={clearCart}>Clear Order</button>
        </div>
    );
};

export default ClearCart;
