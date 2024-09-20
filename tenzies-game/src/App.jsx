import Die from './components/Die'
import {nanoid} from "nanoid"
import React from 'react'

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  function allNewDice() {
    let result = [];
    for(let i = 1; i <=10; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        result.push({
          id: nanoid(),
          value,
          isHeld: false
        })
    }
    return result;
  }
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} />);
  function updateDice() {
    setDice(allNewDice())
  }
  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button
        type="button"
        className="roll-btn"
        onClick={updateDice}
      >
          Roll
      </button>
    </main>
  )
}

export default App
