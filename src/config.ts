export const SITE = {
  website: "https://abloom25.github.io/", // replace this with your deployed domain
  base:"/blog",
  author: "ABloom",
  profile: "https://github.com/abloom25",
  desc: "The Flowers There... Are Always in Full Bloom.",
  title: "唤青映记",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "编辑此文章",
    url: "https://github.com/abloom25/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
