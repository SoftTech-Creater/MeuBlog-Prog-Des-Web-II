// app/api/recados/route.ts
// Route Handler: cria um endpoint HTTP em /api/recados (sem página, só dados em JSON).
import { NextResponse } from "next/server";
import { criarRecado, listarRecados, recadoValido } from "../../../lib/recados";

// GET /api/recados -> lista todos os recados
export async function GET() {
  const recados = await listarRecados();
  return NextResponse.json(recados);
}

// POST /api/recados  com corpo {"nome": "...", "mensagem": "..."}
export async function POST(request: Request) {
  const corpo = await request.json().catch(() => null);
  const nome = typeof corpo?.nome === "string" ? corpo.nome.trim() : "";
  const mensagem = typeof corpo?.mensagem === "string" ? corpo.mensagem.trim() : "";

  if (!recadoValido(nome, mensagem)) {
    return NextResponse.json(
      { erro: "Informe nome (mínimo 2 letras) e mensagem (mínimo 5 caracteres)." },
      { status: 400 }
    );
  }

  const novo = await criarRecado({ nome, mensagem });
  return NextResponse.json(novo, { status: 201 });
}