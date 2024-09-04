
export default function Navbar(props) {
    return (
        <nav className={`navbar--container ${props.darkMode ? 'dark' : ''}`}>
            <img className="navbar--logo_img" src="../src/assets/reactjs-icon.png" alt="react logo" width="40" height="40"/>
            <h1 className="navbar--logo_txt">ReactFacts</h1>
            <div className="toggler">
                <p className="toggler-light">
                    Light
                </p>
                <div
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider--circle"></div>
                </div>
                <p className="toggler-dark">
                    Dark
                </p>
            </div>
        </nav>
    )
};
