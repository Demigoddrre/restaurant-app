\c restaurant;

-- Create the Menu table
CREATE TABLE IF NOT EXISTS menu (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    available BOOLEAN NOT NULL DEFAULT true
);

-- Create the Orders table
CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL
);

-- Create the Order Items table
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id) ON DELETE CASCADE,
    item_id INTEGER REFERENCES menu(item_id),
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Create the Invoices table
CREATE TABLE IF NOT EXISTS invoices (
    invoice_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id) ON DELETE CASCADE,
    invoice_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    payment_method VARCHAR(50) NOT NULL,
    amount_paid DECIMAL(10, 2) NOT NULL
);

-- Create the Users table
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255), -- This will store a hashed password (optional if using Google Sign-In)
    google_id VARCHAR(255), -- Store the user's Google ID if signing in with Google
    signup_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert a sample user (for testing)
INSERT INTO users (first_name, last_name, email, password)
VALUES ('Jane', 'Doe', 'jane.doe@example.com', 'password-hash-placeholder');

-- Insert some sample data into Menu
INSERT INTO menu (item_name, category, price, description, available)
VALUES
    ('Cheeseburger', 'Main Course', 9.99, 'A juicy grilled cheeseburger', true),
    ('Fries', 'Appetizer', 3.99, 'Crispy golden fries', true),
    ('Soda', 'Beverage', 1.99, 'Refreshing soft drink', true);

-- Insert a sample order
INSERT INTO orders (customer_name, status, total_amount)
VALUES ('John Doe', 'Completed', 13.98);

-- Insert sample order items
INSERT INTO order_items (order_id, item_id, quantity, price)
VALUES
    (1, 1, 1, 9.99),  -- Cheeseburger
    (1, 2, 1, 3.99);  -- Fries

-- Insert a sample invoice
INSERT INTO invoices (order_id, payment_method, amount_paid)
VALUES (1, 'Credit Card', 13.98);
