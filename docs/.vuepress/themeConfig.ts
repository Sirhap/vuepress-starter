import { hopeTheme } from "vuepress-theme-hope";
import sidebar from "./sidebar.js";
import navbar from "./navbar.js";


export const themeConfig = hopeTheme({
  logo: "/logo.png",
  repo: "https://github.com/Sirhap",
  navbar,
  sidebar,
  hostname: "https://eight-strands.sirhao.top/",
  author: {
    name: "Sirhao",
    url: "https://eight-strands.sirhao.top/",
  },
  docsDir: "docs",
  iconAssets: "//at.alicdn.com/t/c/font_2922463_9aayheyb3v7.css",
  pageInfo: [
    "Author",
    "Category",
    "Tag",
    "Date",
    "Original",
    "Word",
    "ReadingTime",
  ],
  blog: {
    intro: "/about-the-author/",
    sidebarDisplay: "mobile",
    medias: {
      Zhihu: "https://www.zhihu.com/",
      Github: "https://github.com/",
      Gitee: "https://gitee.com/",
    },
  },
  displayFooter: true,
  plugins: {
    blog: true,
    copyright: true,
    mdEnhance: {
      codetabs: true,
      tasklist: true,
    },
    search: {
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    },
    copyCode: true,
  },
});
