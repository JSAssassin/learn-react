import Toast from './components/Toast'
import { data } from './data'

function App() {
  const toasts = data.map((d, i) => <Toast
    key={`toast - ${i}`}
    status={d.status.toLowerCase()}
    text={d.text}
  />)
  return (
    <>
      <h1 className='title'>Toast Popups</h1>
      <div className="toasts-container">
        {toasts}
      </div>
    </>
  )
}

export default App
