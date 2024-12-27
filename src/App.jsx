import { useContext, useEffect, useState } from 'react'
import Homepage from './pages/Homepage'
import { ThemeContext } from './context/ThemeContext'
import { Route, Routes } from 'react-router-dom'
import Resume from './pages/Resume'


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
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </div>
    )
}

export default App