
//tenemos diferentes tipos de funciones



//La tradiciona
function square (num){
 return num*num
}

// Con flecha 

const square = (num)=>{
    return num * num
}

// con flecha pero mas reducida 

const square = num => num*num
//solo sirve si tienes una linea de codigo

const square1 = num => {
    return num >= 5 
}

console.log(square1(4)); 