import mainStyles from "./index.module.scss";
import Blank from "./blank.svg?react";
import { TransparentSelect } from "../TransparentSelect";
import Chevron from './chevron-forward-outline.svg?react';
import { useMediaQuery } from 'usehooks-ts';
import { useNavigate } from "react-router-dom";

const { root, wrapperAction, action, openp, avatar, enter, registration, vline2, lang } = mainStyles;

const options = [
    { value: 'ru', label: 'RU' },
    { value: 'en', label: 'EN' },
]

type Props = {
    isAuth: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Auth({ isAuth, setOpenMenu }: Props) {    
    const navigate = useNavigate();

    const isMobile = useMediaQuery('(max-width: 600px)');

    const handleClickEnter = () => {
        if (isMobile) setOpenMenu(false);
        navigate('/sign-in');
    } 
    const handleRegistration = () => navigate('/sign-up');

    return (
        <div className={root}>
            <div className={wrapperAction}>
                <div className={action}>
                    {isAuth ? <><span className={openp}>Открыть платформу</span><Chevron /></> : (<>
                        <Blank className={avatar} />
                        {isMobile ? <button type="button" onClick={handleClickEnter} className={enter}>Войти в кабинет</button> : <>
                            <button className={enter} onClick={handleClickEnter}>Вход</button>
                            <button className={registration} onClick={handleRegistration}>Регистрация</button>
                        </>}
                    </>
                    )}
                </div>
            </div>
            <div className={vline2} />
            <TransparentSelect className={lang} options={options} defaultValue={options[0]} />
        </div>)
}

