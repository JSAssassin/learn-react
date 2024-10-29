import classnames from 'classnames';
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi";

const iconMap = {
    success: <FaCheckCircle />,
    warning: <FaExclamationTriangle />,
    error: <FaCircleXmark />,
    neutral: <HiInformationCircle />
};

export default function Banner({ title, text, status, className = '' }) {
    const icon = iconMap[status] || iconMap['neutral'];

    const allClasses = classnames(
        'banner',
        `banner-${status}`,
        className
    );

    return (
        <div className={allClasses}>
            <span className="icon">{icon}</span>
            <div className="banner-header">
                <h1>{title}</h1>
                { text && <p>{text}</p> }
            </div>
        </div>
    )
}
