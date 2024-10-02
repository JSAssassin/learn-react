export default function Question(props) {
    const {answerOptions, question} = props;
    const options = answerOptions.map((option, index) =>
        <button  key={index} type="button" >{option}</button>
    )
    return (
        <div className="question-container">
            <h1 className="question">{question}</h1>
            <div  className="answerOptions">
                {options}
            </div>
        </div>
    )
}
