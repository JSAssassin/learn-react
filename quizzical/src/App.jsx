import {useState} from 'react';
import Intro from './components/Intro'
import Questions from './components/Questions'

function App() {
  const [started, setStarted] = useState(false);
  function startQuiz() {
    setStarted(true);
  }
  return (
    started  ?  <Questions /> : <Intro startQuiz={startQuiz} />
  )
}

export default App
