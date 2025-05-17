import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Hello, ${name}! Welcome to React!`);
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales in 2025',
                data: [30, 40, 35, 50, 70],
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h1>Hello from React!</h1>

            {/* Counter Section */}
            <div style={{ fontFamily: 'Arial', padding: '20px' }}>
                <h1>Counter Example</h1>
                <p style={{ fontSize: '20px' }}>Counter: {count}</p>

                <button onClick={decrement} style={{ fontSize: '20px', marginRight: '10px' }}>−</button>
                <button onClick={increment} style={{ fontSize: '20px' }}>+</button>
            </div>

            <hr></hr>


            {/* Form Section */}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
            

            <hr></hr>

            {/* Chart Section */}
            <h3>Sales Data</h3>
            <div style={{ width: '300px', height: '200px' }}>
                <Line data={data} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);