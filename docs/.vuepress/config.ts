import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import {clipboardPlugin} from "vuepress-plugin-clipboard";
import { searchPlugin } from '@vuepress/plugin-search'
import { themeConfig } from "./themeConfig";

import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "八股文-面试宝典",
  theme: themeConfig,
  description: "八股文 保你通过面试",
  head: [
    [
      "script",
      {},
      `
            !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JjDPBvNXNcI9wXx4",ck:"JjDPBvNXNcI9wXx4",autoTrack:true,hashMode:true});
        `
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ['link', { rel: 'stylesheet', href: '/config.scss' }],
    [
      "meta",
      {
        name: "keywords",
        content:
            "八股文"
      }
    ],
    [
      "meta",
      {
        name: "description",
        content:
            "八股文"
      }
     ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-1X4BRVH78Z"
      }
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-1X4BRVH78Z');`
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: [
    searchPlugin({
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    clipboardPlugin({
      align: "top",
      staticIcon: true
    }),
    prismjsPlugin({
      // 配置项
    }),
  ]
});
