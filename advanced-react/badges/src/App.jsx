import Badge from './components/Badge'

function App() {
  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  const squareBadges = colors.map(
    color => <Badge key={`${color}-square`} type='square' color={color} size='medium'>Badge</Badge>
  )
  const pillBadges = colors.map(
    color => <Badge key={`${color}-pill`} type='pill' color={color} size='small'>Badge</Badge>
  )
  return (
    <>
      <h1 className='title'>Badges</h1>
      <div className='square-badges-container'>
        <p className='badges-title'>Square</p>
        {squareBadges}
        <Badge type='square' color='red' size='small'>Small</Badge>
        <Badge type='square' color='blue' size='medium'>Medium</Badge>
        <Badge type='square' color='green' size='large'>Large</Badge>
      </div>
      <div className='pill-badges-container'>
        <p className='badges-title'>Pill</p>
        {pillBadges}
        <Badge type='pill' color='red' size='small'>Small</Badge>
        <Badge type='pill' color='blue' size='medium'>Medium</Badge>
        <Badge type='pill' color='green' size='large'>Large</Badge>
      </div>
    </>
  )
}

export default App
