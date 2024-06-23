import mainStyles from "./index.module.scss";
import LogoSVG from "./logo.svg?react";

const { root, icon, text } = mainStyles;

export function Logo() {
    // const showText = useMediaQuery('(min-width: 701px)');
    // const matches = useMediaQuery('(min-width: 867px)');

    return (
        <div className={root}>
            <LogoSVG className={icon}/>
            {<span className={text}>Vigiland</span>}
        </div>)
}
