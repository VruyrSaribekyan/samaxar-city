import { ChangeEventHandler, FC } from "react";
import styles from "./Input.module.css";

interface IInputProps {
  onChangeHandler: ChangeEventHandler;
  type: string;
  style?:{}
}

const Input: FC<IInputProps> = ({ onChangeHandler, type, style }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <input style={style} type={type} onChange={onChangeHandler} />
    </div>
  );
};
export default Input;
