
export default function Question(props) {
    const {
        questionId, question, answerOptions, handleOptionSelect, editable
    } = props;
    const options = answerOptions.map((option, index) => {
        const id = `quiz-${questionId}-${index}`;
        return (
            <div  key={index}>
                <input
                    id={id}
                    type="radio"
                    name={`quiz-${questionId}`}
                    value={index}
                    disabled={editable ? false : true}
                    onClick={() => handleOptionSelect(questionId, index)}
                />
                <label htmlFor={id}>
                    {option}
                </label>
            </div>
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
