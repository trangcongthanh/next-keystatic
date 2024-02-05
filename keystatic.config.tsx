import { GitHubConfig, LocalConfig, config } from "@keystatic/core";
import { posts } from "~/keystatic/collections";
import { aboutMe } from "~/keystatic/singletons/about-me";
import { settings } from "~/keystatic/singletons/settings";

export const storage: LocalConfig["storage"] | GitHubConfig["storage"] =
  process.env.NODE_ENV === "development"
    ? { kind: "local" }
    : {
        kind: "github",
        repo: "trangcongthanh/thsblg",
        branchPrefix: "content/",
      };

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts,
  },
  singletons: {
    aboutMe,
    settings,
  },
});
