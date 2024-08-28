import {useState} from 'react'
import memeData from '../memeData'

export default function Meme () {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    function getMemeImage() {
        const {data: {memes}} = memeData;
        const index = Math.floor(Math.random() * memes.length);
        const randomImg = memes[index].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomImg
        }))
    }

    function handleChange(e) {
        setMeme(prevMeme => ({
            ...prevMeme,
            [e.target.name]: e.target.value,
        }))
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <main className="meme--container">
            <form className="meme--form" onSubmit={handleSubmit}>
                <div className="meme--form-input-group">
                    <label
                        htmlFor="meme--form-top-text"
                        className="meme--form-label"
                    >
                        Top text
                    </label>
                    <input
                        id="meme--form-top-text"
                        type="text"
                        className="meme--form-input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div className="meme--form-input-group">
                    <label
                        htmlFor="meme--form-bottom-text"
                        className="meme--form-label"
                    >
                        Bottom text
                    </label>
                    <input
                        id="meme--form-bottom-text"
                        type="text"
                        className="meme--form-input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="meme--form-btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img
                    src={meme.randomImage}
                    alt="meme image"
                    className='meme--img'
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}
