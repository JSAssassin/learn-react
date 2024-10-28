import Badge from './components/Badge'

function App() {
  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  const squareBadges = colors.map(
    color => <Badge key={color} type='square' color={color}>Badge</Badge>
  )
  const pillBadges = colors.map(
    color => <Badge key={color} type='pill' color={color}>Badge</Badge>
  )
  return (
    <>
      <h1 className='title'>Badges</h1>
      <div className='square-badges-container'>
        <p className='badges-title'>Square</p>
        {squareBadges}
      </div>
      <div className='pill-badges-container'>
        <p className='badges-title'>Pill</p>
        {pillBadges}
      </div>
    </>
  )
}

export default App
