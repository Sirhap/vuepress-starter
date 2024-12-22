import { themeConfig } from "./themeConfig.js";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  bundler: viteBundler(),
  title: "",
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
  }
});
