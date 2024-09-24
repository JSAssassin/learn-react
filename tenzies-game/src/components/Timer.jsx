import { formatTime, pad } from "./helper";

export default function Timer(props) {
    const {minutes, seconds, milliseconds } = formatTime(props.ticks);
    return (
        <div className="timer-container">
            <p className="time-display">
                {pad(minutes)}:{pad(seconds)}:{pad(milliseconds)}
            </p>
        </div>
    )
}
