import React from 'react';
import './App.css';
import SetCounterDisplay from "./SetCounter/SetCounterDisplay";
import CounterDisplay from "./Counter/CounterDisplay";
import Buttons from "./Counter/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {InitStateType, selectAllCounter} from "./store/counterReducer";
import {AppStateType} from "./store/store";
import {
    changeEditMode,
    changeError,
    incrementValue,
    resetValue,
    setMaxValue,
    setStartValue
} from "./store/actions";


function App() {
    const {max, start, value, error, editMode} = useSelector<AppStateType, InitStateType>(selectAllCounter)
    const dispatch = useDispatch()

    const increment = () => {
        value < max && dispatch(incrementValue())
    }
    const reset = () => {
        dispatch(resetValue())
    }

    const setNewValue = () => {
        dispatch(changeEditMode(true))
        if (editMode && !error) {
            dispatch(changeEditMode(false))
        }
    }
    const startValueCallback = (newValue: number) => {
        dispatch(setStartValue(newValue, true));

        if (newValue < 0) return dispatch(changeError(true));
        if (newValue >= max) return dispatch(changeError(true));
        if (max >= 0) dispatch(changeError(false));
    }
    const maxValueCallback = (newValue: number) => {
        dispatch(setMaxValue(newValue, true))

        if (newValue < 0) return dispatch(changeError(true));
        if (newValue <= start) return dispatch(changeError(true));
        if (start >= 0) dispatch(changeError(false));
    }

    return (
        <div className={'App'}>
            <div className='counter-wrapper'>
                {
                    editMode
                        ? <SetCounterDisplay
                            setMaxValue={maxValueCallback}
                            setStartValue={startValueCallback}
                            maxValue={max}
                            startValue={start}
                            error={error}
                        />
                        : <CounterDisplay
                            maxValue={max}
                            counter={value}
                            error={error}
                            editMode={editMode}
                        />
                }
                <Buttons
                    increment={increment}
                    reset={reset}
                    counter={value}
                    maxValue={max}
                    startValue={start}
                    editMode={editMode}
                    setNewValue={setNewValue}
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;
