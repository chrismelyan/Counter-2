import React from 'react';
import SetInput from "./SetInput";

type SetCounterDisplayType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    maxValue: number
    startValue: number
}

const SetCounterDisplay = (props: SetCounterDisplayType) => {
    return (
        <div className={'set-input-display'}>
            <SetInput title={'max value: '} callBack={props.setMaxValue} value={props.maxValue}/>
            <SetInput title={'start value: '} callBack={props.setStartValue} value={props.startValue}/>
        </div>
    );
};

export default SetCounterDisplay;