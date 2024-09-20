export default function Die(props) {
    const {die, holdDice} = props;
    const styles = {
        backgroundColor: die.isHeld ? '#59E391' : 'white'
    }
    return (
    <div className="die-face" style={styles} onClick={holdDice}>
        <h1 className="die-num">{die.value}</h1>
    </div>
    )
}
