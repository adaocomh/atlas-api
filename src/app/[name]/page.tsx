import PaisCard from "./PaisCardIndv"

interface PageProps{
    params: {
        name: string
    }
}

export default function NomeFiltrado({ params }:  PageProps ) {
    const decodeName = decodeURIComponent(params.name)
    return(
        <div>
            <PaisCard name={decodeName}/>
        </div>
    )
}