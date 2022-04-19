import React from 'react';
import Button from "./Button";

type ButtonsType = {
    increment: () => void
    reset: () => void
    counter: number
    maxValue: number
    startValue: number
    editMode: boolean
    setNewValue: () => void
    error: boolean
}

const Buttons = ({increment, counter, reset, maxValue, error, startValue, editMode, setNewValue}: ButtonsType) => {
    return (
        <div className={'buttons'}>
            {
                editMode
                    ? <Button
                        callBack={setNewValue}
                        title={'set'}
                        disabled={error}
                    />
                    : <>
                        <Button
                            callBack={increment}
                            title={'inc'}
                            disabled={editMode || counter === maxValue}
                        />
                        <Button
                            callBack={reset}
                            title={'reset'}
                            disabled={editMode || counter === startValue}
                        />
                        <Button
                            callBack={setNewValue}
                            title={'set'}
                        />
                    </>
            }
        </div>
    );
};

export default Buttons;