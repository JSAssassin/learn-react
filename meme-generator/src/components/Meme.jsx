export default function Meme () {
    return (
        <main className="meme--container">
            <form className="meme--form">
                <input
                    type="text"
                    className="meme--form-input"
                    placeholder="Top text"
                />
                <input
                    type="text"
                    className="meme--form-input"
                    placeholder="Bottom text"
                />
                <button className="meme--form-btn">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}
