import { FC } from "react";
import styles from './Icon.module.css'
interface IIconProps {
    src:string
}
const Icon:FC<IIconProps> = ({src}):JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <img src={src} alt='icon'/>
        </div>
    )
}
export default Icon