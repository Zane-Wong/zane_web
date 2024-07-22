export type TimeLineItemType = {
    start_time: string,
    end_time: string,
    title: string,
    description: string,
    imgs: Array<{desc:string,url:string}>
};
// export let histoies = [
//     {
//         start_time: Date.now(), //起始时间
//         end_time: Date.now(), //结束时间
//         name: "事件",
//         detail: "详情",
//         photos: [ //照片集合
//             { desc:"描述1",url:"图片地址" },
//             { desc:"描述2",url:"图片地址" },
//             { desc:"描述3",url:"图片地址" },
//         ]
//     }
// ]
