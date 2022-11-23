import { ChangeEventHandler, FC } from "react";
import styles from './Input.module.css'

interface IInputProps {
    onChangeHandler:ChangeEventHandler,
    type:string
}

const Input:FC<IInputProps> = ({onChangeHandler, type}):JSX.Element => {
    return(
        <input type={type} onChange={onChangeHandler}/>
    )
}
export default Input