export default function Intro(props) {
    const {startQuiz} = props;
    return (
        <main className='intro-container'>
            <h1 className='intro-title'>MindFlex</h1>
            <p className='intro-description'>
                Welcome to MindFlex! Put your mind to the test with a fun
                and engaging quiz game where you’ll tackle a variety of
                questions. Each question comes with a couple of answer options
                — choose wisely! If you guess correctly, you earn a point; if
                not, no worries! Ready to play?
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
