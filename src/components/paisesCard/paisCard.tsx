'use client'
import Link from 'next/link'
import data from '../data/data.json'
export default function PaisCard({ region }: { region: string }) {
    const paisFiltrado = data.filter((pais: any) => {
        if(!region || region === "Todas as regiões") return true
        return pais.region.toLowerCase() === region.toLowerCase()
    })
    return(
    <div>
        
        <div className='flex flex-col items-center sm:grid grid-cols-4 gap-4 p-[40px] text-[14px]'>
            {paisFiltrado.map((pais: any) => (
                <Link key={pais.name} href={`/${pais.name}`}>
                <div className='bg-white shadow-md rounded-[5px]'>
                    <img src={pais.flags.png} className='rounded-t-[5px] w-[100%]'/>
                    <div>
                        <ul className='p-[20px]'>
                        <li className='p-[3px] font-black text-[20px] lg:text-[24px]'>{pais.name}</li>
                        <li className='p-[3px] font-semibold'>População: <span className='font-thin'>{pais.population}</span></li>
                        <li className='p-[3px] font-semibold'>Região: <span className='font-thin'>{pais.region}</span></li>
                        <li className='p-[3px] font-semibold'>Capital: <span className='font-thin'>{pais.capital}</span></li>
                        </ul>
                    </div>
                </div>
                 </Link>))}
        </div>
    </div>
    )
}