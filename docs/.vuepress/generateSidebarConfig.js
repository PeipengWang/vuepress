const fs = require('fs');
const path = require('path');

function generateSidebarConfig() {
    const rootDir =  window.location.pathname; // GitHub 仓库的根目录

    const topLevelDirectories = fs.readdirSync(rootDir)
        .filter(file => fs.statSync(path.join(rootDir, file)).isDirectory());

    const sidebar = {};

    topLevelDirectories.forEach(dir => {
        const subDirs = fs.readdirSync(path.join(rootDir, dir))
            .filter(file => fs.statSync(path.join(rootDir, dir, file)).isDirectory());

        sidebar[`/${dir}/`] = subDirs.map(subDir => ({
            title: subDir,
            path: `/${dir}/${subDir}/`
        }));
    });

    return sidebar;
}

module.exports = generateSidebarConfig;
