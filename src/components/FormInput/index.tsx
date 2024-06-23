import { HTMLInputTypeAttribute, ReactNode } from 'react';
import mainStyles from './index.module.scss';

const { root, input, cssIcon } = mainStyles;

type Props = {
    icon?: ReactNode;
    type?: HTMLInputTypeAttribute;
    
}

export function FormInput({ icon, type }: Props) {
    return <div className={root}>
        <input className={input} type={type} />
        <div className={cssIcon}>{icon}</div>
    </div>
}