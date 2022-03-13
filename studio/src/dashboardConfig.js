export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "622d9c78e5d1f018a25aae02",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4x4cq486",
                  apiId: "cdf1eaca-bdc9-4650-ba4e-b33c49671216",
                },
                {
                  buildHookId: "622d9c78befffe1ece0898e9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-82bcd13b",
                  apiId: "f1015774-1dfc-46ec-ba7b-fb712c751a64",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Pablety/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-82bcd13b.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
