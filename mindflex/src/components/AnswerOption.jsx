export default function AnswerOption(props) {
    const {
        index, option, questionId, handleOptionSelect, editable,
        checkAnswers, correctAnswers, incorrectAnswers,
    } = props;
    const id = `quiz-${questionId}-${index}`;
    const isCorrect = correctAnswers[questionId] === index;
    const isIncorrect = incorrectAnswers[questionId] === index;
    return (
        <div>
            <input
                id={id}
                type="radio"
                name={`quiz-${questionId}`}
                value={index}
                disabled={editable ? false : true}
                className={
                    checkAnswers ? `${isCorrect ? 'correctAnswer' : ''} ${isIncorrect ? 'incorrectAnswer' : ''}`.trim() : ''
                }
                onClick={() => handleOptionSelect(questionId, index)}
            />
            <label htmlFor={id}>
                {option}
            </label>
        </div>
    )
}
