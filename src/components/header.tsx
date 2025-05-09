'use client'
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
export default function Header(){
    const [theme, setStateTheme] = useState('light')
    const { setTheme } = useTheme()

    useEffect(() => {
        setTheme(theme)
    }, [, setTheme, theme]);
    return(
        <header>
            <div className="flex justify-between items-center dark:bg-[var(--cards)] dark:text-[var(--foreground)] dark:border-none dark:shadow-[0px_10px_10px_rgba(0,0,0,1)] h-[80px] p-[40px]   bg-white text-black text-[16px]  border-b-[1px] border-[#D9D9D9]  shadow-md">
                <h1 className="text-[22px]">Onde no mundo?</h1>
                <button onClick={() => setStateTheme(theme ==='light' ? 'dark' : 'light')} className="font-light cursor-pointer w-max h-max ">{theme === 'dark' ? '☼ Light Mode' : '☽ Dark mode'}</button>
            </div>
        </header>
    )
}