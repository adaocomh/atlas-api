'use client'
import React, { useState } from "react"


export default function Filtro({ onRegiaoClick } : { onRegiaoClick: (regiao: string) => void }) {
    const [regioesLi, setRegioesLi] = useState(false)
    const [regioes, setRegioes] = useState('')

    const listaRegioes = [
        "Todas as regiões",
        "Americas",
        "Asia",
        "Europe",
        "Africa",
        "Oceania"
    ]
    const handleRegiaoClick = (regiao: string) => {
        setRegioes(regiao)
        onRegiaoClick(regiao)
        setRegioesLi(false)
    }

    return(
        <div className="flex flex-col relative">
        <div className="flex justify-between dark:bg-[var(--cards)] dark:text-[#BFB2A3] dark:shadow-black hover:translate-y-[-1px] bg-[#ece6e1] rounded-[5px] hover:shadow-lg transition-all duration-150 shadow-md p-[15px] w-[250px]  text-gray-500 font-light" onClick={() => setRegioesLi(!regioesLi)}>
            <p>{regioes ? regioes : "Filtrar Por região"}</p>
            <p>{regioesLi ? '⌃' : '⌄'}</p>
        </div>
        <ul className={`${regioesLi ? "block" : "hidden"} absolute top-[70px] dark:bg-[var(--cards)] bg-[#ece6e1] p-[10px] rounded-[5px] shadow-md/15 w-[250px] dark:text-[#BFB2A3] text-gray-500 font-light`}>
        {listaRegioes.map((regiao, index) => (
            <li key={index} className="p-[8px] dark:hover:text-shadow-[0px_10px_5px_rgba(0,0,0,1)] dark:hover:translate-y-[-1px] hover:text-shadow-lg transition-all duration-150 text-shadow-sm" onClick={()=> handleRegiaoClick(regiao)}>{regiao}</li>
        ))}
        </ul>
        </div>
    )
}