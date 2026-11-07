// app/mural/page.tsx
// Sem "use client": esta página é um Server Component (o padrão no App Router).
import { listarRecados } from "../../lib/recados";
import { enviarRecado } from "./actions";
import CampoMensagem from "./CampoMensagem";

type Novidade = {
  id: number;
  title: string;
};

async function buscarNovidades(): Promise<Novidade[]> {
  try {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3",
      // Guarda a resposta em cache e só busca de novo depois de 60 segundos.
      { next: { revalidate: 60 } }
    );
    if (!resposta.ok) return [];
    return resposta.json();
  } catch {
    return [];
  }
}

export default async function Mural() {
  const novidades = await buscarNovidades();
  const recados = await listarRecados();

  return(
    <main>
      <h1>Mural</h1>

      <h2>Novidades da comunidade</h2>
      {novidades.length === 0 ? (
        <p>Não foi possível carregar as novidades agora.</p>
      ) : (
        <ul>
          {novidades.map((n) => (
            <li key={n.id}>{n.title}</li>
          ))}
        </ul>
      )}

      <h2>Deixe um recado</h2>
      <form action={enviarRecado} style={{ maxWidth: "420px" }}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="nome" style={{ display: "block", marginBottom: "4px", fontWeight: 600 }}>
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            minLength={2}
            style={{
              width: "100%",
              padding: "8px 10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
        </div>

        {/* A key nova (muda a cada recado) faz o React recriar o campo e zerar o contador. */}
        <CampoMensagem key={recados.length} />

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
          Enviar recado
        </button>
      </form>

      <h2>Recados ({recados.length})</h2>
      {recados.length === 0 ? (
        <p>Ainda não há recados. Seja a primeira pessoa!</p>
      ) : (
        <ul>
          {recados.map((r) => (
            <li key={r.id}>
              <strong>{r.nome}:</strong> {r.mensagem}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}