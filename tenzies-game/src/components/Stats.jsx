import { formatTime, pad } from "./helper";

export default function Stats(props) {
    const {minutes, seconds, milliseconds } = formatTime(props.ticks);
    return (
        <div className="game-stats">
            <h1 className="stats-title">Game Stats</h1>
            <p className="stats-item"><strong>Total Rolls:</strong> {props.numOfRolls}</p>
            <p className="stats-item"><strong>Your Time:</strong> {pad(minutes)}m {pad(seconds)}s {pad(milliseconds)}ms</p>
        </div>
    )
}
