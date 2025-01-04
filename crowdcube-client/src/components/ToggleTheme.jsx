import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.querySelector('html').setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        // Ensure the initial theme matches the `data-theme` attribute
        const currentTheme = document.querySelector('html').getAttribute('data-theme') || 'light';
        setTheme(currentTheme);
    }, []);

    return (
        <div className="m-5">
            <label className="swap swap-rotate">
                <input onClick={toggleTheme} type="checkbox" />
                <div className="swap-on"> <FaSun size={30} /> </div>
                <div className="swap-off"><FaMoon size={30} /></div>
            </label>
        </div>
    );
};

export default ToggleTheme;
