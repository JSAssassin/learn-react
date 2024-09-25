import { formatTime, pad } from "./helper";

export default function Timer(props) {
    const {mins, secs, ms } = formatTime(props.ticks);
    return (
        <div className="timer-container">
            <p className="time-display">
                {pad(mins)}:{pad(secs)}.{pad(ms, 3)}
            </p>
        </div>
    )
}
