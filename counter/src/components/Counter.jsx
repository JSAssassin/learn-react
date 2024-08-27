import {useState} from 'react'

export default function Counter () {
    const [count, setCount] = useState(0);
    function add() {
        setCount(prevVal => prevVal + 1)
    }

    function subtract() {
        setCount(prevVal => prevVal - 1)
    }
    return (
        <main className='counter--container'>
            <button className='counter--minus' onClick={subtract}>
                -
            </button>
            <div className='counter--display'>
                <h1>{count}</h1>
            </div>
            <button className='counter--plus' onClick={add}>
                +
            </button>
        </main>
    )
}
