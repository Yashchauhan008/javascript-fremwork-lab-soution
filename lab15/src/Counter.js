import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prev => prev + 1);
    }

    function decrement() {
        setCount(prev => prev - 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>add</button>
            <button onClick={decrement}>remove</button>
        </>
    );
};

export default Counter;
