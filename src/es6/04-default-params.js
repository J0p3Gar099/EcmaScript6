function newUser(name,age,contry){
    var name = name || "Pedro"
    var age = age || 19
    var contry = contry || "MX"
    console.log(name,age,contry);
}

newUser()
newUser("Pedro" , 20)


function newUser1 (name = "pedro", age=19,contry="MX"){
    console.log(name,age,contry);
}
newUser1()