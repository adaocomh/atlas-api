
import Image from "next/image";
import Header from "@/components/header";
import SearchAndFilter from "./../components/searchAndFilter/searchFilter"
import PaisCard from "../components/paisCard";

export default function Home() {
  return (
    <>
    <Header/>
    <SearchAndFilter/>
    <PaisCard/>

    </>
  );
}
