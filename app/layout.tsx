// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { ReactionsProvider } from "./context/ReactionsContext";
import "./globals.css";
export const metadata: Metadata = {
  title: "Meu Blog",
  description: "Blog feito com Next.js e TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ReactionsProvider>
          <Navbar />
          {children}
          <footer
            style={{
              padding: "16px",
              textAlign: "center",
              color: "#666",
              fontSize: "13px",
              background: "#f4f4f4",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            Turma de Programação e Design para Web II — FAETERJ Barra Mansa
          </footer>
        </ReactionsProvider>
      </body>
    </html>
  );
}