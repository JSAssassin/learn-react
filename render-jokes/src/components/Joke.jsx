
export default function Joke({setup, punchline}) {
    return (
        <div>
            {setup && <h1>{setup}</h1>}
            <h2>{punchline}</h2>
        </div>
    )
}
