import mainStyles from "./index.module.scss";
import Select, {Props} from 'react-select';

const { root } = mainStyles;

export function TransparentSelect(props: Partial<Props<any,any,any>>) {
    return (
        <Select {...props} className={root} classNamePrefix="vigiland" />
    )

}
