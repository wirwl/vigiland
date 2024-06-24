import { ReactNode, useRef } from 'react';
import mainStyles from './index.module.scss';
import { useOnClickOutside } from 'usehooks-ts';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const { root } = mainStyles;

type Props = {
    children?: ReactNode;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ModalParent({ children, setOpen }: Props) {
    const ref = useRef(null);
    const navigate = useNavigate();

    const handleClickOutside = () => { setOpen(false); navigate('/'); }

    useOnClickOutside(ref, handleClickOutside)

    return <div className={root}>
        {React.cloneElement(children as any, { ref: ref })}
    </div>
}