import './styles.css';

export const ButtonStart = ({ buttonName, handleButton }) => {
    const handleClick = () => {
        handleButton(); // Chama a função handleButton passada como prop
        const button = document.querySelector('.ButtonStart'); // Seleciona o botão
        button.classList.toggle('clicked'); // Adiciona ou remove a classe 'clicked' ao botão
    };

    return (
        <div className='ButtonStartDiv'>
            <button className="ButtonStart" onClick={handleClick}>{buttonName}</button>

        </div>
    );
}
