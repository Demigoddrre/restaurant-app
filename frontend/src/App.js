import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import About from './components/About';
import FAQ from './components/FAQ';
import SignIn from './components/SignIn';

// Example menu items
const menuItems = [
    { id: 1, name: 'Burger', description: 'Delicious burger', price: 5.99, image: 'burger.png' },
    { id: 2, name: 'Fries', description: 'Crispy fries', price: 2.99, image: 'fries.png' },
    { id: 3, name: 'Pizza', description: 'Cheesy pizza', price: 8.99, image: 'pizza.png' },
];

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const newItem = { ...item, quantity: parseInt(quantity) };
        setCart([...cart, newItem]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <Router>
            <div className="App">
                {/* Navbar with React Router Links */}
                <div className="navbar">
                    <button className="hamburger">☰ Menu</button>
                    <div className="dropdown-content">
                        <Link to="/about">About Us</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/signin">Sign In</Link>
                        <Link to="/">Home</Link>
                    </div>
                </div>

                {/* Define Routes */}
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <h1>Dre's Delicious Deli</h1>
                                <Menu items={menuItems} addToCart={addToCart} />
                                <Cart cartItems={cart} />
                                <h2>
                                    Grand Total: $
                                    {cart
                                        .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                        .toFixed(2)}
                                </h2>
                                <button className="clear-button" onClick={clearCart}>
                                    Clear Cart
                                </button>
                            </>
                        }
                    />
                    {/* New pages for About Us, FAQ, SignIn */}
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
