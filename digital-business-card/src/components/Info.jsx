import profile from '../assets/profile-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import envelope icon
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn icon


export default function Info() {
    return (
        <div className="info--container">
            <img src={profile} alt="profile picture" />
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <a href="#">laurasmith.website</a>
            <button><FontAwesomeIcon icon={faEnvelope} />Email</button>
            <button><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
        </div>
    )
}
