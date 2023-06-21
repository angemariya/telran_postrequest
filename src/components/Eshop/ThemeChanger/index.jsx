import { createContext, useState } from "react";
import styles from './styles.module.css'

export const ThemeContext = createContext('light');

export const ThemeChanger = (props) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={theme}>
            <button className={styles.button} onClick={()=>{
                theme === "light" ?
                setTheme('dark') :
                setTheme('light')}}>
                Change theme
            </button>
            {props.children}
        </ThemeContext.Provider>
    )

}