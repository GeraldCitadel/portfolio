import { useContext, useEffect, useState } from 'react'
import Homepage from './pages/Homepage'
import { ThemeContext } from './context/ThemeContext'


const App = () => {

    const { theme } = useContext(ThemeContext)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(systemPref)
    }, [])
    return (
        <div className={theme === 'dark' ?
         'dark-mode' 
        //  : isDark ? "dark-mode" 
         : ''}>
            <Homepage />
        </div>
    )
}

export default App