import React, { useState } from 'react';
import { InputToDo } from '../InputToDo';
import { AddButton } from '../AddButton';
import {Task} from'../Task';

import './styles.css';

export const ToDoMenu = () =>{
    const [taskName, setTaskName] = useState('');
    const [tasksList, setTasksList] = useState([]);
    const [clickedIndexes, setClickedIndexes] = useState([]);


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
            <h2 className='Tasks'>Tasks <br></br>{clickedIndexes.length}/{tasksList.length}</h2>
            <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <InputToDo taskName={taskName} handleInputChange={handleInputChange}/>
                <AddButton handleAddTask={handleAddTask}/>
            </div>

            <Task tasksList={tasksList} setTasksList={setTasksList} clickedIndexes={clickedIndexes} setClickedIndexes={setClickedIndexes} />

            </>

        </>
    );
}
