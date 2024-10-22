import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';

// Example menu items (you can fetch these from your Flask API later)
const menuItems = [
    { id: 1, name: 'Burger', description: 'Delicious burger', price: 5.99 },
    { id: 2, name: 'Fries', description: 'Crispy fries', price: 2.99 },
    { id: 3, name: 'Pizza', description: 'Cheesy pizza', price: 8.99 },
];

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const newItem = { ...item, quantity: parseInt(quantity) };
        setCart([...cart, newItem]);
    };

    return (
        <div className="App">
            <h1>Restaurant Menu</h1>
            <Menu items={menuItems} addToCart={addToCart} />
            <Cart cartItems={cart} />
        </div>
    );
}

export default App;
