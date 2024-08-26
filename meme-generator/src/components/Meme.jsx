import {useState} from 'react'
import memeData from '../memeData'

export default function Meme () {
    const [memeImg, setMemeImg] = useState("http://i.imgflip.com/1bij.jpg");
    function getMemeImage() {
        const {data: {memes}} = memeData;
        const index = Math.floor(Math.random() * memes.length);
        const randomImg = memes[index].url;
        setMemeImg(randomImg)
    }
    return (
        <main className="meme--container">
            <form className="meme--form">
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
                        placeholder="Shut up"
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
                        placeholder="And take my money"
                    />
                </div>
                <button
                    type="button"
                    className="meme--form-btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <img
                src={memeImg}
                alt="meme image"
                className='meme--img'
            />
        </main>
    )
}
