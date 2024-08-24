import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {formatDate} from '../helpers'

export default function Card(props) {
    const {
        coverImg, location, mapLink, title, dateRange: {start, end}, description
    } = props;
    const formattedStartDate = formatDate(start);
    const formattedEndDate = formatDate(end);
    const formattedDateRange = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div className="card--container">
            <img
                src={`../assets/${coverImg}`}
                className="card--img"
                alt="Main card image."
            />
            <div className="card--details">
                <div className='location'>
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className='location-icon'
                    />
                    <span>{location}</span>
                    <a href={mapLink}>View on Google Maps</a>
                </div>
                <h1>{title}</h1>
                <h3>{formattedDateRange}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
