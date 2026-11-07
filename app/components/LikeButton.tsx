// app/components/LikeButton.tsx
"use client";

import { useState } from "react";
import { useReactions } from "../context/ReactionsContext";

const reacoes = [
  { emoji: "👍", nome: "gostei" },
  { emoji: "❤️", nome: "amei" },
  { emoji: "😂", nome: "engraçado" },
  { emoji: "😮", nome: "uau" },
];

export default function LikeButton() {
  // guarda quantas vezes cada reação foi clicada
  const [contagem, setContagem] = useState<Record<string, number>>({});
  // guarda qual reação o usuário selecionou por último
  const [selecionada, setSelecionada] = useState<string | null>(null);
  // total compartilhado com o Navbar através do ReactionsContext
  const { incrementar } = useReactions();

  function reagir(nome: string) {
    setSelecionada(nome);
    setContagem((atual) => ({
      ...atual,
      [nome]: (atual[nome] ?? 0) + 1,
    }));
    incrementar();
  }

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {reacoes.map((r) => {
        const ativa = selecionada === r.nome;
        return (
          <button
            key={r.nome}
            type="button"
            aria-pressed={ativa}
            onClick={() => reagir(r.nome)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "999px",
              border: ativa ? "2px solid #ff6b35" : "1px solid #ccc",
              background: ativa ? "#ff6b35" : "#fff",
              color: ativa ? "#fff" : "#333",
              fontWeight: ativa ? 700 : 400,
              transform: ativa ? "scale(1.08)" : "scale(1)",
              transition: "all 0.15s ease",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "16px" }}>{r.emoji}</span>
            {contagem[r.nome] ? <span>{contagem[r.nome]}</span> : null}
          </button>
        );
      })}
    </div>
  );
}