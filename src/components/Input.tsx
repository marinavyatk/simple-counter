import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputType = {
    callback: (event: number) => void
    value: number
    error: string
    title?: string
    minValue: number
    maxValue: number
}
export const Input = (props: InputType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(+event.currentTarget.value);
    }
    return (
        <div>
            <label form="input">{props.title}: </label>
            <input
                id={'input'}
                type={'number'}
                value={props.value}
                onChange={onChangeHandler}
                className={s.input + ' ' + (props.value<0 || props.minValue>= props.maxValue ? s.errorInput : '')}
            />
        </div>
    );
};
