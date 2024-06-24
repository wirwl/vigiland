import { useEffect, useState } from "react";
import mainStyles from "./index.module.scss";
import MobileMenu from './menu.svg?react';
import cn from 'classnames/bind';
import { Auth } from "../Auth";
import Close from './close.svg?react';
import { getFetch } from "../../lib";

const { root, hamburger, wrapper, list, item, anchor, closeButton } = mainStyles;
const c = cn.bind(mainStyles);

type TMenuItem = {
    text: string;
    link: string;
}

type Props = {
    items: TMenuItem[];
}

export function Menu({ items }: Props) {
    const [open, setOpen] = useState(false);
    const [auth, setAuth] = useState(false);

    const handleClickMobileMenu = () => setOpen(open => !open);

    useEffect(() => {
        getFetch('http://hz.axgrid.com:8094/api/v1/a/me').then((data: any) => {            
            setAuth(!(data['err'] && data['err'] === 'Unauthorized'));
        })
    }, []);

    return (
        <nav className={root}>
            <MobileMenu className={hamburger} onClick={handleClickMobileMenu} />
            <div className={c(wrapper, { open })}>
                <Close className={closeButton} onClick={handleClickMobileMenu} />
                <ul className={c(list)} >
                    {items.map(({ text, link }) => <li key={link} className={item}>
                        <a className={anchor} href={link}>{text}</a>
                    </li>)}
                </ul>
                <Auth isAuth={auth} />
            </div>
        </nav>
    )
}
