import { PomodoroMenu } from '../Pomodoro-Menu/index';
import { ToDoMenu } from '../ToDoMenu';

import './styles.css';

export const Menu = () => {

    return (
        <div className='Menu'>
            <PomodoroMenu/>
            <ToDoMenu/>
        </div>
    );
}
