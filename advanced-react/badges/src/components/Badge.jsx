import classnames from 'classnames';

export default function Badge({
    children,
    type = 'square',
    color = 'gray',
    size = 'medium',
    className = ''
}) {
    const allClasses = classnames(
        `badge-${type}`,
        `badge-${color}`,
        `badge-${size}`,
        className
    );
    return (
        <div className={allClasses}>{children}</div>
    )
}
