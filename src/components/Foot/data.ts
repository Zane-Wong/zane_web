const BaseURL = import.meta.env.VITE_BASE_URL || import.meta.env.Base_URL;
export const about = [
    {
        title: '©' + 2024 + ' Zane',/*new Date().getFullYear()*/
        data: [
            {label: '备案号', value: '暂未申请', type: 'watermark'},
            {label: 'wangzhuo', value: '所有', type: 'watermark'},
            // {label:'',value:'',type:'watermark'}
        ]
    },
    {
        title: '关于作者',
        data: [
            {label: '邮箱', value: '2018925336@qq.com', type: 'text'},
            {label: 'GitHub', value: 'https://github.com/Zane-Wong', type: 'link'},
            {label: 'Gitee', value: 'https://gitee.com/zane_wong', type: 'link'},
            {label: '个人主页', value: BaseURL, type: 'link'}
        ]
    },
    {
        title:'友链推荐',
        data:[
            {label:'个人主页|Marorx',value:'https://maorx.cn/',type:'link'},
            {label:'SU7|GameMCU',value:'https://gamemcu.com/su7/',type:'link'},
            // {label:'link3',value:'url3',type:'link'}
        ]
    }
]