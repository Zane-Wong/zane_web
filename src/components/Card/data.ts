export const projects: any[] = [
    { 
        title: '个人网站', 
        coverImg:'https://pic32.photophoto.cn/20140702/0020033066004538_b.jpg',
        url: import.meta.env.VITE_BASE_URL || import.meta.env.BASE_URL,
        subTitle: '基于Vue+Vite的个人网站', 
        description: '主打实用工具、个人项目、兴趣爱好等等内容的分享', 
        tags:["Vue","Vite","TS"], 
        platform:'Web'
    },
    { 
        title: 'QtIM',
        coverImg:'https://tse1-mm.cn.bing.net/th/id/OIP-C.g--KOfpgbwrd9g9t3ruYHAHaFC?rs=1&pid=ImgDetMain',
        url:' ',
        subTitle: '基于C++、Qt、MySQL的即时通讯桌面应用',
        description: '本科毕业设计，基于Qt5框架，使用C++、MySQL8数据库搭建的即时通讯桌面应用',
        tags:["C++","Qt","MySQL","IM"],
        platform:'Windows'
    },
    { 
        title: 'Flappy Bird', 
        coverImg:'https://playfreeonline32.com/wp-content/uploads/Flappy-Bird-Online-%E2%80%A2-Play-Flappy-Bird-Games-for-Free-Today.jpeg', 
        url:'/FlappyBird/FlappyBird.html',
        subTitle: 'H5游戏', 
        description: '用H5和JavaScript实现的FlappyBird小游戏', 
        tags:['HTML','JS','CSS','游戏'], 
        platform:'H5'
    },
    { 
        title: '贪食蛇',
        coverImg:'https://img.zcool.cn/community/01dcf1554be63a000001bf7268fd65.jpg?imageMogr2/auto-orient/thumbnail/1280x%3e/sharpen/0.5/quality/100/format/webp',
        url:'/Snake/snake.html',
        subTitle: 'H5游戏', 
        description: '用H5和JavaScript实现的贪食蛇小游戏', 
        tags:['HTML','JS','CSS','游戏'], 
        platform:'H5'
    },
    { 
        title: '校园社区',
        coverImg:'https://ts1.cn.mm.bing.net/th/id/R-C.1d03a6ccc35b730049fed88775c560f8?rik=jcv81cBAlbqxqQ&riu=http%3a%2f%2fimages.shejidaren.com%2fwp-content%2fuploads%2f2013%2f08%2f031651Tg0.jpg&ehk=NiUZAHHQrNiY98ChYMHANuPymzhXmVpJ0aJUSAWj6q4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        url:'comming soon',
        subTitle: '子标题', 
        description: '开发中，敬请期待',
        tags:['uni-app','H5','小程序'],
        platform:'uni-app'
    },
    // {
    //     title: '标题',
    //     coverImg:'https://feegblog.com/wp-content/uploads/2019/10/logo_vue.png',
    //     url:'to project',
    //     subTitle: '子标题',
    //     description: '正在开发',
    //     tags:[1,2,3],
    //     platform:'平台'
    // },
    // {
    //     title: '标题',
    //     url:'',
    //     coverImg:'正在开发',
    //     subTitle: '子标题',
    //     description: '描述',
    //     tags:[2,3,4],
    //     platform:'平台'
    // }
];