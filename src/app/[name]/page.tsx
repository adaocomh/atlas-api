import PaisCard from "./PaisCardIndv"

export default function NomeFiltrado({params}: {params: {name: string}}) {
    const decodeName = decodeURIComponent(params.name)
    return(
        <div>
            <PaisCard name={decodeName}/>
        </div>
    )
}