import { TbInbox } from "react-icons/tb";
import classnames from 'classnames';

const themes = ['avacado', 'peach', 'ocean', 'default'];

export default function Tooltip({
    icon=<TbInbox />, title, text, className='', theme='default'
}) {
    if(!themes.includes(theme)) {
        theme = 'default'
    }
    const allClasses = classnames(
        'dialogue-box',
        theme,
        className
    );
    return (
        <div className={allClasses}>
            <span className="icon">{icon}</span>
            <div className="tooltip-header">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
