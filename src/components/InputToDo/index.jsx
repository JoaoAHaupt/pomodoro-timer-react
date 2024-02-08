import './styles.css';


export const InputToDo = ({taskName, handleInputChange}) =>{
    return(
        <input 
        className='input' 
        placeholder='Ex: Do My math Exercise'
        value={taskName} 
        onChange={handleInputChange}
        maxLength={19}
        />
    );
}