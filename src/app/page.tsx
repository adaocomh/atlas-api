'use client'

import Header from "@/components/header";
import RegiaoFilter from '../components/searchAndFilter/page'
import '../styles/globals.css'

export default function Home() {
  return (<>
    <Header/>
    <RegiaoFilter/>
    </>
  );
}
