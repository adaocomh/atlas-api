import data from '../../components/data/data.json'
import Link from 'next/link'

export default function PaisCard({name}: { name: string }){
    if(!name){return null}
    const paisFiltrado: any = data.find((pais: any) => {
        return pais.name.toLowerCase().includes(name.toLowerCase())
    })
    return(
    <div className='flex flex-col h-[100vh] gap-[40px] justify-center text-[16px]'>
        <Link href={'/'} className='mx-[13vw]'>↩︎ Voltar</Link> 
        <div className='flex flex-col items-center  justify-center'>
            {paisFiltrado && (
                <div key={paisFiltrado.name} className='flex flex-col  md:flex-row justify-center md:items-center gap-[40px] w-[90vw] rounded-[5px]'>
                    <img src={paisFiltrado.flags.png} className='rounded-[5px] h-[50%] sm:h-[100%]'/>
                    <div className='flex flex-col'>
                        <h1 className='px-[10px] font-black text-[24px]'>{paisFiltrado.name}</h1>
                        <div className='flex flex-col sm:flex-row'>
                            <ul className='p-[10px]'>
                            <li className='p-[3px] font-semibold'>Nome nativo: <span className='font-thin'>{paisFiltrado.nativeName}</span></li>
                            <li className='p-[3px] font-semibold'>População: <span className='font-thin'>{paisFiltrado.population}</span></li>
                            <li className='p-[3px] font-semibold'>Região: <span className='font-thin'>{paisFiltrado.region}</span></li>
                            <li className='p-[3px] font-semibold'>Sub Regiao: <span className='font-thin'>{paisFiltrado.subregion}</span></li>
                            <li className='p-[3px] font-semibold'>Capital: <span className='font-thin'>{paisFiltrado.capital}</span></li>
                            </ul>
                            <ul className='p-[10px]'>
                            <li className='p-[3px] font-semibold'>Domínio de nível superior: <span className='font-thin'>{paisFiltrado.topLevelDomain}</span></li>
                            <li className='p-[3px] font-semibold'>Moeda: <span className='font-thin'>{paisFiltrado.currencies[0].code}</span></li>
                            <li className='p-[3px] font-semibold'>Linguagem: <span className='font-thin'>{paisFiltrado.languages[0].nativeName}</span></li>
                            </ul>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <h3 className='p-[10px] font-semibold'>Fronteira com:</h3>
                            <ul className='flex flex-wrap p-[10px]'>
                                {paisFiltrado.borders.map((b: string) => {
                                    const paisFrontal = data.find((pais: any) => {
                                        return pais.alpha3Code === b
                                    })
                                    return (
                                        <li key={paisFrontal?.name} className='flex items-center p-[3px] font-light border border-gray-300 w-max m-[3px] rounded-[5px] text-[12px] px-[10px]'>{paisFrontal?.name}</li>
                                    )
                                })}
                                </ul>
                        </div>
                    </div>
                </div>)}
        </div>
    </div>
    )
}