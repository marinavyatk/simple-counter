import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css'

type CounterType = {
    minValue: number,
    maxValue: number,
    score: number,
    setScore: (score: number) => void,
    error: string,
    setError: (error: string) => void,
    message: string,
    setMessage: (message: string) => void
}
export const Counter = (props: CounterType) => {
    const increaseScore = () => {
        if (props.score < props.maxValue) {
            let newScore = props.score + 1;
            props.setScore(newScore)
        }
    }
    const reset = () => {
        props.setScore(props.minValue)
    }
    const redText = props.score === props.maxValue || props.error ? s.redText : ''
    return (
        <div className={s.counter}>
            <div className={s.board}>
                {props.message ||
                    (props.error && <div className={redText}> {props.error}</div>) ||
                    (props.score && <div className={redText}>{props.score}</div>)}
            </div>
            <div className={s.buttonBlock}>
                <Button
                    name={'inc'}
                    callback={increaseScore}
                    className={props.score === props.maxValue || props.error || props.message ? s.disabled : ''}
                />
                <Button
                    name={'reset'}
                    callback={reset}
                    className={props.score === props.minValue || props.error || props.message ? s.disabled : ''}
                />
            </div>
        </div>
    );
};
