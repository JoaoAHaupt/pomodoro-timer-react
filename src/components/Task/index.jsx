import { useState } from 'react';
import './styles.css';

export const Task = ({ tasksList, setTasksList,  clickedIndexes, setClickedIndexes}) => {

    const handleClick = (index) => {
        const newClickedIndexes = [...clickedIndexes];
        const newTaskList = [...tasksList];

        const indexToRemove = newClickedIndexes.indexOf(index);

        if (!newClickedIndexes.includes(index)) {
            newClickedIndexes.push(index);


        } else {
            newClickedIndexes.splice(indexToRemove, 1);
  
 
        }
        setClickedIndexes(newClickedIndexes); 

    };
    
    return (
        <div className='TasksDiv'>
            <>
                {tasksList.map((task, index) => (
                    <div className='task' key={index}>
                        <button className={`checkButton ${clickedIndexes.includes(index) ? 'clicked' : ''}`} onClick={() => handleClick(index)}>
                            {clickedIndexes.includes(index) ? 'X' : ''}
                        </button>
                        {clickedIndexes.includes(index) ? (
                            <p><s>{task}</s></p>
                        
                        ) : (
                            <p>{task}</p>
                        )}

                    </div>
                ))}
            </>
    
        </div>
    );
    
}
