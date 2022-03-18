import React from 'react';

type ButtonType = {
    title: string
    callBack: () => void
    disabled: boolean
}
const Button = ({title, callBack, disabled}: ButtonType) => {
    const disabledButton = `button ${disabled ? 'disabled' : ''}`

    return <button
        disabled={disabled}
        className={disabledButton}
        onClick={callBack}
    >
        {title}
    </button>

};

export default Button;