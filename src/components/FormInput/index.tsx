import { HTMLInputTypeAttribute, ReactNode } from 'react';
import mainStyles from './index.module.scss';
import cn from 'classnames/bind';

const { root, input, cssIcon } = mainStyles;
const c = cn.bind(mainStyles);

type Props = {
    className?: string;
    icon?: ReactNode;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    value: string;
    onChange: (e:any) => void;
}

export function FormInput({ className, icon, type, placeholder, value, onChange }: Props) {
    const handleInputChange = (e:any) => {
        onChange(e);
    }

    return <div className={c(root, className)}>
        <input value={value} onChange={handleInputChange} className={input} type={type} placeholder={placeholder} />
        <div className={cssIcon}>{icon}</div>
    </div>
}