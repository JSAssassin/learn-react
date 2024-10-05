import topRightBlob from './assets/top-right-blob.png';
import bottomLeftBlob from './assets/bottom-left-blob.png';
import {useEffect, useState} from 'react';
import Intro from './components/Intro';
import Question from './components/Question';
import questionsData from './questionsData';

function App() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState({});

  function startQuiz() {
    setStarted(true);
  }

  function handleOptionSelect(questionId, answerIndex) {
    setAnswers(prevValues => {
      return {...prevValues, [questionId]: answerIndex};
    });
  }

  useEffect(() => {
    console.log('answers: ', answers);
  })
  const {data: {questions: quizQuestions}} = questionsData;
  const quiz = quizQuestions.map(quizQuestion =>
    <Question
      key={quizQuestion.id}
      quizQuestion={quizQuestion}
      handleOptionSelect={handleOptionSelect}
    />
  )
  return (
    <div>
      <img
        src={`${topRightBlob}`}
        alt="Light yellow blob in the top right corner."
        className={started ? 'quiz-top-right-blob-img' : 'intro-top-right-blob-img'}
      />
      <div className='quiz-container'>
        {
          started  ?
          <div className='quiz'>
            {quiz}
            <button type="button" className='check-answers-btn'>
              Check answers
            </button>
          </div>
          :
          <Intro startQuiz={startQuiz}/>
        }
      </div>
      <img
        src={`${bottomLeftBlob}`}
        alt="Light blue blob in the bottom left corner."
        className={started ? 'quiz-bottom-left-blob-img' :'intro-bottom-left-blob-img'}
      />
    </div>
  )
}

export default App
