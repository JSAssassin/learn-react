import Tooltip from './components/Tooltip'

function App() {
  return (
    <div className='tooltip-container'>
      <h1 className='title'>tooltip</h1>
      <Tooltip
        title='Archive notes'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'
        theme='avacado'
      />
      <Tooltip
        title='Archive notes'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'
        theme='default'
      />
      <Tooltip
        title='Archive notes'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'
        theme='ocean'
      />
      <Tooltip
        title='Archive notes'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'
        theme='peach'
      />
    </div>
  )
}

export default App
