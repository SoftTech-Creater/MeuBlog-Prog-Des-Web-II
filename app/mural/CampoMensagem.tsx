// app/mural/CampoMensagem.tsx
"use client";

import { useState } from "react";

const LIMITE = 200;

// Precisa ser Client Component porque usa useState e reage ao que a
// pessoa digita (onChange) — coisas que só existem no navegador.
export default function CampoMensagem() {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <div style={{ marginBottom: "16px" }}>
      <label htmlFor="mensagem" style={{ display: "block", marginBottom: "4px", fontWeight: 600 }}>
        Mensagem
      </label>
      <textarea
        id="mensagem"
        name="mensagem"
        rows={4}
        required
        minLength={5}
        maxLength={LIMITE}
        onChange={(e) => setQuantidade(e.currentTarget.value.length)}
        style={{
          width: "100%",
          padding: "8px 10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontFamily: "inherit",
        }}
      />
      <small style={{ color: "#666" }}>
        {quantidade}/{LIMITE} caracteres
      </small>
    </div>
  );
}