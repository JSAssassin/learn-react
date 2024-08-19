import profile from '../assets/profile-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Info() {
    return (
        <div className="info--container">
            <img src={profile} alt="profile picture" />
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <a href="#">laurasmith.website</a>
            <div className="buttons">
                <button className='icon-envelop'><FontAwesomeIcon icon={faEnvelope} />Email</button>
                <button className='icon-linkedin'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
            </div>
        </div>
    )
}
