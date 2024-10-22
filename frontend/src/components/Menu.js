import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items, addToCart }) => {
    return (
        <div className="menu">
            {items.map((item) => (
                <MenuItem key={item.id} item={item} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default Menu;
