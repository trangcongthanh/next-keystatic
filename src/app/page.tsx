import Image from "next/image";
import Link from "next/link";
import { listPosts } from "~/keystatic/reader";

export default async function Home() {
  const posts = await listPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.slug}>
          {post.entry.title}
        </Link>
      ))}
    </main>
  );
}
