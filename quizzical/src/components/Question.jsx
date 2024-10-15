import AnswerOption from './AnswerOption';

export default function Question(props) {
    const {
        question, answerOptions, questionId, handleOptionSelect, editable,
        checkAnswers,correctAnswers, incorrectAnswers
    } = props;
    const options = answerOptions.map((option, index) => {
        return (
            <AnswerOption
                key={index}
                index={index}
                option={option}
                questionId={questionId}
                handleOptionSelect={handleOptionSelect}
                editable={editable}
                checkAnswers={checkAnswers}
                correctAnswers={correctAnswers}
                incorrectAnswers={incorrectAnswers}
            />
        )
    })
    return (
        <div className="question-container">
            <h1 className="question">{question}</h1>
            <div className="answerOptions">
                {options}
            </div>
        </div>
    )
}
