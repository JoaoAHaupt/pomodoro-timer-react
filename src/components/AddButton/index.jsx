import './styles.css';

export const AddButton = ({handleAddTask}) =>{
    return(
        <button className='addButton' onClick={handleAddTask}> + </button>
    );
}