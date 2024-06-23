import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { menuItems } from "./config";
import mainStyles from "./index.module.scss";

const { root } = mainStyles;

export function Header() {
    return (
        <div className={root}>
            <Logo/>
            <Menu items = {menuItems}/>
        </div>)
}
