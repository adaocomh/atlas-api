export default function Header(){
    return(
        <header>
            <div className="flex justify-between items-center h-[80px] p-[40px] bg-white text-black border-b-[1px] border-[#D9D9D9] shadow-md">
                <h1 className="text-[22px]">Onde no mundo?</h1>
                <button className="font-light cursor-pointer w-max h-max">☽ Dark mode</button>
            </div>
        </header>
    )
}