import { useState } from 'react'; 
import { PomodoroMenu } from '../Pomodoro-Menu/index';
import { ToDoMenu } from '../ToDoMenu';

import './styles.css';

export const Menu = () => {
    const [menuColor, setMenuColor] = useState('#b84430'); 

    return (
        <div className='Menu' style={{backgroundColor: menuColor}}>
            
            <PomodoroMenu setMenuColor={setMenuColor}/>
            <ToDoMenu/>
        </div>
    );
}
