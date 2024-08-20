import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter, faInstagram, faGithub, faFacebookF
} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <div className="footer--container">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon fb" icon={faFacebookF} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faGithub} />
        </div>
    )
}
