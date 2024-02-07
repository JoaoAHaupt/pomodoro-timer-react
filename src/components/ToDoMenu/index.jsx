import React, { useState } from 'react';
import { InputToDo } from '../InputToDo';
import { AddButton } from '../AddButton';
import {Task} from'../Task';

import './styles.css';

export const ToDoMenu = () =>{
    const [taskName, setTaskName] = useState('');
    const [tasksList, setTasksList] = useState([]);

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleAddTask = () => {
        if(taskName.trim() !== '') {
            setTasksList([...tasksList, taskName]);
            setTaskName('');
        }
    };
    
    return(
        <>
            <h2 className='Tasks'>Tasks</h2>
            <div className='bar'></div>
            <>
                <InputToDo taskName={taskName} handleInputChange={handleInputChange}/>
                <AddButton handleAddTask={handleAddTask}/>
                <Task tasksList={tasksList}/>

            </>

        </>
    );
}
