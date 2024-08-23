import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import data from './data.js'

function App() {
  const cards = data.map(item =>
    <Card
      key={item.id}
      {...item}
    />)
  return (
    <div className='app-container'>
      <Navbar />
      <section className="cards--container">
        {cards}
      </section>
    </div>
  )
}

export default App
