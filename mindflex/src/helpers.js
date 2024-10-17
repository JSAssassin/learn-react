import answersData from './answersData';
import questionsData from './questionsData';

function shuffleAnswerOptions(answerOptions) {
  const shuffled= [...answerOptions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
const {data: {answers: quizAnswers}} = answersData;
const {data: {questions: quizQuestions}} = questionsData;

quizQuestions.map(quizQuestion => {
  const answerOptions = shuffleAnswerOptions(quizQuestion.answerOptions);
  quizQuestion.answerOptions = answerOptions;
  return quizQuestion;
})

const quizAnswersCopy = JSON.parse(JSON.stringify(quizAnswers));

quizAnswersCopy.map(quizAnswer => {
  const question = quizQuestions.find(q => q.id === quizAnswer.questionId);
  const index = question.answerOptions.indexOf(quizAnswer.correctAnswer);
  if (question && index !== -1) {
    quizAnswer.correctAnswer = index;
  }
  return quizAnswer;
})

export  {
  quizQuestions,
  quizAnswersCopy as quizAnswers
};
