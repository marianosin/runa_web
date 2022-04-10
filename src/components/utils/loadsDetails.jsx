let isOk = true

const loadsDetails = (time,task) =>{
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

export default loadsDetails;