import { postBySlug, reader } from "~/keystatic/reader";

export default async function Page({ params }: { params: { slug: string } }) {
  // const post = await postBySlug(params.slug);
  const post = await reader.collections.posts.read(params.slug);
  const content = await post?.content();
  return <div>{JSON.stringify({ post, content }, null, 2)}</div>;
}
