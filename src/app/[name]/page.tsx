import { use } from 'react'
import PaisCard from "./PaisCardIndv"

interface PageProps {
  params: Promise<{ name: string }>
}

export default function NomeFiltrado({ params }: PageProps){
    const { name } = use(params)
    const decodeName = decodeURIComponent(name)
    return(
        <div>
            <PaisCard name={decodeName}/>
        </div>
    )
}