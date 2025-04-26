import Search from "../searchBar"
import Filter from "../reagiaoFiltro"
export default function SearchFilter(){
    return(
        <div className="flex justify-between items-center p-[60px]">
            <Search/>
            <Filter/>
        </div>
    )
}