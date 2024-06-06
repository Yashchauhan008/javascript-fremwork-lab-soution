import React, { useState, useEffect } from 'react';

const About = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Hello world");
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run only once after the initial render

    function increment() {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Add</button>
        </>
    );
};

export default About;
