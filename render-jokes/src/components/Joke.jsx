import {useState} from 'react';

export default function Joke({setup, punchline}) {
    const [isShown, setIsShown] = useState(false)
    function toggle() {
        setIsShown(prevVal => !prevVal)
    }
    const styles = {
        display: isShown ? 'block' : 'none'
    }
    return (
        <div>
            {/* conditional rendering */}
            {setup && <h2>{setup}</h2>}
            <p style={styles}>{punchline}</p>
            <button onClick={toggle}>{isShown ? 'Hide' : 'Show'} Punchline</button>
            <hr/>
        </div>
    )
}
