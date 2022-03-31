import React from 'react';
import '../App.css';

type CounterDisplayType = {
    maxValue: number
    counter: number
    error: boolean
    editMode: boolean
}

const CounterDisplay = ({maxValue, counter, error, editMode}: CounterDisplayType) => {
    const setText = "enter value and press 'set'";

    const counterMessage = error
        ? <span className={'errorText'}>{error}</span>
        : <span className={'setText'}>{setText}</span>;

    const counterDisplay = `display counter ${counter === maxValue ? 'red' : ''}`
    return (
        <div className={'display'}>
            {editMode
                ? counterMessage
                : <span className={counterDisplay}>{counter}</span>}
        </div>
    );
};

export default CounterDisplay;