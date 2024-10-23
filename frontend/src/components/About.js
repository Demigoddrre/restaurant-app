import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Use the images from the public folder
    const images = [
        `${process.env.PUBLIC_URL}/deli1.jpg`,
        `${process.env.PUBLIC_URL}/deli2.jpg`,
        `${process.env.PUBLIC_URL}/deli3.jpg`
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    // Automatically switch slides every 3 seconds
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="about-container">
            <div className="about-content">
                <h2>About Us</h2>
                <ul>
                    <li>High-quality food</li>
                    <li>Fast delivery</li>
                    <li>Excellent customer service</li>
                </ul>
            </div>
            <div className="slideshow">
                <img src={images[currentSlide]} alt="About us" className="slide" />
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default About;
