import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { GloalStyle } from "./style/GlobalStyle";
import StyledComponentsRegistry from "./style/registry";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Projeto TCC - Escola da Nuvem",
  description:
    "Trabalho de conclusão do curso Fundamentos da AWS da Escola da Nuvem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <StyledComponentsRegistry>
          <GloalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
