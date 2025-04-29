import data from '../components/data/data.json'

export default function PaisCard(){
    return(
    <div className='grid grid-cols-4 gap-4 p-[40px]'>
        {data.map((pais: any) =>(
            <div key={pais.name} className='bg-white shadow-md rounded-[5px]'>
                <img src={pais.flags.png} className='rounded-t-[5px] '></img>
                <div>
                    <ul className='p-[20px]'>
                    <li className='p-[3px] font-black'>{pais.name}</li>
                    <li className='p-[3px] font-semibold'>População: <span className='font-thin'>{pais.population}</span></li>
                    <li className='p-[3px] font-semibold'>Região: <span className='font-thin'>{pais.region}</span></li>
                    <li className='p-[3px] font-semibold'>Capital: <span className='font-thin'>{pais.capital}</span></li>
                    </ul>
                </div>
            </div>))}
    </div>
    )
}