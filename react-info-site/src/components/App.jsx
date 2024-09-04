import MainContent from './MainContent';
import Navbar from './Navbar';
import {useState} from 'react';

export default function App() {
    const [lightMode, setLightMode] = useState(false);
    function toggleLightMode() {
        setLightMode(prevVal => !prevVal);
    }
    return (
        <div>
            <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
            <MainContent lightMode={lightMode}/>
        </div>
    )
}
