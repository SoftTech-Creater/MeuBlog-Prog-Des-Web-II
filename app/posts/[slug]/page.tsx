// app/posts/[slug]/page.tsx
import Link from "next/link";
import LikeButton from "../../components/LikeButton";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostDetalhe({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Post: {slug}</h1>
      <p>Aqui ficaria o conteúdo completo deste post.</p>
      <p>
        <LikeButton />
      </p>
      <p>
        <Link href="/posts">← Voltar para Posts</Link>
      </p>
    </main>
  );
}