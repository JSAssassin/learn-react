import logo from '../assets/images/Logo.png'
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Testimonials({
    text,
    author = {},
    profileImg,
}) {
    let containerStyles;
    let testimonialStyles;
    let testimonialTextStyles;
    let authorPositionStyle;
    if(profileImg) {
        containerStyles = {
            backgroundColor: '#2545B8',
            marginTop: '90px',
            padding: '20px'
        }
        testimonialStyles = {
            marginTop: '120px',
            color: '#FFFFFF'
        }
        testimonialTextStyles = {
            marginBottom: '34px'
        }
    } else {
        containerStyles = {
            backgroundColor: '#FFFFFF',
            color: '#111827',
            padding: '3em 1em'
        }
        testimonialTextStyles = {
            marginBottom: '84px'
        }
        authorPositionStyle = {
            color: '#6B7280'
        }
    }
    return (
    <div className="testimonial-container" style={containerStyles}>
        {
            profileImg ? <img src={profileImg} alt="User Profile" className="profile-img" /> :
            <img src={logo} alt="App Logo" className="logo"/>
        }
        <div className='testimonial' style={testimonialStyles}>
            {profileImg && <BiSolidQuoteAltLeft className='icon'/>}
            <p className="testimonial-text" style={testimonialTextStyles}>
                {`"${text}"`}
            </p>
            <div className="testimonial-author">
                <p className="author-name">{author.name}</p>
                <p className="author-position" style={authorPositionStyle}>{author.position}</p>
            </div>
        </div>
    </div>
    )
}
