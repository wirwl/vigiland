import mainStyles from './index.module.scss';
import { Button } from '../Button';
import BlankAvatar from '../../common/img/blank-avatar.svg?react';
import { FormInput } from '../FormInput';
import Email from './email.svg?react';
import Eye from './eye.svg?react';

const { root, blankAvatar, caption, desc, submit, texts, text1, text2 } = mainStyles;

type Props = {
    onSubmit?: () => void;
}

export function SignInForm({ onSubmit }: Props) {
    return <div className={root}>
        <BlankAvatar className={blankAvatar}/>
        <h2 className={caption}>Войти в аккаунт</h2>
        <p className={desc}>Войти в личный кабинет</p>
        <div>
            <FormInput icon={<Email/>}/>
            <FormInput icon={<Eye/>}/>
        </div>
        <Button className={submit} text='Войти' fullWidth />
        <p className={texts}><span className={text1}>Нет аккаунта?</span><button className={text2}>Зарегистрироваться?</button></p>        
    </div>
}