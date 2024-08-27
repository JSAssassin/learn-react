import {useState} from 'react'
import Count from './Count'

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
            <Count count={count} />
            <button className='counter--plus' onClick={add}>
                +
            </button>
        </main>
    )
}
