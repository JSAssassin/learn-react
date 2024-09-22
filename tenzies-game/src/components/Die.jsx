export default function Die(props) {
    const {die, holdDice} = props;
    const styles = {
        backgroundColor: die.isHeld ? '#59E391' : 'white'
    }
    const dots = Array.from({length: die.value}, (_, index) => {
        return (
            <div key={index} className="dot"></div>
        )
    });
    return (
        <div className="die-face" style={styles} onClick={holdDice}>
            <div className={`dot-${die.value}`}>
                {dots}
            </div>
        </div>
    )
}
