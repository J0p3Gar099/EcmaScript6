//arrays destructuracion 

let frutas = ["manzana","platanos"]
let [a,b]  = frutas

//podemos desacer el array y asignarlo en variables

//obj destructuracion 

let user = {name: "pedro", age: 12}
let {username,age } = user
// asi podemos crear vairables y desacer el objeto en esas variables


// spread operator

let person = {name: "oscar",age:20}
let contry  = "Mx"
let DATA = {id: 1,...person, contry} 
console.log(DATA);


// parametros rest 

function suma (num, ...value){
    console.log(value)
    console.log(num+ value[0]);
    return num + value[1]
}

suma(1,1,2,3,4)
