import {useId} from 'react'

export default function Signup () {
    const id = useId();
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main className="signup--form-container">
            <form className="signup--form" onSubmit={handleSubmit}>
                <label htmlFor={id + "-email"}>Email</label>
                <input
                    id={id + "-email"}
                    type="email"
                    className="signup--form-input"
                />
                <label htmlFor={id + "-password"}>Password</label>
                <input
                    id={id + "-password"}
                    type="password"
                    className="signup--form-input"
                />
                <label htmlFor={id + "-confirm-password"}>Confirm Password</label>
                <input
                    id={id + "-confirm-password"}
                    type="password"
                    className="signup--form-input"
                />
                <div className="signup--form-marketing">
                    <input
                        id={id + "-okayToEmail"}
                        type="checkbox"
                    />
                    <label htmlFor={id + "-okayToEmail"}>I want to join the newsletter</label>
                </div>
                <button
                    className="signup--form-submit"
                >
                    Sign up
                </button>
            </form>
        </main>
    )
}
