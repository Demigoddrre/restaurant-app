import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p>{item.name} x {item.quantity}</p>
                        <p>Total: ${item.price * item.quantity}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
