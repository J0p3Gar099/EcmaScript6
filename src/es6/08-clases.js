//delcarando 
class User {
    
}

/* //instancia de una clase 
const newUser = new User()
 */


class User1  {
    //metodos
    saludo (){
        return "Hola"
    }
}
// accdemos el metodo saludar de la clase user1

const usernew  = new User1()
console.log(usernew.saludo()); 


class User2 {
    //constructor
    constructor(){
        console.log("Nuevo usuario");
    }
    saludo (){
        return "Hola"
    }
}

const usernew1 = new User2() 



// this 

class User3 {
    constructor (name){
        this.name = name

    }
    speak () {
        return"hola"
    }
    saludar () {
        return `${this.speak()} ${this.name}`
    }
}

const newUser2 = new User3("Ana")
console.log(newUser2.saludar());

// get and set 

class User4 {
    constructor (name,age) {
        this.name = name
        this.age = age
    }
    // metodos 

    speak () {
        return "Hola"
    }
    saludar () {
        return `${this.speak()} ${this.name}`
    }
    get uAge (){
        return this.age
    }
    set uAge (u ){
        this.age = u
    }
}

const usernew2 = new User4("Pedro",20)
console.log(usernew2.uAge);
console.log(usernew2.uAge = 15);

