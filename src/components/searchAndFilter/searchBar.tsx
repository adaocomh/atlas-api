'use client'
import data from "../data/data.json"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBar() {
    const [input, setInput] = useState('')
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!data.some((pais) => pais.name.toLowerCase().includes(input.trim().toLowerCase()))){ 
            return alert("Nome de pais inválido, certifique-se de que o nome do pais está correto.")
        }else{
            router.push(`/${input.trim()}`)
        }
    }
    return(
        <form onSubmit={handleSubmit} className="">
            <input className="sm:w-[300px] dark:bg-[var(--cards)] dark:shadow-black hover:translate-y-[-1px] hover:shadow-lg w-[80vw] bg-[#ece6e1] shadow-md border-gray-300 rounded-[5px] p-[10px]" type="text" placeholder="🔎 Search for a contry" name="name" value={input} onChange={(e) => setInput(e.target.value)}/>

        <button type="submit"></button>
        </form>
    )
}