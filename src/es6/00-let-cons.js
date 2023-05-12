var lastName = "Garcia"
lastName = "Oscar"
// Con var podemos re asignar valores
console.log(lastName);
// sin importar el numero de cambios hechos 


//aqui sucede lo mismo que con var
let fruta = "manzana"
fruta = "kiwi"
console.log(fruta);



//en const no es posbile re asignar el valor
const animal = "Perro"
//como su nombre lo dice es una constante 
console.log(animal);


//Ejemplo de let

const ejemploLet = () =>{
    if(true){
        var fruta1 = "platano"
        let fruta2 = "manzana" //como esto es un bloque de codigo
        // la variable let solo existe aqui
        const fruta3 = "uva" //block scope
        //al igual que con const
    }
    console.log(fruta1);
    //aqui ya no existe y por eso no la reconoce
    /* console.log(fruta2); */
    /* console.log(fruta3); */
}

ejemploLet()