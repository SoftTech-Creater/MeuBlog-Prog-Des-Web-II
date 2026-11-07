// app/posts/page.tsx
import Link from "next/link";
export default function Posts() {
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link href="/posts/aprendendo-nodejs">Post 1 — Aprendendo Node.js</Link>
        </li>
        <li>
          <Link href="/posts/meu-primeiro-componente-react">Post 2 — Meu primeiro componente React</Link>
        </li>
        <li>
          <Link href="/posts/migrando-para-o-nextjs">Post 3 — Migrando para o Next.js</Link>
        </li>
      </ul>
    </main>
  );
}