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
        <div className="flex justify-between md:p-[15px] dark:bg-[var(--cards)] dark:text-[#BFB2A3] dark:shadow-black hover:shadow-lg hover:translate-y-[-1px] hover:transition-all hover:duration-150 bg-[#ece6e1] w-[250px] p-[13px] shadow-md rounded-[5px]  font-light text-gray-500 " onClick={() => setRegioesLi(!regioesLi)}>
            <p>{regioes ? regioes : "Filtrar Por região"}</p>
            <p>{regioesLi ? '⌃' : '⌄'}</p>
        </div>
        <ul className={`${regioesLi ? "block" : "hidden"} absolute top-[70px] dark:bg-[var(--cards)] dark:text-[#BFB2A3] bg-[#ece6e1] w-[250px] p-[10px] font-light text-gray-500 rounded-[5px] shadow-md/15`}>
        {listaRegioes.map((regiao, index) => (
            <li key={index} className="dark:hover:text-shadow-[0px_10px_5px_rgba(0,0,0,1)] dark:hover:translate-y-[-1px] hover:text-shadow-lg hover:transition-all hover:duration-150 text-shadow-sm p-[8px]" onClick={()=> handleRegiaoClick(regiao)}>{regiao}</li>
        ))}
        </ul>
        </div>
    )
}