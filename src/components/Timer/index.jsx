import './styles.css';

export const Timer = ({seconds, minutes}) =>{
    return(
        <p className="Timer">{minutes}:{seconds}</p>
    );
}