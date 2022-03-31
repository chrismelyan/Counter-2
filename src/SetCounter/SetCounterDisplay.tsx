import React from 'react';
import SetInput from "./SetInput";

type SetCounterDisplayType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    maxValue: number
    startValue: number
    error: boolean
}

const SetCounterDisplay = (props: SetCounterDisplayType) => {
    return (
        <div className={'display'}>
            <SetInput title={'max value: '} error={props.error} callBack={props.setMaxValue} value={props.maxValue}/>
            <SetInput title={'start value: '} error={props.error} callBack={props.setStartValue} value={props.startValue}/>
        </div>
    );
};

export default SetCounterDisplay;