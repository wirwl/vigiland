import { ReactNode } from 'react';
import mainStyles from './index.module.scss';

const { root } = mainStyles;

type Props = {
    children?: ReactNode;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ModalParent({ children }: Props) {
    return <div className={root}>{children}</div>
}