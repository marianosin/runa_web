let isOk = true;

const isLoaded = (time,task) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isOk){
                resolve(task);
            } else {
                reject("Error")
            }
        }, time)
    })
}

export default isLoaded;