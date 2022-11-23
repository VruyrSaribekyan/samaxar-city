import { FC } from "react";
import styles from './Menu.module.css'
import { NavLink } from 'react-router-dom'
const Menu:FC = ():JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/discussion'>Discussion</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
        </div>
    )
}
export default Menu