
import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Atlas API",
  description: "Aplicação web que consome a REST Countries API para exibir informações sobre países do mundo, com funcionalidades de busca, filtro por região, visualização de detalhes e alternância entre temas claro e escuro. O projeto foi desenvolvido com foco em responsividade, usabilidade e boas práticas de desenvolvimento front-end moderno, simulando um cenário real de integração com API pública e interface dinâmica.",
  icons:{
    icon: '/icons/language.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body cz-shortcut-listen="true">
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
