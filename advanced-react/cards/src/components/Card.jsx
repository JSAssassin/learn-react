import { IoCloudUploadOutline } from "react-icons/io5";
import classnames from 'classnames';

export default function Card({children, icon=<IoCloudUploadOutline />,  className = '', size = 'md', iconBg = ''}) {
    const allClasses = classnames(`card-${size}`, className);
    const styles = {
        backgroundColor: iconBg || '#3F75FE'
    }
    return (
        <div className={`card ${allClasses}`}>
            <div className="hover-text">Hover</div>
            <div className={`icon icon-${size}`} style={styles}>{icon}</div>
            {children}
        </div>
    )
}
