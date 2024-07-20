// 存数据
export function saveData(key:string,data:any){
    let value:string;
    try{
        value = JSON.stringify(data); // object -> string
        localStorage.setItem(key,value);
    }catch(e){
        console.error(e); // 转换异常
    }
   
}

// 取数据
export function loadData(key:string){
    let value:string|null;
    value = localStorage.getItem(key);
    if(value){
        return JSON.parse(value); // string -> object
    }else{
        return value; // null
    }
}