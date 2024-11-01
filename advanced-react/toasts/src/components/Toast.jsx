import {
    HiOutlineInformationCircle, HiOutlineExclamationCircle
} from "react-icons/hi";
import { createPortal } from 'react-dom';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import classnames from 'classnames';
import React from 'react'

const iconMap = {
    success: <FaRegCheckCircle />,
    warning: <HiOutlineExclamationCircle />,
    error: <FaRegCircleXmark />,
    information: <HiOutlineInformationCircle />
};

export default function Toast({
    text, status, className = '', timeout = 3000, onClose
}) {
    const icon = iconMap[status.toLowerCase()] || iconMap['neutral'];

    const allClasses = classnames(
        'toast',
        `toast-${status.toLowerCase()}`,
        className
    );

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (onClose) onClose();
        }, timeout);
        return () => clearTimeout(timer);
    }, [timeout, onClose]);

    const toastContent = (
        <div className={allClasses}>
            <span className="icon">{icon}</span>
            <div className="toast-header">
                <h1>{`${status[0].toUpperCase()}${status.slice(1)}`}</h1>
                <p>{text}</p>
            </div>
        </div>
    );

    return (
        createPortal(toastContent, document.body)
    )
}
