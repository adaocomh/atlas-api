'use client'

import Search from "./searchBar"
import PaisRegiao from '../paisesCard/paisCard'
import RegiaoFiltrada from './reagiaoFilter'
import { useState } from "react"

export default function SearchFilter(){
    const [regiao, setRegiao] = useState('')
    return(
        <div className="flex flex-col dark:text-[#BFB2A3]">
            <div className="flex flex-col items-start gap-[5vh] sm:flex sm:flex-row sm:justify-between sm:items-center md:p-[5vw] p-[10vw]">
                <Search/>
                <RegiaoFiltrada onRegiaoClick={setRegiao}/>
            </div>
                <PaisRegiao region={regiao}/>
            </div>
    )
}