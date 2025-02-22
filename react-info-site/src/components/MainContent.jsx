export default function MainContent(props) {
    return (
        <main className={`main--container ${props.darkMode ? 'dark' : ''}`}>
            <h1 className="main--header">Fun facts about React</h1>
            <ul className="main--list">
                <li className="main--list_item">Was first released in 2013</li>
                <li className="main--list_item">Was originally created by Jordan Walke</li>
                <li className="main--list_item">Has well over 200K stars on GitHub</li>
                <li className="main--list_item">Is maintained by Meta</li>
                <li className="main--list_item">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            {/* <img className="main--bg-logo_img" src="../src/assets/reactjs-icon-2.png" alt="halved react logo" /> */}
        </main>
    )
};
