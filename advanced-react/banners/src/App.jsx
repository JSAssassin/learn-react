import Banner from './components/Banner'

function App() {
  return (
    <>
      <h1 className='title'>Banners</h1>
      <div className="banners-container">
        <div className="banner-titles">
          <h1>Success</h1>
          <h1>Warning</h1>
          <h1>Error</h1>
          <h1>Neutral</h1>
        </div>
        <div className="banner-section">
          <h1 className="section-header multiline">Multi Line</h1>
          <Banner
            title='Congratulations!'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
            status='success'
          />
          <Banner
            title='Attention'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
            status='warning'
          />
          <Banner
            title='There is a problem with your application'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
            status='error'
          />
          <Banner
            title='Update available'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
            status='neutral'
          />
        </div>
        <div className="banner-section">
          <h1 className="section-header singleline">Single Line</h1>
          <Banner
            title='Congratulations!'
            status='success'
          />
          <Banner
            title='Attention'
            status='warning'
          />
          <Banner
            title='There is a problem with your application'
            status='error'
          />
          <Banner
            title='Update available'
            status='neutral'
          />
        </div>
      </div>
    </>
  )
}

export default App
