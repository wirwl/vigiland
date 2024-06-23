import mainStyles from "./index.module.scss";
import Select, {Props} from 'react-select';
import cn from 'classnames/bind';

const { root } = mainStyles;
const c = cn.bind(mainStyles);

type SProps = Partial<Props> & {
    className?: string;
}

export function TransparentSelect(props: SProps) {
    const {className, ...rest} = props;

    return (
        <Select {...rest} className={c(root, className)} classNamePrefix="vigiland" />
    )

}
