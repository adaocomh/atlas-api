import PaisCard from "./PaisCardIndv"

export default function NomeFiltrado({params}: {params: {name: string}}) {
    return(
        <div>
            <PaisCard name={params.name}/>
        </div>
    )
}