import './styles.css';

export const Task = ({ tasksList }) => {
    const reversedTasksList = [...tasksList].reverse();

    return (
        <div className='TasksDiv'>
            <>
            {reversedTasksList.map((task, index) => (
                <div className='task' key={index}>
                    <p>{task}</p>
                    
                    
                    <button className='checkButton'></button>
                </div>
            ))}
            </>

        </div>
    );
}
