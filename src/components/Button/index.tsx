import mainStyles from "./index.module.scss";

const { root } = mainStyles;

type Props = {
    text: string;
}

export function Button({text}:Props) {
    return (
        <button className={root}>
            {text}
        </button>)
}
