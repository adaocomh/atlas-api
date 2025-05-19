import PaisCard from "./PaisCardIndv"

interface NomeFiltradoProps{
    params: {
        name: string
    }
}

export default async function NomeFiltrado({params}: NomeFiltradoProps) {
    const decodeName = decodeURIComponent(params.name)
    return(
        <div>
            <PaisCard name={decodeName}/>
        </div>
    )
}