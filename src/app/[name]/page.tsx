import PaisCard from "./PaisCardIndv"

interface Props{
    params: {
        name: string
    }
}

export default async function NomeFiltrado({params}: Props) {
    const decodeName = decodeURIComponent(params.name)
    return(
        <div>
            <PaisCard name={decodeName}/>
        </div>
    )
}