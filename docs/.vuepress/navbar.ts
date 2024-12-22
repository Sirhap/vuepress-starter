import { NavbarOptions } from "vuepress-theme-hope";

const navbar: NavbarOptions = [
    {
        text: '首页',
        link: '/'
    },{
        text: '文章',
        link: '/article/'
    },
    {
        text: 'Java',
        children: [
            { text: 'Java简介', link: '/java/Java基础结构/java.html' }
        ]
    },
    {
        text: 'GitHub',
        children: [
            { text: 'GitHub', link: '/GitHub/入门项目/base.md' }
        ]
    },
    {
        text: '其他',
        children: [
            { text: '笑话', link: '/other/笑话/梗.md' },
        ]
    },

]

export default navbar