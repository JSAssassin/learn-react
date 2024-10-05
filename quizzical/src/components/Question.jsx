export default function Question(props) {
    const {quizQuestion, handleOptionSelect} = props;
    const options = quizQuestion.answerOptions.map((option, index) => {
        const id = `${quizQuestion.id}-${index}`;
        return (
            <div  key={index}>
                <input
                    id={id}
                    type="radio"
                    name={`quiz-${quizQuestion.id}`}
                    value={index}
                    onClick={() => handleOptionSelect(quizQuestion.id, index)}
                />
                <label htmlFor={id}>
                    {option}
                </label>
            </div>
        )
    })
    return (
        <div className="question-container">
            <h1 className="question">{quizQuestion.question}</h1>
            <div className="answerOptions">
                {options}
            </div>
        </div>
    )
}
