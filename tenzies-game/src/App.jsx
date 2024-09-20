import Confetti from 'react-confetti'
import Die from './components/Die'
import {nanoid} from "nanoid"
import React from 'react'

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  function getRandomValue() {
    return Math.floor(Math.random() * 6 + 1);
  }
  function allNewDice() {
    let result = [];
    for(let i = 1; i <=10; i++) {
        const value = getRandomValue();
        result.push({
          id: nanoid(),
          value,
          isHeld: false
        })
    }
    return result;
  }
  function rollDice(e) {
    if(tenzies && e.target.textContent === 'New Game') {
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setDice(oldDice => oldDice.map(
        die => die.isHeld ? die :
        {...die, value: getRandomValue()}));
    }
  }
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ? {...die, isHeld: !die.isHeld} : die)
    )
  }
  const diceElements = dice.map(die => <Die key={die.id} die={die} holdDice={() => holdDice(die.id)}/>);
  React.useEffect(() => {
    const hasWon = dice.every(
      die => die.isHeld === true && die.value === dice[0].value);
    if(hasWon) {
      setTenzies(true);
    };
  }, [dice])
  return (
    <main>
      {tenzies && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button
        type="button"
        className="roll-btn"
        onClick={rollDice}
      >
      {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  )
}

export default App
