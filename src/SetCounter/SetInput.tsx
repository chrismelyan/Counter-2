import React, {ChangeEvent} from 'react';

type SetInputType = {
    title: string
    callBack: (value: number) => void
    value: number
    error: boolean
}

const SetInput = (props: SetInputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(Number(e.currentTarget.value))
    }
    const inputClass = `input ${props.error ? 'redInput' : ''}`;
    return (
        <span className={'input-display'}>
            {props.title}
            <input value={props.value} type={'number'} className={inputClass} onChange={onChangeHandler}/>
        </span>
    );
};

export default SetInput;