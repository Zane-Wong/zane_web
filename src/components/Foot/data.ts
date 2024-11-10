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
            {label: '', value: 'mail_zhuo@163.com', type: 'text'},
            {label: 'GitHub', value: 'https://github.com/Zane-Wong', type: 'link'},
            {label: '个人主页', value: BaseURL, type: 'link'}
        ]
    },
    // {
    //     title:'友情链接',
    //     data:[
    //         {label:'link1',value:'url1',type:'link'},
    //         {label:'link2',value:'url2',type:'link'},
    //         {label:'link3',value:'url3',type:'link'}
    //     ]
    // }
]