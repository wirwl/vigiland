import mainStyles from './index.module.scss';
import { Button } from '../Button';
import BlankAvatar from '../../common/img/blank-avatar.svg?react';
import { FormInput } from '../FormInput';
import Email from './email.svg?react';
import EyeClose from './eye-close.svg?react';
import EyeOpen from './eye-open.svg?react';
import { useState } from 'react';
import React from 'react';

const { root, blankAvatar, caption, desc, inputs, inputEmail, eye, submit, texts, text1, text2, cssPass } = mainStyles;

type Props = {
    onSubmit?: (data: any) => void;
}

export const SignUpForm = React.forwardRef(function SignInForm_({ onSubmit }: Props, ref: any) {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirm, setPassConfirm] = useState('');

    const handleClickEye = () => setShowPass(pass => !pass);
    const Eye = showPass ? EyeOpen : EyeClose;

    const handleEmailChange = (e: any) => setEmail(e.target.value);
    const handlePassChange = (e: any) => setPass(e.target.value);
    const handlePassConfirmChange = (e: any) => setPassConfirm(e.target.value);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit?.({
            email: email,
            "language": "EN_us",
            "name": "Dmitry Levhcenko",
            "password": pass,
            "time_zone": "GMT+3"
        });
    }


    return <form ref={ref} className={root}>
        <BlankAvatar className={blankAvatar} />
        <h2 className={caption}>Регистрация</h2>
        <p className={desc}>на портале недвижимости - Vigiland</p>
        <div className={inputs}>
            <FormInput value={email} onChange={handleEmailChange} className={inputEmail} type='email' icon={<Email />} placeholder='Введите ваш email' />
            <FormInput
                value={pass}
                className={cssPass}
                onChange={handlePassChange}
                type={showPass ? "text" : "password"}
                icon={<Eye className={eye} onClick={handleClickEye} />}
                placeholder='Придумайте пароль'
            />
            <FormInput
                value={passConfirm}
                onChange={handlePassConfirmChange}
                type={showPass ? "text" : "password"}
                icon={<Eye className={eye} onClick={handleClickEye} />}
                placeholder='Повторите пароль'
            />
        </div>
        <Button className={submit} text='Регистрация' fullWidth size='large' onClick={handleSubmit} />
        <p className={texts}><span className={text1}>Есть аккаунт?</span><button type='button' className={text2}>Войти в личный кабинет?</button></p>
    </form>
})

