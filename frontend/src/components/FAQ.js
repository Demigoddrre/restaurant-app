import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
                <h3>How can I place an order?</h3>
                <p>You can easily place an order by selecting items from our menu and adding them to your cart.</p>
            </div>
            <div className="faq-item">
                <h3>What is your refund policy?</h3>
                <p>If you are not satisfied with your order, you can request a refund within 24 hours.</p>
            </div>
            {/* Contact form */}
            <div className="faq-form">
                <h3>Submit a request</h3>
                <form>
                    <label>First Name:</label>
                    <input type="text" name="firstName" required />

                    <label>Last Name:</label>
                    <input type="text" name="lastName" required />

                    <label>Email:</label>
                    <input type="email" name="email" required />

                    <label>Phone Number:</label>
                    <input type="tel" name="phone" required />

                    <label>Category:</label>
                    <select name="category">
                        <option value="order">Order</option>
                        <option value="refund">Refund/Exchange</option>
                        <option value="general">General Inquiry</option>
                    </select>

                    <label>Issue Description:</label>
                    <textarea name="issue" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FAQ;
