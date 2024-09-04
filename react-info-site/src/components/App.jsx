import MainContent from './MainContent';
import Navbar from './Navbar';
import {useState} from 'react';

export default function App() {
    const [darkMode, setDarkMode] = useState(true);
    function toggleDarkMode() {
        setDarkMode(prevVal => !prevVal);
    }
    return (
        <div>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MainContent darkMode={darkMode}/>
        </div>
    )
}
