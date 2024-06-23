import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import mainStyles from "./index.module.scss";
import PlayCircle from "./play-circle.svg?react";

const { root, content, subTitle, title, description, actions, howItWork, howItWorkText } = mainStyles;

export function Index() {
    return (
        <div className={root}>
            <Header />
            <main className={content}>
                <div>
                <p className={subTitle}>NFT проект</p>
                <h1 className={title}>
                    Будущее инвестиций в&nbsp;недвижимость
                </h1>
                <p className={description}>Мы делаем инвестиции в недвижимость в&nbsp;Европе безопасными, прозрачными и доступными для всех.</p>
                </div>
                <div className={actions}>
                    <Button text="Купить недвижимость" />
                    <button className={howItWork}>
                        <PlayCircle/>
                        <span className={howItWorkText}>Как это работает?</span>
                    </button>
                </div>
            </main>
        </div>)
}
