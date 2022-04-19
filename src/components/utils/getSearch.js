let isOk = true;
const getSearch = (time,task) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isOk){
                resolve(task);
            } else {
                reject(task)
            }
        }, time)
    })
}

export default getSearch;