// lib/recados.ts
// Camada de dados do mural, agora gravando no banco (SQLite) pelo Prisma.
// A página, a Server Action e o Route Handler continuam chamando as mesmas funções.
import { prisma } from "./prisma";

export type Recado = {
  id: number;
  nome: string;
  mensagem: string;
  createdAt: Date;
};

export function recadoValido(nome: string, mensagem: string): boolean {
  return nome.length >= 2 && mensagem.length >= 5;
}

export async function listarRecados(): Promise<Recado[]> {
  // Mais recentes primeiro.
  return prisma.recado.findMany({ orderBy: { id: "desc" } });
}

export async function criarRecado(dados: {
  nome: string;
  mensagem: string;
}): Promise<Recado> {
  return prisma.recado.create({ data: dados });
}