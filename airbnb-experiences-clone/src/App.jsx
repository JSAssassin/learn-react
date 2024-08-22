import Card from '../src/components/Card'
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
