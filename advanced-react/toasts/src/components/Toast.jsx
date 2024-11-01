import classnames from 'classnames';
import { FaRegCheckCircle } from "react-icons/fa";
import {
    HiOutlineInformationCircle, HiOutlineExclamationCircle
} from "react-icons/hi";
import { FaRegCircleXmark } from "react-icons/fa6";

const iconMap = {
    success: <FaRegCheckCircle />,
    warning: <HiOutlineExclamationCircle />,
    error: <FaRegCircleXmark />,
    information: <HiOutlineInformationCircle />
};

export default function Toast({ text, status, className = '' }) {
    const icon = iconMap[status] || iconMap['neutral'];

    const allClasses = classnames(
        'toast',
        `toast-${status}`,
        className
    );

    return (
        <div className={allClasses}>
            <span className="icon">{icon}</span>
            <div className="toast-header">
                <h1>{`${status[0].toUpperCase()}${status.slice(1)}`}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
