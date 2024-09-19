import Die from './components/Die'
import React from 'react'

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  function allNewDice() {
    let result = [];
    for(let i = 1; i <=10; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        result.push(value)
    }
    return result;
  }
  const diceElements = dice.map(
    (die, index) => <Die key={index + 1} value={die} />);

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  )
}

export default App
