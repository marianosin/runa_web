let isOk = true;
/*
This is a Promise. When the server sends info (in tjis case represented by isOk)
this is executed. In the case that something goes wrong, else is executed and sends a
message to the console.
Inside the Promise we han say what jas to be done or what conditions we want.
In this case we tell the app to wait for a specified time.Añado explicación de Promise

*/
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