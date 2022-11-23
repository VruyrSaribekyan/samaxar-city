import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Discussion from "../pages/Discussion/Discussion";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Contacts from "../pages/Contacts/Contacts";

import styles from './Layout.module.css'
import Menu from "../components/Menu/Menu";

const Layout:FC = ():JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <div>
                <Menu/>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Discussion' element={<Discussion/>}/>
                <Route path='/Contacts' element={<Contacts/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default Layout