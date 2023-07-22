import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string,
    callback: () => void
    className?: string
}
export const Button = (props: ButtonType) => {
    const onClickButtonHandler = () => {
        props.callback();
    }
    return (
        <button
            onClick={onClickButtonHandler}
            className={`${s.button} ${props.className}`}
        >
            {props.name}
        </button>
    );
};
