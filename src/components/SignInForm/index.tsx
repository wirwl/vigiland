import mainStyles from './index.module.scss';
import { Button } from '../Button';
import BlankAvatar from '../../common/img/blank-avatar.svg?react';
import { FormInput } from '../FormInput';
import Email from './email.svg?react';
import EyeClose from './eye-close.svg?react';
import EyeOpen from './eye-open.svg?react';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const { root, blankAvatar, caption, desc, inputs, inputEmail, eye, submit, texts, text1, text2 } = mainStyles;

type Props = {
    onSubmit?: (data:any) => void;
}

export const SignInForm = React.forwardRef(function SignInForm_({ onSubmit }: Props, ref: any) {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleClickEye = () => setShowPass(pass => !pass);
    const Eye = showPass ? EyeOpen : EyeClose;

    const handleEmailChange = (e:any) => setEmail(e.target.value);
    const handlePassChange = (e:any) => setPass(e.target.value);

    const handleSubmit = (e: any) => { 
        e.preventDefault(); 
        onSubmit?.({
            email, 
            password: pass,
            remember: true
        }); 
    }

    return <form ref={ref} className={root}>
        <BlankAvatar className={blankAvatar} />
        <h2 className={caption}>Войти в аккаунт</h2>
        <p className={desc}>Войти в личный кабинет</p>
        <div className={inputs}>
            <FormInput value={email} onChange={handleEmailChange} className={inputEmail} type='email' icon={<Email />} placeholder='Введите ваш email' />
            <FormInput
                value = {pass}
                onChange={handlePassChange}
                type={showPass ? "text" : "password"}
                icon={<Eye className={eye} onClick={handleClickEye} />}
                placeholder='Пароль'
            />
        </div>
        <Button disabled={email.length===0 || pass.length===0}  className={submit} text='Войти' fullWidth size='large' onClick={handleSubmit} />
        <p className={texts}><span className={text1}>Нет аккаунта?</span><Link to={'/sign-up'} className={text2}>Зарегистрироваться?</Link></p>
    </form>
})

