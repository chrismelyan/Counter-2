import React from 'react';
import Button from "./Button";

type ButtonsType = {
    increment: () => void
    reset: () => void
    counter: number
    maxValue: number
    startValue: number
}

const Buttons = ({increment, counter, reset, maxValue, startValue}: ButtonsType) => {
    return (
        <div className={'buttons'}>
                <Button
                    callBack={increment}
                    title={'inc'}
                    disabled={counter === maxValue}
                />
                <Button
                    callBack={reset}
                    title={'reset'}
                    disabled={counter === startValue}
                />
        </div>
    );
};

export default Buttons;