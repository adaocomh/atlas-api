import Header from '../../components/header'
import data from '../../components/data/data.json'
import Link from 'next/link'

export default function PaisCard({name}: { name: string }){
    if(!name){return null}
    const paisFiltrado: any = data.find((pais: any) => {
        return pais.name.toLowerCase().includes(name.toLowerCase())
    })
    return(
    <div className='flex flex-col'>
        <Header/>
        <div className='flex flex-col h-[80vh] gap-[40px] justify-center text-[16px] dark:text-[#BFB2A3] '>
            <Link href={'/'} className='absolute top-[20vh] left-[0vw] dark:text-shadow-[0px_10px_5px_rgba(0,0,0,1)] hover:translate-y-[-1px] transition-all duration-150 mx-[13vw] w-max'>↩︎ Voltar</Link>
            <div className='flex flex-col items-center  justify-center'>
                {paisFiltrado && (
                    <div key={paisFiltrado.name} className='flex flex-col  justify-center md:flex-row  md:items-center gap-[40px] w-[90vw] rounded-[5px]'>
                        <img src={paisFiltrado.flags.png} className='sm:h-[100%] dark:shadow-[0px_10px_10px_rgba(0,0,0,1)] shadow-[0px_10px_10px_rgba(0,0,0,0.2)] rounded-[5px] h-[50%] '/>
                        <div className='flex flex-col'>
                            <h1 className='dark:text-shadow-[0px_10px_5px_rgba(0,0,0,1)] text-shadow-lg/15 px-[10px] font-black text-[24px]'>{paisFiltrado.name}</h1>
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
                                    {paisFiltrado.borders ? paisFiltrado.borders.map((b: string) => {
                                        const paisFrontal = data.find((pais: any) => {
                                            return pais.alpha3Code === b
                                        })
                                        return (
                                            <Link key={paisFrontal?.name} href={`/${paisFrontal?.name}`}>
                                            <li className='flex items-center dark:border-[#BFB2A3] hover:translate-y-[-1px] transition-all duration-150 p-[3px] w-max m-[3px] font-light border-[1px]  border-[#594834] rounded-[5px] text-[12px] px-[10px]'>{paisFrontal?.name}</li></Link>
                                        )
                                    }) : <Link href={`/`}><li className='flex items-center  dark:broder-[#BFB2A3] hover:translate-y-[-1px] transition-all duration-150 w-max p-[3px] px-[10px] m-[3px] text-[12px] font-light border border-[#594834] rounded-[5px]'>Fronteira com nenhum pais.</li></Link>}
                                    </ul>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    </div>
    )
}