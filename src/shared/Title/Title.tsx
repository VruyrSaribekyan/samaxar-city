import { FC } from "react";
import styles from './Title.module.css'

interface ITitleProps {
    title:string
}

const Title:FC<ITitleProps> = ({title}):JSX.Element => {
    return(
        <div className={styles.wrapper}>
            {title}
        </div>
    )
}
export default Title