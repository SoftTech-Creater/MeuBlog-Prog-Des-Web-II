// app/mural/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { criarRecado, recadoValido } from "../../lib/recados";

// Server Action: esta função roda SEMPRE no servidor, mesmo sendo chamada
// por um formulário que está na tela do navegador.
export async function enviarRecado(formData: FormData) {
  const nome = String(formData.get("nome") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  // O navegador já validou (required/minLength), mas o servidor NUNCA
  // deve confiar nisso: quem controla o navegador é o usuário.
  if (!recadoValido(nome, mensagem)) {
    return;
  }

  await criarRecado({ nome, mensagem });

  // Diz ao Next.js: "a página /mural mudou, busque os dados de novo".
  revalidatePath("/mural");
}