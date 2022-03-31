import React, {useState} from 'react';
import CounterDisplay from "./CounterDisplay";
import Buttons from "./Buttons";
import {CounterValuesObjType} from "../App";
import SetCounterDisplay from "../SetCounter/SetCounterDisplay";

type CounterType = {
    error: boolean
    counterValues: CounterValuesObjType
    counter: number
    setCounter: (value: number) => void
    editMode: boolean
    settingsChanged: (newValues: CounterValuesObjType) => void
    setEditMode: (isEdited: boolean) => void
    setError: (isError: boolean) => void
}

const Counter: React.FC<CounterType> = (
    {counter, error, counterValues, setCounter, editMode, setEditMode, setError, settingsChanged}) => {

    let [startValue, setStartValue] = useState<number>(counterValues.startValue);
    let [maxValue, setMaxValue] = useState<number>(counterValues.maxValue);

    const increment = () => {
        counter < maxValue && setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(startValue)
    }

    const setNewValue = () => {
        setEditMode(true)
        if (editMode && !error) {
            const newValues = {startValue, maxValue};
            settingsChanged(newValues);
        }
    }
    const startValueCallback = (value: number) => {
        setStartValue(value);
        setEditMode(true);

        if (value < 0) return setError(true);
        if (value >= maxValue) return setError(true);
        if (maxValue >= 0) setError(false);
    }
    const maxValueCallback = (value: number) => {
        setMaxValue(value)
        setEditMode(true);

        if (value < 0) return setError(true);
        if (value <= startValue) return setError(true);
        if (startValue >= 0) setError(false);
    }

    return (
        <div className='counter-wrapper'>
            {
                editMode
                    ? <SetCounterDisplay
                        setMaxValue={maxValueCallback}
                        setStartValue={startValueCallback}
                        maxValue={maxValue}
                        startValue={startValue}
                        error={error}
                    />
                    : <CounterDisplay
                        maxValue={maxValue}
                        counter={counter}
                        error={error}
                        editMode={editMode}
                    />
            }
            <Buttons
                increment={increment}
                reset={reset}
                counter={counter}
                maxValue={maxValue}
                startValue={startValue}
                editMode={editMode}
                setNewValue={setNewValue}
            />
        </div>
    );
};

export default Counter;