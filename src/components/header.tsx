'use client'
import { useTheme } from "./context/temaContexto"
export default function Header(){
    const { theme, toggleTheme } = useTheme()
    return(
        <header>
            <div className="flex justify-between items-center h-[80px] p-[40px] dark:text-[var(--foreground)] dark:bg-[var(--cards)] bg-white text-black text-[16px] dark:border-none border-b-[1px] border-[#D9D9D9] dark:shadow-black shadow-md">
                <h1 className="text-[22px]">Onde no mundo?</h1>
                <button onClick={toggleTheme} className="font-light cursor-pointer w-max h-max ">{theme === 'dark' ? '☼ Light Mode' : '☽ Dark mode'}</button>
            </div>
        </header>
    )
}