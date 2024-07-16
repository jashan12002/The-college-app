"use client"
import React, { useState } from 'react';
import './AnimatedText.css';

const AnimatedText = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div className="animated-text-container flex py-10">
            <div className="animated-text text-6xl dark:text-[#777] font-bold" onMouseMove={handleMouseMove} style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }}>
                SHAH SATNAM JI BOYS COLLEGE
            </div>
        </div>
    );
};

export default AnimatedText;
