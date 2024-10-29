import Banner from './components/Banner'
import { data } from './data'

function App() {
  const bannerTitles = data.map((d, i) => <h1 key={i}>{d.status}</h1>);
  const bannersWithText = data.map((d, i) => <Banner
    key={`bannersWithText - ${i}`}
    title={d.title}
    status={d.status.toLowerCase()}
    text={d.text}
  />)

  const dataCopy = JSON.parse(JSON.stringify(data));
  dataCopy.forEach(item => delete item.text);

  const bannersWithoutText = dataCopy.map((d, i) => <Banner
    key={`bannersWithoutText - ${i}`}
    title={d.title}
    status={d.status.toLowerCase()}
  />)

  return (
    <>
      <h1 className='title'>Banners</h1>
      <div className="banners-container">
        <div className="banner-titles">
          {bannerTitles}
        </div>
        <div className="banner-section">
          <h1 className="section-header">Multi Line</h1>
          {bannersWithText}
        </div>
        <div className="banner-section">
          <h1 className="section-header">Single Line</h1>
          {bannersWithoutText}
        </div>
      </div>
    </>
  )
}

export default App
