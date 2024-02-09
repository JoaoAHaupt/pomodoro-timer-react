import { ButtonStart } from '../ButtonStart';
import { Timer } from '../Timer';
import buttonSound from '../../assets/sounds/Button_Plate Click (Minecraft Sound) - Sound Effect for editing_h8y0JMVwdmM.mp3';
import endSound from '../../assets/sounds/Timer ding sound effect_TB8wgP5KWxg.mp3';

import './styles.css';
import { useState, useEffect } from 'react';

export const PomodoroMenu = ({setMenuColor}) => {
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState(25);
    const [timerRunning, setTimerRunning] = useState(false); 
    const [buttonName, setButtonName] = useState('Start');
    const [pomodoroRest, setPomodoroRest] = useState(false);


    function playButton(){
        new Audio(buttonSound).play()
    }

    function endTimeSound(){
        new Audio(endSound).play()
    }


    useEffect(() => {
        let timerId;
  

        if (timerRunning) {
            if(minutes===25 && seconds ==='00'){
                setMinutes(24)
                setSeconds(59)
            }
  
            timerId = setInterval(() => {
                if(seconds===7 && minutes===0){
                    endTimeSound();
                    
                }

                if (seconds === 0 && minutes === 0 && pomodoroRest ===false) {
                    setTimeout(() => {
                        setPomodoroRest(true);
                        setMinutes(4);
                        setSeconds(59);
                        setMenuColor('#30a4b8');
                        setTimerRunning(false); 
                        setButtonName('Start')
                    }, 3000);
                } 
                else if(seconds === 0 && minutes === 0 && pomodoroRest ===true){
                    setTimeout(() => {
                        setPomodoroRest(false);
                        

                        setMinutes(24);
                        setSeconds(59);
                        setMenuColor('#b84430');

                    }, 3000);
                }
                else {
                    if (seconds === 0) {
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
