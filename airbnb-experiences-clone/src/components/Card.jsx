export default function Card(props) {
    const {
        coverImg, stats, location, title, price, openSpots
    } = props;
    let badgeText;
    if(openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (location === 'Online') {
        badgeText = 'ONLINE';
    }
    return (
        <div className="card--container">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                src={`../assets/${coverImg}`}
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
                    <span>{stats.rating}</span>
                    <span className="grey">({stats.reviewCount}) &bull;</span>
                    <span className="grey">{location}</span>
                </div>
                <p>{title}</p>
                <p><span className="bold">From ${price}</span> / person</p>
            </div>
        </div>
    )
}
