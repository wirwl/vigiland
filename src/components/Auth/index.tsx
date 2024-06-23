import mainStyles from "./index.module.scss";
import Blank from "./blank.svg?react";
import { TransparentSelect } from "../TransparentSelect";
import Chevron from './chevron-forward-outline.svg?react';
import { useMediaQuery } from 'usehooks-ts';
import { createPortal } from "react-dom";
import { ModalParent } from "../ModalParent";
import { useState } from "react";
import { SignInForm } from "../SignInForm";

const { root, wrapperAction, action, openp, avatar, enter, registration, vline2, lang } = mainStyles;

const options = [
    { value: 'ru', label: 'RU' },
    { value: 'en', label: 'EN' },
]

type Props = {
    isAuth: boolean;
}

export function Auth({ isAuth }: Props) {
    const [openSignIn, setOpenSignIn] = useState(true);
    const [openSignUp, setOpenSignUp] = useState(false);

    const isMobile = useMediaQuery('(max-width: 600px)');

    const handleClickEnter = () => setOpenSignIn(true);
    const handleRegistration = () => setOpenSignUp(true);

    return (
        <div className={root}>
            {openSignIn && createPortal(<ModalParent setOpen={setOpenSignIn}><SignInForm/></ModalParent>, document.body)}
            {openSignUp && createPortal(<ModalParent setOpen={setOpenSignUp} />, document.body)}
            <div className={wrapperAction}>
                <div className={action}>
                    {isAuth ? <><span className={openp}>Открыть платформу</span><Chevron /></> : (<>
                        <Blank className={avatar} />
                        {isMobile ? <span className={enter}>Войти в кабинет</span> : <>
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

