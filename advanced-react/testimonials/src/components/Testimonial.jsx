import logo from '../assets/images/Logo.png'

export default function Testimonials({ text, author = {}, profileImg }) {
    return (
    <div className="testimonial-container">
        {
            profileImg ? <img src={profileImg} alt="User Profile" className="profile-img" /> :
            <img src={logo} alt="App Logo" className="logo"/>
        }
        <div className='testimonial'>
            <p className="testimonial-text">
                {`"${text}"`}
            </p>
            <div className="testimonial-author">
                <p className="author-name">{author.name}</p>
                <p className="author-position">{author.position}</p>
            </div>
        </div>
    </div>
    )
}
