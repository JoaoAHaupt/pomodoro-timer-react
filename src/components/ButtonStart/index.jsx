import './styles.css';

export const ButtonStart = ({ buttonName, handleButton }) => {
    const handleClick = () => {
        handleButton(); 
        const button = document.querySelector('.ButtonStart'); 
        button.classList.toggle('clicked'); 
    };

    return (
        <div className='ButtonStartDiv'>
            <button className="ButtonStart" onClick={handleClick}>{buttonName}</button>

        </div>
    );
}
