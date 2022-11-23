import { FC } from "react";
import styles from './Button.module.css'

interface IButtonProps {
    title:string
}

const Button:FC<IButtonProps> = ({title}):JSX.Element => {
    return(
        <button className={styles.wrapper}>
            {title}
        </button>
    )
}

export default Button