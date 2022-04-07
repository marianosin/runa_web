let isOk = true;

const proms = (time,task) =>{
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

export default proms;