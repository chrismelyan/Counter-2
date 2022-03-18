import React from 'react';
import './App.css';

type CounterDisplayType = {
    maxValue: number
    counter: number
}

const CounterDisplay = ({maxValue, counter}: CounterDisplayType) => {
    const setText = "enter value and press 'set'";
    const errorText = "Incorrect value!";

    const incDisplay = counter ? counter : <span className={'setText'}>{setText}</span>;

    const numberClass = `display ${counter === maxValue ? 'red' : ''}`
    return (
        <div className={numberClass}>
            {incDisplay}
        </div>
    );
};

export default CounterDisplay;