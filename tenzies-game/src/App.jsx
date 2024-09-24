import Confetti from 'react-confetti'
import Die from './components/Die'
import {nanoid} from "nanoid"
import React from 'react'
import Stats from './components/Stats'
import Timer from './components/Timer'

function App() {
  const [dice, setDice] = React.useState([]);
  const [numOfRolls, setNumOfRolls] = React.useState(0);
  const [ticks, setTicks] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
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
      setNumOfRolls(0);
      setDice([]);
      setTicks(0);
      setIsRunning(false);
    } else {
      if(!isRunning) {
        setIsRunning(true);
      }
      setNumOfRolls(numOfRolls+1);
      setDice(oldDice => {
        if(oldDice.length === 0) {
          return allNewDice();
        } else {
          return oldDice.map(
            die => die.isHeld ? die :
            {...die, value: getRandomValue()})
        }
      });
    }
  }
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ? {...die, isHeld: !die.isHeld} : die)
    )
  }
  const diceElements = dice.length === 0 ?
    Array.from({ length: 10 }, () => (
      <Die key={nanoid()} die={{ id: nanoid(), value: null, isHeld: false }} />
    )) :
    dice.map(
      die => <Die key={die.id} die={die} holdDice={() => holdDice(die.id)}/>);

  React.useEffect(() => {
    const hasWon = dice.length > 0 && dice.every(
      die => die.isHeld === true && die.value === dice[0].value);
    if(hasWon) {
      setTenzies(true);
      setIsRunning(false);
    };
  }, [dice])
  React.useEffect(() => {
    let intervalId;
    if(isRunning) {
      intervalId = setInterval(() => {
        setTicks(prevVal => prevVal + 1)
      }, 10)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, ticks])
  return (
    <main>
      {tenzies && (
        <div>
          <Stats numOfRolls={numOfRolls} ticks={ticks} />
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Decide what number you want to freeze or target before your first roll.
        Once you have made your choice, roll the dice until all the dice show
        the same number. Click each die to freeze it at its current value
        between rolls.
      </p>
      <div className="dice-container">
        {diceElements}
      </div>
      <Timer ticks={ticks} isRunning={isRunning} />
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
