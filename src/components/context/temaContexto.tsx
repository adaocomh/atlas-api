'use client'
import { createContext, useContext, useEffect, useState, ReactNode} from "react"

type Theme = "light" | "dark"

interface ThemeContextProps {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        const temaSalvo = localStorage.getItem('theme') as Theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const temaInicial = temaSalvo || (prefersDark ? 'dark' : 'light')
        setTheme(temaInicial)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context) throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
        return context
}