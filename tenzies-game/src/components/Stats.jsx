export default function Stats(props) {
    return (
        <div className="game-stats">
            <h1>Game Stats</h1>
            <p>{`Total Number of Rolls: ${props.numOfRolls}`}</p>
        </div>
    )
}
