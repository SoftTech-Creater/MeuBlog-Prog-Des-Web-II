// app/contato-rapido/page.tsx
"use client";

import { useState, FormEvent } from "react";

export default function ContatoRapido() {
  // cada campo do formulário tem seu próprio estado — por isso o
  // componente PRECISA de "use client": nada disso existe no servidor
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nome || !email || !mensagem) {
      setErro("Preencha nome, email e mensagem antes de enviar.");
      setEnviado(false);
      return;
    }

    // Não existe backend aqui: é só uma simulação de envio, pra mostrar
    // o ciclo completo (validar -> "enviar" -> confirmar -> limpar).
    setErro("");
    setEnviado(true);
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <main>
      <h1>Contato Rápido</h1>
      <p>Aluno: [nome do aluno aqui]</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "24px" }}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="nome" style={{ display: "block", marginBottom: "4px", fontWeight: 600 }}>
            Nome
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ width: "100%", padding: "8px 10px", border: "1px solid #ccc", borderRadius: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "4px", fontWeight: 600 }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px 10px", border: "1px solid #ccc", borderRadius: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="mensagem" style={{ display: "block", marginBottom: "4px", fontWeight: 600 }}>
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows={4}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontFamily: "inherit",
            }}
          />
        </div>

        {erro && <p style={{ color: "#d33", marginBottom: "12px" }}>{erro}</p>}

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            background: "#171717",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Enviar
        </button>

        {enviado && (
          <p style={{ color: "#2a7a2a", marginTop: "12px" }}>
            Mensagem enviada! (simulação — não há servidor de verdade recebendo isso ainda)
          </p>
        )}
      </form>
    </main>
  );
}