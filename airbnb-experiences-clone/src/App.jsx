import Card from '../src/components/Card'
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'
import data from './data.js'

function App() {
  const cards = data.map(item =>
    <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      title={item.title}
      price={item.price}
      location={item.location}
    />)
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      <section className="cards--container">
        {cards}
      </section>
    </div>
  )
}

export default App
