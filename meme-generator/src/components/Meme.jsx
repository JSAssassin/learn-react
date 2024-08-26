export default function Meme () {
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
                <button className="meme--form-btn">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}
