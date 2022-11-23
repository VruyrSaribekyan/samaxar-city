import { FC } from "react";
import Layout from "../../Layout/Layout";
import styles from './Footer.module.css'

const Footer:FC = ():JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <Layout />
        </div>
    )
}

export default Footer