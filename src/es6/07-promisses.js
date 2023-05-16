const  anotherfunction =() =>{
    return new Promise((resolve,reject)=>{
        if(false){
            resolve("Yes!")
        }else{
            reject("Not!")
        }
    })
}

anotherfunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))