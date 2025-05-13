'use client'
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
export default function Header(){
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);
    if(!mounted) return null
    return(
        <header>
            <div className="flex justify-between items-center dark:bg-[var(--cards)]  dark:border-none dark:shadow-[0px_10px_10px_rgba(0,0,0,1)] h-[80px] bg-[#ece6e1] p-[40px] text-[16px] border-b-[1px] border-[#D9D9D9] shadow-md">
                <Link href={'/'}>
                <h1 className="md:text-[22px] dark:text-[#BFB2A3] dark:text-shadow-[0px_5px_5px_rgba(0,0,0,1)] dark:hover:text-shadow-[0px_10px_5px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:transition-all hover:duration-150 hover:text-shadow-lg text-[20px] text-[#594834] text-shadow-md">Qual lugar do mundo?</h1></Link>
                <button onClick={() => setTheme(theme ==='light' ? 'dark' : 'light')} className="md:text-[20px] dark:text-[#BFB2A3] hover:translate-y-[-1px] hover:transition-all hover:duration-150 hover:text-shadow-lg w-max h-max text-[14px] font-light text-[#594834] text-shadow-md cursor-pointer">{theme === 'dark' ? (
                    <div className="flex items-center gap-[10px]">
                    <Image src="/icons/night-mode_bege.png" alt="" width={30} height={20} className="md:w-[30px] md:h-[20] dark:text-shadow-[0px_5px_5px_rgba(0,0,0,1)] dark:hover:text-shadow-[0px_10px_5px_rgba(0,0,0,1)] w-[20px] h-[10]"/>Light Mode
                    </div>
                    ) : (
                    <div className="flex items-center gap-[10px]">
                    <Image src="/icons/light-mode_brown.png" alt="" width={30} height={20} className="md:w-[30px] md:h-[20] hover:text-shadow-lg w-[20px] h-[10] text-shadow-md"/>Dark mode
                    </div>
                    )}</button>
            </div>
        </header>
    )
}