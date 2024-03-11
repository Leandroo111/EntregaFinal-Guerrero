import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext/ThemeContext';

const DarkComponent = () => {

    const {isDarkMode,toggleDarkMode} = useContext(ThemeContext)
    
    return (
        <div style={{background: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black'}}>
            <button onClick={toggleDarkMode}>Cambiar a dark mode</button>
        </div>
    );
};

export default DarkComponent;