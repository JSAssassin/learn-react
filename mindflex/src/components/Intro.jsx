export default function Intro(props) {
    const {startQuiz} = props;
    return (
        <main className='intro-container'>
            <h1 className='intro-title'>MindFlex</h1>
            <p className='intro-description'>
                Welcome to MindFlex! Put your mind to test with a fun
                quiz game. Each quiz question comes with a couple of answer
                options — choose wisely! If you guess correctly, you earn a
                point; if not, no worries! Ready to start?
            </p>
            <button
                type="button"
                className='intro-start-btn'
                onClick={startQuiz}
            >
                Start
            </button>
        </main>
    )
}
