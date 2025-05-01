'use client'

import Search from "./searchBar"
import PaisRegiao from '../paisesCard/paisCard'
import RegiaoFiltrada from './reagiaoFilter'
import { useState } from "react"

export default function SearchFilter(){
    const [regiao, setRegiao] = useState('')
    return(
        <div className="flex flex-col">
            <div className="flex flex-col items-start gap-[40px] sm:flex sm:flex-row sm:justify-between sm:items-center p-[60px]">
                <Search/>
                <RegiaoFiltrada onRegiaoClick={setRegiao}/>
            </div>
                <PaisRegiao region={regiao}/>
            </div>
    )
}