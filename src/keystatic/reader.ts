import { createReader } from "@keystatic/core/reader";
import configs from "./configs";

export const reader = createReader(process.cwd(), configs);

export async function listPosts() {
  const list = await reader.collections.posts.all({ resolveLinkedFiles: true });
  return list.reverse();
}

export type Posts = Awaited<ReturnType<typeof listPosts>>;
export type Post = Posts[number];

export function postBySlug(slug: string) {
  return reader.collections.posts.read(slug, { resolveLinkedFiles: true });
}

export function getSettings() {
  return reader.singletons.settings.read({ resolveLinkedFiles: true });
}

export function getAboutMe() {
  return reader.singletons.aboutMe.read({ resolveLinkedFiles: true });
}
