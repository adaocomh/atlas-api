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
        <div className="flex justify-between rounded-[5px] shadow-md/15 p-[15px] w-[250px] text-gray-500 font-light" onClick={() => setRegioesLi(!regioesLi)}>
            <p>Filtrar Por região</p>
            <p>{regioesLi ? '⌃' : '⌄'}</p>
        </div>
        <ul className={`${regioesLi ? "block" : "hidden"} absolute top-[70px] bg-white p-[10px] rounded-[5px] shadow-md/15 w-[250px] text-gray-500 font-light`}>
        {listaRegioes.map((regiao, index) => (
            <li key={index} className="p-[8px] hover:text-shadow-lg" onClick={()=> handleRegiaoClick(regiao)}>{regiao}</li>
        ))}
        </ul>
        </div>
    )
}