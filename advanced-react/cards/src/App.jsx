import Card from './components/Card'

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>Cards</h1>
      <Card size='lg'>
        <h2 className='card-title'>Easy Deployment</h2>
        <p className='card-text'>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </p>
      </Card>
    </div>
  )
}

export default App
