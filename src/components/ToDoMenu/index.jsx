import React, { useState } from 'react';
import './styles.css';

export const ToDoMenu = () =>{
    const [taskName, setTaskName] = useState('');
    const [tasksList, setTasksList] = useState([]);

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleAddTask = () => {
        console.log('Nova tarefa:', taskName);
        // Adiciona a nova tarefa à lista de tarefas
        setTasksList([...tasksList, { name: taskName, completed: false }]);
        // Limpa o input depois que a tarefa é adicionada
        setTaskName('');
    };

    const handleCheckboxChange = (index) => {
        // Atualiza o estado da tarefa com base no índice
        const updatedTasks = tasksList.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasksList(updatedTasks);
    };

    return(
        <>
            <h2 className='Tasks'>Tasks</h2>
            <div className='bar'></div>
            <>
                <input 
                    className='input' 
                    placeholder='Ex: Do My math Exercise'
                    value={taskName} 
                    onChange={handleInputChange} 
                />
                <button className='addButton' onClick={handleAddTask}>+</button>
                {/* Renderiza cada tarefa na lista de tarefas */}
                <div className="tasksContainer">
                    {tasksList.map((task, index) => (
                        <div key={index} className='task'>
                            <p className={task.completed ? 'completed' : ''}>{task.name}</p>
                            <input 
                                type="checkbox" 
                                checked={task.completed} 
                                onChange={() => handleCheckboxChange(index)} 
                            />
                        </div>
                    ))}
                </div>
            </>

        </>
    );
}
