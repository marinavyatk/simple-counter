import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";

function App() {
    let min = 0;
    let max = 5;
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);
    const [score, setScore] = useState(minValue);
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        let newMaxValue = localStorage.getItem('maxValue');
        if (newMaxValue) {
            let newMaxValueToNumber = JSON.parse(newMaxValue);
            if (newMaxValueToNumber > 0 && newMaxValueToNumber > minValue) {
                setMaxValue(JSON.parse(newMaxValueToNumber))
            }
        }

        let newMinValue = localStorage.getItem('minValue');
        if (newMinValue) {
            let newMinValueToNumber = JSON.parse(newMinValue);
            if (newMinValueToNumber > 0 && newMinValueToNumber < maxValue) {
                setMinValue(newMinValueToNumber)
                setScore(newMinValueToNumber);
            }
        }
    }, [])
    return (
        <div className="App">
            <CounterSettings
                minValue={minValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setScore={setScore}
                error={error}
                setError={setError}
                message={message}
                setMessage={setMessage}
            />
            <Counter
                minValue={minValue}
                maxValue={maxValue}
                score={score}
                setScore={setScore}
                error={error}
                setError={setError}
                message={message}
                setMessage={setMessage}
            />
        </div>
    );
}

export default App;
