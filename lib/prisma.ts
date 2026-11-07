// lib/prisma.ts
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

// Um único client, mesmo com o recarregamento automático do `npm run dev`.
const globalParaPrisma = globalThis as unknown as { prisma?: PrismaClient };

function criarClient() {
  const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL ?? "file:./dev.db",
  });
  return new PrismaClient({ adapter });
}

export const prisma = (globalParaPrisma.prisma ??= criarClient());