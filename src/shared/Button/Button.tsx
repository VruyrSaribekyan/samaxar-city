import { FC } from "react";
import styles from './Button.module.css'

interface IButtonProps {
    title:string,
    style?:{}
}

const Button:FC<IButtonProps> = ({title, style}):JSX.Element => {
    return(
        <button style={style} className={styles.wrapper}>
            {title}
        </button>
    )
}

export default Button