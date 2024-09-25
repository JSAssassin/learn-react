import { formatTime, pad } from "./helper";

export default function Stats(props) {
    const {mins, secs, ms} = formatTime(props.ticks);
    const {mins: minsForBestTime, secs: sForBestTime, ms: msForBestTime} = formatTime(props.bestRecord);
    return (
        <div className="game-stats">
            <h1 className="stats-title">Game Stats</h1>
            <p className="stats-item"><strong>Total Rolls:</strong> {props.numOfRolls}</p>
            <p className="stats-item"><strong>Your Time:</strong> {pad(mins)}m {pad(secs)}s {pad(ms)}ms</p>
            <p className="stats-item"><strong>Best Time:</strong> {pad(minsForBestTime)}m {pad(sForBestTime)}s {pad(msForBestTime)}ms</p>
        </div>
    )
}
