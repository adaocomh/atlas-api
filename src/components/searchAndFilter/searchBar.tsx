'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBar() {
    const [input, setInput] = useState('')
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(input.trim()){
            router.push(`/${input.trim()}`)
        }
    }
    return(
        <form onSubmit={handleSubmit} className="">
            <input className="w-[80vw] shadow-md/15 border-gray-300 rounded-[5px] p-[10px] sm:w-[300px]" type="text" placeholder="🔎 Search for a contry" name="name" value={input} onChange={(e) => setInput(e.target.value)}/>

        <button type="submit"></button>
        </form>
    )
}