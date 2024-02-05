import {
  GitHubConfig,
  LocalConfig,
  collection,
  component,
  config,
  fields,
} from "@keystatic/core";
import { aboutMe } from "./singletons/about-me";
import { settings } from "./singletons/settings";

const storage: LocalConfig["storage"] | GitHubConfig["storage"] =
  process.env.NODE_ENV === "development"
    ? { kind: "local" }
    : {
        kind: "github",
        repo: "trangcongthanh/next-keystatic",
        branchPrefix: "content/",
      };

export default config({
  storage: {
    kind: "github",
    repo: "trangcongthanh/next-keystatic",
    branchPrefix: "content/",
  },
  ui: {
    brand: {
      name: "Th's Bl.g",
      mark() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            style={{ width: 24, height: 24 }}
          >
            <path
              fill="currentColor"
              d="m5.667 4.876-1.716.06-.468 2.616H2.475l.204-3.468h7.74l.144 3.468h-.948l-.468-2.616-1.692-.06v7.284l1.68.12V13H4.131v-.72l1.536-.12V4.876Zm6.263-.648-.912-.156v-.648l2.232-.264h.036l.312.228.012 2.676-.084 1.044c.248-.224.584-.432 1.008-.624a3.303 3.303 0 0 1 1.356-.288c.504 0 .896.096 1.176.288.28.184.476.468.588.852.112.384.168.896.168 1.536v3.3l.768.108V13h-3.156v-.72l.696-.108v-3.3c0-.416-.028-.74-.084-.972-.056-.232-.16-.404-.312-.516-.144-.112-.36-.168-.648-.168-.248 0-.504.06-.768.18a3.036 3.036 0 0 0-.684.408v4.368l.732.108V13h-3.108v-.72l.672-.096V4.228Zm8.183 3.588v-.168c.096-.088.208-.264.336-.528.136-.272.252-.588.348-.948.096-.368.144-.728.144-1.08a.47.47 0 0 0-.084-.276c-.056-.08-.14-.18-.252-.3a2.688 2.688 0 0 1-.336-.396.9.9 0 0 1-.108-.468c0-.24.076-.436.228-.588a.837.837 0 0 1 .6-.228c.24 0 .46.084.66.252.2.168.356.396.468.684.12.28.18.588.18.924a4.22 4.22 0 0 1-.288 1.536 4.632 4.632 0 0 1-.696 1.26c-.272.344-.528.58-.768.708l-.432-.384Zm5.253 4.2c.064.096.208.188.432.276.232.08.464.12.696.12.376 0 .656-.076.84-.228a.774.774 0 0 0 .288-.624c0-.264-.116-.476-.348-.636-.232-.168-.624-.372-1.176-.612l-.336-.144c-.552-.232-.964-.512-1.236-.84-.272-.328-.408-.752-.408-1.272 0-.36.108-.68.324-.96.216-.288.52-.512.912-.672.392-.16.844-.24 1.356-.24.376 0 .696.024.96.072a9.8 9.8 0 0 1 .852.192c.16.056.28.088.36.096v1.572h-.948l-.276-.912c-.048-.08-.156-.152-.324-.216a1.61 1.61 0 0 0-.576-.096c-.328 0-.592.072-.792.216a.665.665 0 0 0-.288.576c0 .224.068.412.204.564.136.144.284.256.444.336.16.08.456.212.888.396.432.184.788.36 1.068.528.288.168.524.388.708.66.192.264.288.588.288.972 0 .592-.232 1.072-.696 1.44-.464.368-1.132.552-2.004.552-.408 0-.776-.036-1.104-.108-.32-.072-.692-.168-1.116-.288l-.264-.084v-1.584h.996l.276.948Zm-19.71 7.968-.936-.156v-.744h1.788c.272 0 .624-.016 1.056-.048.104-.008.228-.016.372-.024S8.248 19 8.44 19c1.208 0 2.052.172 2.532.516.488.336.732.84.732 1.512 0 .592-.18 1.088-.54 1.488-.352.392-.816.632-1.392.72.792-.008 1.412.172 1.86.54.456.368.684.88.684 1.536 0 .832-.292 1.5-.876 2.004-.584.504-1.56.756-2.928.756-.36 0-.692-.012-.996-.036-.08 0-.216-.008-.408-.024A14.127 14.127 0 0 0 6.52 28H4.708v-.72l.948-.12v-7.176Zm1.74 2.988c.088.008.268.012.54.012H8.5c.488 0 .852-.152 1.092-.456.24-.304.36-.732.36-1.284 0-.528-.124-.912-.372-1.152-.248-.24-.66-.36-1.236-.36-.152 0-.468.016-.948.048v3.192Zm0 4.236c.184.072.536.108 1.056.108.68 0 1.172-.16 1.476-.48.304-.32.456-.784.456-1.392 0-.584-.14-1-.42-1.248-.272-.256-.708-.384-1.308-.384-.672 0-1.092.008-1.26.024v3.372Zm6.541-7.98-.888-.156v-.648l2.22-.264h.024l.324.228v8.796l.876.096V28h-3.396v-.72l.84-.108v-7.944Zm4.51 8.88a.93.93 0 0 1-.648-.252.876.876 0 0 1-.276-.66c0-.296.104-.536.312-.72.216-.192.476-.288.78-.288.288 0 .516.092.684.276a.888.888 0 0 1 .252.636c0 .312-.104.56-.312.744-.2.176-.464.264-.792.264Zm5.292 3.132c-1.072 0-1.848-.168-2.328-.504-.48-.336-.72-.792-.72-1.368 0-.328.108-.64.324-.936.224-.288.492-.504.804-.648-.368-.216-.552-.56-.552-1.032 0-.272.088-.528.264-.768.176-.248.404-.44.684-.576-.44-.168-.768-.424-.984-.768-.216-.344-.324-.752-.324-1.224 0-.456.132-.852.396-1.188a2.607 2.607 0 0 1 1.08-.792 3.907 3.907 0 0 1 1.476-.276c.936 0 1.632.18 2.088.54.104-.136.28-.264.528-.384s.504-.18.768-.18h.42v1.308h-1.236c.12.256.18.528.18.816.008.728-.248 1.312-.768 1.752-.52.432-1.232.648-2.136.648-.376 0-.692-.028-.948-.084-.08.104-.144.216-.192.336a.905.905 0 0 0-.06.3c0 .264.092.444.276.54.192.096.532.144 1.02.144h1.284c1.632 0 2.448.592 2.448 1.776 0 .496-.176.94-.528 1.332-.352.392-.82.696-1.404.912a5.319 5.319 0 0 1-1.86.324Zm.084-6.324c.744 0 1.116-.508 1.116-1.524 0-.52-.096-.9-.288-1.14-.184-.248-.468-.372-.852-.372-.376 0-.668.124-.876.372-.2.24-.3.604-.3 1.092 0 1.048.4 1.572 1.2 1.572Zm.096 5.496c.504 0 .94-.124 1.308-.372.368-.24.552-.576.552-1.008 0-.344-.092-.592-.276-.744-.176-.152-.496-.228-.96-.228h-1.308c-.2 0-.384-.012-.552-.036a1.671 1.671 0 0 0-.324 1.032c0 .44.12.776.36 1.008.24.232.64.348 1.2.348Z"
            />
          </svg>
        );
      },
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*/",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        thumbnail: fields.object({
          url: fields.image({
            label: "Thumbnail",
            directory: "public/images/posts",
            publicPath: "/images/posts",
            validation: {
              isRequired: true,
            },
          }),
          caption: fields.text({ label: "Caption", multiline: true }),
        }),
        summary: fields.text({ label: "Summary", multiline: true }),
        isDraft: fields.checkbox({ label: "Is Draft", defaultValue: true }),
        publishedAt: fields.date({
          label: "Published At",
        }),
        updatedAt: fields.date({
          label: "Updated At",
        }),
        tags: fields.array(fields.text({ label: "Tags" }), {
          label: "Tags",
          itemLabel(p) {
            return (p.value && `#${p.value}`) || "Unnamed tag";
          },
        }),
        previous: fields.relationship({
          label: "Previous",
          collection: "posts",
        }),
        next: fields.relationship({
          label: "Next",
          collection: "posts",
        }),
        seo: fields.conditional(
          fields.checkbox({ label: "SEO", defaultValue: false }),
          {
            true: fields.object({
              title: fields.text({ label: "Title" }),
              image: fields.image({ label: "Image" }),
            }),
            false: fields.empty(),
          },
        ),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/images/posts",
            publicPath: "/images/posts",
            schema: {
              alt: fields.text({ label: "Alt" }),
              title: fields.text({ label: "Caption" }),
            },
          },
          componentBlocks: {
            youtube: component({
              label: "Youtube",
              preview({ fields }) {
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    alt="Youtube Player"
                    style={{ pointerEvents: "none" }}
                    src={`https://i3.ytimg.com/vi/${fields.id.value}/maxresdefault.jpg`}
                  />
                );
              },
              schema: {
                id: fields.text({ label: "Video Id" }),
                children: fields.text({ label: "Caption" }),
              },
            }),
          },
          layouts: [
            [1, 1],
            [1, 1, 1],
            [2, 1],
            [1, 2],
            [1, 2, 1],
          ],
        }),
      },
    }),
  },
  singletons: {
    aboutMe,
    settings,
  },
});
