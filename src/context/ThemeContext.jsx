import { createContext, useState } from 'react'
// import { toast } from "react-toastify";


export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    
    const [theme, setTheme] = useState('light')




    const value = {
    theme,
    setTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider