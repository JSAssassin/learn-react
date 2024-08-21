
export default function Joke({setup, punchline}) {
    return (
        <div>
            {/* conditional rendering */}
            {setup && <h2>{setup}</h2>}
            <p>{punchline}</p>
            <hr/>
        </div>
    )
}
