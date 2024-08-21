export default function Card() {
    return (
        <div className="card--container">
            <img
                src="../assets/katie-zaferes.png"
                className="card--img"
                alt="Main card image."
            />
            <div className="card--details">
                <div className="card--stats">
                    <img
                        src="../assets/star.png"
                        className="card--img-star"
                        alt="Star icon"
                    />
                    <span>5.0</span>
                    <span className="grey">(6) &bull;</span>
                    <span className="grey">USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </div>
    )
}
