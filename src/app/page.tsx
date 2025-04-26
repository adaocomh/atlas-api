import Image from "next/image";
import Header from "@/components/header";
import SearchAndFilter from "./../components/searchAndFilter/searchFilter"

export default function Home() {
  return (
    <>
    <Header/>
    <SearchAndFilter/>
    </>
  );
}
