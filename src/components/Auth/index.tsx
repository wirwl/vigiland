import mainStyles from "./index.module.scss";
import Blank from "./blank.svg?react";
import Select from 'react-select'
import { TransparentSelect } from "../TransparentSelect";

const { root, wrapperAction, action, avatar, enter, registration, vline2 } = mainStyles;

const options = [
    { value: 'ru', label: 'RU' },
    { value: 'en', label: 'EN' },    
]

type Props = {
    isAuth: boolean;
}

export function Auth({ isAuth }: Props) {
    return (
        <div className={root}>
            <div className={wrapperAction}>
                <button className={action}>
                    <Blank className={avatar} />
                    <span className={enter}>Вход</span>
                    <span className={registration}>Регистрация</span>
                </button>
            </div>
            <div className={vline2} />
            <TransparentSelect options={options}  defaultValue={options[0]} />
        </div>)
}
