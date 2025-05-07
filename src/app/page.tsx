
import Header from "@/components/header";
import RegiaoFilter from '../components/searchAndFilter/page'
import '../styles/globals.css'
import type { AppProps } from "next/app";
import { ThemeProvider } from "../components/context/temaContexto"

export default async function Home({ Component, pageProps}: AppProps) {
  return (
    <ThemeProvider {...pageProps}>
    <Header/>
    <RegiaoFilter/>
    </ThemeProvider>
  );
}
