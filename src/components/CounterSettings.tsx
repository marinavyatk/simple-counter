import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css'
import {Input} from "./Input";

type  CounterSettingsType = {
    minValue: number,
    setMinValue: (value: number) => void,
    maxValue: number,
    setMaxValue: (value: number) => void,
    setScore: (score: number) => void,
    error: string,
    setError: (error: string) => void
    message: string,
    setMessage: (message: string) => void
}
export const CounterSettings = (props: CounterSettingsType) => {
    const displayError = () => {
        props.setMessage('')
        props.setError('Incorrect value!')
    }
    const displayMessage = () => {
        props.setMessage('Enter values and click set')
        props.setError('')
    }

    const onMaxInputChange = (maxValue: number) => {
        props.setMaxValue(maxValue);
        if (
            maxValue < 0 ||
            +maxValue <= props.minValue) {
            displayError();
        } else {
            displayMessage();
        }
    }
    const onMinInputChangeHandler = (minValue: number) => {
        props.setMinValue(minValue);
        if (
            minValue < 0 ||
            minValue >= props.maxValue) {
            displayError();
        } else {
            displayMessage();
        }
    }
    const buttonActions = () => {
        if (props.minValue >= 0 && props.maxValue > props.minValue) {
            props.setScore(props.minValue)
            props.setMessage('')
            localStorage.setItem('maxValue', JSON.stringify(props.maxValue))
            localStorage.setItem('minValue', JSON.stringify(props.minValue))
        }
    }

    return (
        <div className={s.counter}>
            <div className={s.settingsBlock}>
                <Input
                    value={props.maxValue}
                    error={props.error}
                    title={'max value'}
                    callback={(maxValue) => onMaxInputChange(maxValue)}
                    minValue={props.minValue}
                    maxValue={props.maxValue}

                />
                <Input
                    value={props.minValue}
                    error={props.error}
                    title={'min value'}
                    callback={(minValue) => onMinInputChangeHandler(minValue)}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                />
            </div>
            <div className={s.buttonBlock}>
                <Button
                    className={props.error||!props.message ? s.disabled : ''}
                    name={'set'}
                    callback={buttonActions}
                />
            </div>
        </div>
    );
};

