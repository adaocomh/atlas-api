'use client'
import React, { useState } from "react"
export default function Filtro(){
    const [regioes, setRegioes] = useState(false)

    return(
        <div className="flex flex-col relative">
        <div className="flex justify-between rounded-[5px] shadow-md/15 p-[15px] w-[250px] text-gray-500 font-light" onClick={() => setRegioes(!regioes)}>
            <p>Filtrar Por região</p>
            <p>{regioes ? '⌃' : '⌄'}</p>
        </div>
        <ul className={`${regioes ? "block" : "hidden"} absolute top-[70px] bg-white p-[10px] rounded-[5px] shadow-md/15 w-[250px] text-gray-500 font-light`}>
            <li className="p-[8px] hover:text-shadow-lg">America</li>
            <li className="p-[8px] hover:text-shadow-lg">Ásia</li>
            <li className="p-[8px] hover:text-shadow-lg">Europa</li>
            <li className="p-[8px] hover:text-shadow-lg">África</li>
            <li className="p-[8px] hover:text-shadow-lg">Oceania</li>
            <li className="p-[8px] hover:text-shadow-lg">Antártida</li>
        </ul>
        </div>
    )
}