import Toast from './components/Toast'
import React from 'react'
import { data } from './data'

function App() {
  const [toastData, setToastData] = React.useState(null);

  function handleOnClick(e) {
    const buttonText = e.target.innerText;
    const [toastContent] = data.filter(i => i.status === buttonText);
    setToastData(toastContent)
  }

  return (
    <>
      <h1 className='title'>Toast Popups</h1>
      <div className='buttons'>
        <div>
          <button className='btn btn-success' onClick={handleOnClick}>Success</button>
        </div>
        <div>
          <button className='btn btn-warning' onClick={handleOnClick}>Warning</button>
        </div>
        <div>
          <button className='btn btn-information' onClick={handleOnClick}>Information</button>
        </div>
        <div>
          <button className='btn btn-error' onClick={handleOnClick}>Error</button>
        </div>
      </div>
      {
        toastData &&
        <Toast
          status={toastData.status}
          text={toastData.text}
          timeout={1000}
          onClose={() => setToastData(null)}
        />
      }
    </>
  )
}

export default App
