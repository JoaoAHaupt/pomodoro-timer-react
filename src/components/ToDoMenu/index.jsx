import './styles.css';

export const ToDoMenu = () =>{
    return(
        <>
            <h2 className='Tasks'>Tasks</h2>
            <div className='bar'></div>
            <>
                <input className='input' placeholder='Ex: Do My math Exercise'></input>
                <button className='addButton'>+</button>
            </>

        </>
    );
}