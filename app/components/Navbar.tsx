// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useReactions } from "../context/ReactionsContext";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/posts", label: "Posts" },
  { href: "/contato", label: "Contato" },
  { href: "/mural", label: "Mural" }
];

export default function Navbar() {
  const pathname = usePathname();
  const { total } = useReactions();

  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "#f4f4f4" }}>
      {links.map((link) => {
        const ativo = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{ fontWeight: ativo ? 700 : 400, color: ativo ? "#ff6b35" : "#171717" }}
          >
            {link.label}
          </Link>
        );
      })}
      {total > 0 && (
        <span style={{ marginLeft: "auto", fontSize: "13px", color: "#ff6b35" }}>
          ❤ {total} {total === 1 ? "reação" : "reações"}
        </span>
      )}
    </nav>
  );
}