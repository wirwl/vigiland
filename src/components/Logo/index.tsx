import mainStyles from "./index.module.scss";
import LogoSVG from "./logo.svg?react";

const { root, icon, text } = mainStyles;

export function Logo() {
    return (
        <div className={root}>
            <LogoSVG className={icon}/>
            <span className={text}>Vigiland</span>
        </div>)
}
