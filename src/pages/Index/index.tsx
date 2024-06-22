import { Header } from "../../components/Header";
import mainStyles from "./index.module.scss";

const { root } = mainStyles;

export function Index() {
    return (
        <div className={root}>
            <Header/>
        </div>)
}
