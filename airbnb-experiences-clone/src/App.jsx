import Card from '../src/components/Card'
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'
import data from './data.js'

function App() {
  const cardElements = data.map(d => <Card
    key={d.id}
    img={d.coverImg}
    rating={d.stats.rating}
    reviewCount={d.stats.reviewCount}
    title={d.title}
    price={d.price}
    location={d.location}
  />)
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      {cardElements}
    </div>
  )
}

export default App
