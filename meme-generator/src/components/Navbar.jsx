export default function Header () {
    return (
        <nav className="navbar--container">
            <div className="navbar--left">
                <img
                    src="../assets/troll-face.png"
                    width="40"
                    height="40"
                    alt="Troll face image"
                    className="navbar--img"
                />
                <h1 className="navbar--header1">Meme Generator</h1>
            </div>
            <h2 className="navbar--header2">React Course - Project 3</h2>
        </nav>
    )
}
