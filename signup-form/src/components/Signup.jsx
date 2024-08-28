import {useId, useState} from 'react'

export default function Signup () {
    const id = useId();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        marketingEmails: false,
    })
    function handleChange(event) {
        const {checked, type, name, value} = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        const {password, confirmPassword, marketingEmails} = formData;
        if(confirmPassword !== password) {
            console.log("passwords do not match")
        } else {
            if(marketingEmails) {
                console.log("Thanks for signing up for our newsletter!")
            }
            console.log("Successfully signed up")
        }
    }
    return (
        <main className="signup--form-container">
            <form className="signup--form" onSubmit={handleSubmit}>
                <label htmlFor={id + "-email"}>Email</label>
                <input
                    id={id + "-email"}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="signup--form-input"
                />
                <label htmlFor={id + "-password"}>Password</label>
                <input
                    id={id + "-password"}
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="signup--form-input"
                />
                <label htmlFor={id + "-confirm-password"}>Confirm Password</label>
                <input
                    id={id + "-confirm-password"}
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="signup--form-input"
                />
                <div className="signup--form-marketing">
                    <input
                        id={id + "-okayToEmail"}
                        type="checkbox"
                        name="marketingEmails"
                        checked={formData.marketingEmails}
                        onChange={handleChange}
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
