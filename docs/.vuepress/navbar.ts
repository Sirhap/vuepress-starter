import { NavbarConfig } from '@vuepress/theme-default'

const navbar: NavbarConfig = [
    {
        text: '首页',
        link: '/'
    },
    {
        text: 'Java',
        children: [
            { text: 'Java简介', link: '/java/Java基础结构/java.html' }
        ]
    },
    {
        text: 'GitHup',
        children: [
            { text: 'GitHup', link: '/GitHup/入门项目/base.md' }
        ]
    },
    {
        text: '其他',
        children: [
            { text: '其他网址', link: '/other/其他网址/其他网址.md' },
            { text: '笑话', link: '/other/笑话/梗.md' },
        ]
    },

]

export default navbar