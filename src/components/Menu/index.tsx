import mainStyles from "./index.module.scss";

const { root, list, item, anchor } = mainStyles;

type TMenuItem = {
    text: string;
    link: string;
}

type Props = {
    items: TMenuItem[];
}

export function Menu({ items }: Props) {
    return (
        <nav className={root}>
            <ul className={list} >
                {items.map(({ text, link }) => <li className={item}>
                    <a className={anchor} href={link}>{text}</a>
                </li>)}
            </ul>
        </nav>
    )
}
