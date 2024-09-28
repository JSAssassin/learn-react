import topRightBlob from './assets/top-right-blob.png'
import bottomLeftBlob from './assets/bottom-left-blob.png'

function App() {
  return (
    <main className='intro-container'>
      <img
        src={`${topRightBlob}`}
        alt="Light yellow blob in the top right corner."
        className='intro-top-right-blob-img'
      />
      <h1 className='intro-title'>Quizzical</h1>
      <p className='intro-description'>
        Welcome to Quizzical! Put your knowledge to the test with a fun and
        engaging quiz game where you’ll tackle a variety of questions. Each
        question comes with a couple of answer options — choose wisely! If you
        guess correctly, you earn a point; if not, no worries! Ready to play?
      </p>
      <button type="button" className='intro-start-btn'>Start quiz</button>
      <img
        src={`${bottomLeftBlob}`}
        alt="Light blue blob in the bottom left corner."
        className='intro-bottom-left-blob-img'
      />
    </main>
  )
}

export default App
