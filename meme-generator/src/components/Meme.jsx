import {useEffect, useState} from 'react'

export default function Meme () {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([]);

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    function getMemeImage() {
        const index = Math.floor(Math.random() * allMemes.length);
        const randomImg = allMemes[index].url;
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
