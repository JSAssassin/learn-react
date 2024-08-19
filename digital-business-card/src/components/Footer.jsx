import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook, faTwitter, faInstagram, faGithub
} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <div className="footer--container">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
        </div>
    )
}
