/*
Conects to database, waits for it to answer and resolves the task it
was meant to return. In this case we emulate server delay with setTimeout
When needed it has to be called by the container
*/


const loadsDetails = (time,task) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(task)
        }, time)
    })
}

export default loadsDetails;