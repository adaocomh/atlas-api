import data from '../../components/data/data.json'

export default function PaisCard({name}: { name: string }){
    if(!name){return null}
    const paisFiltrado = data.find((pais: any) => {
        return pais.name.toLowerCase().includes(name.toLowerCase())
    })
    return(
    <div className='grid grid-cols-4 gap-4 p-[40px]'>
        {paisFiltrado && (
            <div key={paisFiltrado.name} className='bg-white shadow-md rounded-[5px]'>
                <img src={paisFiltrado.flags.png} className='rounded-t-[5px] '></img>
                <div>
                    <ul className='p-[20px]'>
                    <li className='p-[3px] font-black'>{paisFiltrado.name}</li>
                    <li className='p-[3px] font-semibold'>População: <span className='font-thin'>{paisFiltrado.population}</span></li>
                    <li className='p-[3px] font-semibold'>Região: <span className='font-thin'>{paisFiltrado.region}</span></li>
                    <li className='p-[3px] font-semibold'>Capital: <span className='font-thin'>{paisFiltrado.capital}</span></li>
                    </ul>
                </div>
            </div>)}
    </div>
    )
}