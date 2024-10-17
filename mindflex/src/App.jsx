import {useState} from 'react';
import bottomLeftBlob from './assets/bottom-left-blob.png';
import Intro from './components/Intro';
import topRightBlob from './assets/top-right-blob.png';
import Question from './components/Question';
import {quizAnswers, quizQuestions} from './helpers';

function App() {
  const [started, setStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [editable, setEditable] = useState(true);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [incorrectAnswers, setIncorrectAnswers] = useState({});
  const [score, setScore] = useState(0);


  const quiz = quizQuestions.map(quizQuestion => {
    return (
      <Question
        key={quizQuestion.id}
        questionId={quizQuestion.id}
        question={quizQuestion.question}
        answerOptions={quizQuestion.answerOptions}
        handleOptionSelect={handleOptionSelect}
        editable={editable}
        checkAnswers={checkAnswers}
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
      />
    )
  })

  function startQuiz() {
    setStarted(true);
  }

  function handleOptionSelect(questionId, answerIndex) {
    setUserAnswers(prevValues => {
      return {...prevValues, [questionId]: answerIndex};
    });
  }

  function handleCheckAnswers() {
    if(Object.keys(userAnswers).length !== quizQuestions.length) {
      alert("Please select answers for all questions.");
      return;
    }
    setCheckAnswers(true);
    setEditable(false);
    const incorrectAnswers = {};
    const correctAnswers = {};
    for (let quizAnswer of quizAnswers) {
      correctAnswers[quizAnswer.questionId] = quizAnswer.correctAnswer;
      if(userAnswers[quizAnswer.questionId] === quizAnswer.correctAnswer) {
        setScore(prev => prev + 1);
      } else {
        incorrectAnswers[quizAnswer.questionId] = userAnswers[quizAnswer.questionId]
      }
    }
    setCorrectAnswers(correctAnswers);
    setIncorrectAnswers(incorrectAnswers);
  }

  function handlePlayAgain() {
    setStarted(false);
    setEditable(true);
    setCheckAnswers(false);
    setUserAnswers({});
    setCorrectAnswers({});
    setIncorrectAnswers({});
    setScore(0);
  }

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
            {
              checkAnswers ?
              <div className="score-summary">
                <p>You scored {score} / {quizQuestions.length} correct answers</p>
                <button type="button" className='play-again-btn' onClick={handlePlayAgain}>
                  Play again
                </button>
              </div>
              :
              <button type="button" className='check-answers-btn' onClick={handleCheckAnswers}>
                Check answers
              </button>
            }
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
