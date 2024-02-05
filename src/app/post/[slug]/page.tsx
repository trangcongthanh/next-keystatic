import { postBySlug } from "~/keystatic/reader";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await postBySlug(params.slug);
  return <div>{JSON.stringify(post, null, 2)}</div>;
}
