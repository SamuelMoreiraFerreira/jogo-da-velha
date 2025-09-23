import styles from './Square.module.css';

export default function Square ({ children, index, onClick })
{

    return (
    
        <button 
            className={styles.square} 
            onClick={() => onClick(index)}
        >
            {children ?? ''}
        </button>

    )

}