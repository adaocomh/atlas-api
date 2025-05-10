'use client'
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
export default function Header(){
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);
    if(!mounted) return null
    return(
        <header>
            <div className="flex justify-between items-center dark:bg-[var(--cards)]  dark:border-none dark:shadow-[0px_10px_10px_rgba(0,0,0,1)] h-[80px] p-[40px] bg-[#ece6e1] text-black text-[16px]  border-b-[1px] border-[#D9D9D9]  shadow-md">
                <Link href={'/'}>
                <h1 className="dark:text-[#BFB2A3] hover:translate-y-[-1px] hover:text-shadow-lg text-shadow-md text-[22px] text-[#594834]">Onde no mundo?</h1></Link>
                <button onClick={() => setTheme(theme ==='light' ? 'dark' : 'light')} className="dark:text-[#BFB2A3] hover:translate-y-[-1px] hover:text-shadow-lg text-shadow-md font-light text-[#594834] cursor-pointer w-max h-max ">{theme === 'dark' ? '☼ Light Mode' : '☽ Dark mode'}</button>
            </div>
        </header>
    )
}