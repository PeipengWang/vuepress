// dynamicNavPlugin.js

module.exports = {
    // 插件配置
    extendPageData ($page, $site) {
        // 获取当前页面的路径
        const currentPath = $site.router.history.current.path
        // 判断当前页面是否在 /docs/ 下，如果不是则不生成导航
        if (!currentPath.startsWith('/docs/')) {
            return
        }

        // 获取当前页面的路由信息
        const route = $site.router.options.routes.find(route => route.path === currentPath)

        if (route && route.children) {
            // 如果当前路由有子路由，则使用子路由来生成导航
            const sidebar = route.children.map(child => ({
                text: child.title,
                link: `${currentPath}/${child.path}`
            }))
            // 将生成的左侧导航保存到 $page 中
            $page.sidebar = sidebar
        }
    }
}
