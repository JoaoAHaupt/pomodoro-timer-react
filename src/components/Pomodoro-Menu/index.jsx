import { ButtonStart } from '../ButtonStart';
import { Timer } from '../Timer';
import buttonSound from '../../assets/sounds/Button_Plate Click (Minecraft Sound) - Sound Effect for editing_h8y0JMVwdmM.mp3'

import './styles.css';
import { useState, useEffect } from 'react';

export const PomodoroMenu = () => {
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(25);
    const [timerRunning, setTimerRunning] = useState(false); 
    const [buttonName, setButtonName] = useState('Start');

    function playButton(){
        new Audio(buttonSound).play()
    }

    useEffect(() => {
        let timerId;

        if (timerRunning) {
            
            timerId = setInterval(() => {

                if (seconds === 0 && minutes === 0) {
                    clearInterval(timerId); 
                    setTimerRunning(false);
                } else {
                    if (seconds === 1) {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    } else {
                        setSeconds(seconds - 1);
                    }
                }
            }, 1000);
        }

        return () => clearInterval(timerId); 
    }, [timerRunning, seconds, minutes]);

    const handleClickStart = () => {
        playButton();
        if(timerRunning===false){
            setTimerRunning(true); 
            setButtonName('Pause')
        }
        else{
            setTimerRunning(false); 
            setButtonName('Start')
        }
    };

    return (
        <div className='PomodoroMenu'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/533-tomato.svg/2048px-533-tomato.svg.png" alt="" />
            <Timer seconds={seconds} minutes={minutes}/>
            <ButtonStart buttonName={buttonName} handleButton={handleClickStart}/>
        </div>
    );
}
