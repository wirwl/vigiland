import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import mainStyles from "./index.module.scss";
import cn from 'classnames/bind';

const { root } = mainStyles;
const c = cn.bind(mainStyles);

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
{
    text: string;
    fullWidth?: boolean;
    className?: string;
}

export function Button(props: Props) {
    const { text, fullWidth = false, className, ...rest } = props;
    return (
        <button {...rest} className={c(root, className, { fullWidth })}>
            {text}
        </button>)
}
