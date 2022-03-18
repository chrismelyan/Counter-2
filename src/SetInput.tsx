import React, {ChangeEvent} from 'react';

type SetInputType = {
    title: string
    callBack: (value: number) => void
    value: number
}

const SetInput = (props: SetInputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(Number(e.currentTarget.value))
    }
    return (
        <span className={'input-display'}>
            {props.title}
            <input value={props.value} type={'number'} className={'input'} onChange={onChangeHandler}/>
        </span>
    );
};

export default SetInput;