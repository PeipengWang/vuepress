var sidebar = [];

const fig = [{
    index: 0,
    title: 'title1',
    name: "basics"
},
    {
        index: 1,
        title: 'title2',
        name: "modeling"
    },
    {
        index: 2,
        title: 'title3',
        name: "web"
    },
]

fig.forEach((a, b) => {
    let name = '../pages/' + a.name; //拼接地址
    let defpath = path.resolve(__dirname, name);

    let data = {
        title: a.title,
        // path: defpath,  // path是个巨坑
        collapsable: true, // 不折叠
        sidebarDepth:1,
        children: []
    };
    const files = fs.readdirSync(defpath);
    if (files == null) {
        return;
    }
    files.forEach((c, d) => {
        let path = name + "/" + c;
        let headline = '';
        fs.readFile("docs/pages/" + a.name + '/' + c, function (err, datas) {
            if (err) {
                console.log(err, "文件不存在");
            } else {
                const html = marked.lexer(datas.toString());
                headline = html[0].text; //获取第一行文字
                //拼接
                data.children.push({
                    title: headline,
                    path: path
                })
                // res.json(str);
            }
        });
        console.log(data.children);
    })
    sidebar.push(data);
})