import classnames from 'classnames';

export default function Badge({ children, type = 'square', color = 'gray' }) {
    const typeClass = type;
    const colorClass = color;
    const allClasses = classnames(typeClass, colorClass);
    return (
        <div className={allClasses}>{children}</div>
    )
}
