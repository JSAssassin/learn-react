import Testimonials from "./components/Testimonial"
import profileImg from "./assets/images/profile.png"

function App() {
  return (
    <div className='app-container'>
      <Testimonials
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
        laborum sed rerum et corporis.'
        author={{name: 'May Andersons', position: 'CTO, Workcation'}}
        profileImg={profileImg}
      />
    </div>
  )
}

export default App
