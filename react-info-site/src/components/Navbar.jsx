
export default function Navbar(props) {
    return (
        <nav className={`navbar--container ${props.lightMode ? 'light' : ''}`}>
            <img className="navbar--logo_img" src="../src/assets/reactjs-icon.png" alt="react logo" width="40" height="40"/>
            <h1 className="navbar--logo_txt">ReactFacts</h1>
            <div className="toggler">
                <p className="toggler-dark">
                    Dark
                </p>
                <div
                    className="toggler-slider"
                    onClick={props.toggleLightMode}
                >
                    <div className="toggler-slider--circle"></div>
                </div>
                <p className="toggler-light">
                    Light
                </p>
            </div>
        </nav>
    )
};
