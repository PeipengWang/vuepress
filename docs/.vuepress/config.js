const path = require('path')
const rootPath = path.dirname(__dirname)

const { sideBarTool } = require(path.join(__dirname, './utils/index.js'))
// 需要排除的一些目录
let unDirIncludes = ['node_modules', 'assets', 'public']
// 只需要处理后缀的文件类型
let SuffixIncludes = ['md', 'yaml', 'html']
//使用方法生生成侧边栏
// 侧边栏
module.exports = {
    docsDir: 'docs',
    themeConfig: {
        lastUpdate: 'Last Update',
        logo: '/assets/img/hero.png',
        //导航栏
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Java',
                ariaLabel: 'Java',
                items: [
                    {text: 'Java基础', link: '/StudyProcess/Java/Java基础/'},
                    {text: 'JVM', link: '/StudyProcess/Java/JVM/'},
                    {text: 'JUC', link: '/StudyProcess/Java/JUC/'}
                ]
            },
            {text: '后端框架', link: 'https://google.com', target: '_self', rel: ''},
            {text: '中间件', link: '/guide/', target: '_blank'},
            {
                text: '分布式',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'K8s', link: '/language/chinese/'},
                    {text: 'SpringCloud', link: '/language/japanese/'},
                    {text: 'Dubbo', link: '/language/japanese/'}
                ]
            },
            {
                text: '前端',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Vue', link: '/vuepress/'},
                    {text: 'BootStrap', link: '/language/japanese/'},
                    {text: 'HTML+CSS+JS', link: '/language/japanese/'}
                ]
            },

            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            }
        ],
        sidebar: sideBarTool.genSideBarGroup(rootPath, unDirIncludes, SuffixIncludes, {}),
        displayAllHeaders: true,
        sidebarDepth: 3,
        smoothScroll: true
    }
}