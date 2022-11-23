import { FC } from "react";
import styles from './Icon.module.css'
interface IIconProps {
    src:string;
    style?:{}
}
const Icon:FC<IIconProps> = ({src, style}):JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <img style={style} src={src} alt='icon'/>
        </div>
    )
}
export default Icon