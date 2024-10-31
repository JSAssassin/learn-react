import Testimonials from "./components/Testimonial"

function App() {
  return (
    <div className='app-container'>
      <Testimonials
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
        laborum sed rerum et corporis.'
        author={{name: 'May Andersons', position: 'CTO, Workcation'}}
      />
    </div>
  )
}

export default App
