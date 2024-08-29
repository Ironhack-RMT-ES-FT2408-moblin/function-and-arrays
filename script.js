
// SOLUCION de algunas actividades de lab
console.log("probando")

let hacker1 = "angel"
let hacker2 = "Anna"

if (hacker1[0] < hacker2[0]) {
  console.log("el hacker1 va primero!")
} else if (hacker1[0] > hacker2[0]){
  console.log("el hacker2 va primero!")
}


if (hacker1 < hacker2) {
  console.log("el hacker1 va primero!")
} else {
  console.log("el hacker2 va primero!")
}


console.log(hacker1.localeCompare(hacker2))

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("el hacker1 va primero!")
} else {
  console.log("el hacker2 va primero!")
}



let stringFeo = "ba%n an,a";

let stringLimpio = "";

for (let i = 0; i < stringFeo.length; i++) {

  let char = stringFeo[i]
  // if (char >= "a" && char <= "z") {
  //   console.log(char)
  //   stringLimpio += char
  // }

  if (stringFeo.charCodeAt(i) >= 97 && stringFeo.charCodeAt(i) <= 122) {
    console.log(char)
    stringLimpio += char
  }
}

console.log(stringLimpio)

let name = "jesús"
console.log(name.charCodeAt(3))


let phrase = "banana tomate espinaca"

console.log(phrase.split("").reverse().join(""))


// FUNCIONES


/* 

DECLARAR/CREAR LA FUNCION
function miFuncion ( opcionalmente habran parametros ) {

  código que ejecutará la funcion. Cualquier cantidad de código

  opcionalmente la funcion retornará un valor

}

LLAMAR/INVOCAR A LA FUNCION
miFuncion( opcionalmente habran argumentos )

*/

function imprimeNombre( nombre ) {
  // let nombre
  // console.log(nombre)

  console.log(`Hola ${nombre}`)

}

//* forma avanzada y simplificada de crear funciones
// const imprimeNombre = nombre => console.log(`Hola ${nombre}`)

imprimeNombre( "diego" )
imprimeNombre( "sofia" )
imprimeNombre( "emma" )
imprimeNombre( "juan" )
imprimeNombre( "miguel" )


// palabra return

function sumarDosNumeros( num1, num2 ) {

  let suma = num1 + num2
  console.log(suma)

  if (suma > 20) {
    return suma // Esto no significa que la variable sale de la funcion
  } else {
    return "no llegaste a 20"
    return "patata" // nunca ocurre
  }

  // una funcion SOLO puede retornar una cosa
  console.log("despues del return") // nunca se ejecuta código despues de un return

}

let sumaTotal = sumarDosNumeros( 4, 12 )

// yo necesito el valor final acá
console.log(sumaTotal)


let string = "patata"

let corteDeString = string.slice(2, 4)
console.log(corteDeString)


let staff1 = "jesús"
let staff2 = "juliette"


function capitalize( username ) {
  return username[0].toUpperCase() + username.slice(1)
}

// let nombreCapitalizado1 = capitalize(staff1)
// let nombreCapitalizado2 = capitalize(staff2)

console.log(`nuestro maravilloso staff consta de ${capitalize(staff1)} y ${capitalize(staff2)}`)


// diferentes formas de crear funciones

function funcion1() {
  return "soy una funcion de declaración"
}

const function2 = function() {
  return "soy una funcion de expresión" 
}

const function3 = () => {
  return "soy una funcion de flecha" 
}

// si la funcion solo tiene una linea de código. Se puede colocar en la misma linea y se remueven las {}
// si la linea que queda es algo que se retorna, el return está implicito
// si la funcion tiene un solo parametro. Los parentesis del parametro son opcionales
const function4 = () => "soy una funcion de flecha"


funcion1()
function2()
function3()
function4()


// ARRAY


const myArr = [ "patata", 46, true, undefined, null, NaN, ["adios"], {name: "bob"}, function(){/* ... */} ]

console.log(myArr)


const cities = ["Zaragoza", "Madrid", "Alicante", "Barcelona", "Cáceres", "Bilbao"]
console.log(cities)

console.log(cities.length)

console.log(cities[0])

// la primera letra de la primera ciudad?
console.log(cities[0][0])

// la primera letra de la ultima ciudad
console.log(cities[cities.length - 1][0])

// la ultima letra de la ultima ciudad
console.log(cities[cities.length - 1][cities[cities.length - 1].length -1])

let ultimaCiudad = cities[cities.length - 1]
let ultimoCaracter = ultimaCiudad[ultimaCiudad.length - 1] // o ultimaCiudad.slice(-1)
console.log(ultimoCaracter)

const unicoString = cities.join()
console.log(unicoString)
console.log(unicoString[unicoString.length -1])

// metodos de arrays

let middleCities = cities.slice(2, 4)
console.log(middleCities)


// un array donde solo esten las ciudades primera y la ultima

// let primUlt = [ cities.slice(0,1).toString(), cities.slice(-1).toString() ]

let primUlt = [ cities[0], cities[cities.length - 1] ]
console.log(primUlt)


// MUTABILIDAD

let someString = "hola"

console.log(someString[0])

someString[0] = "H" // JS ignora

console.log(someString)

// los strings, numeros, boleanos (todo tipo de data primitivo) es INMUTABLE.

const friends = [ "Ross", "Monica", "Chandler", "Phoeby", "Joey", "Rachel" ]

console.log(friends[0])

friends[0] = "Mike"

console.log(friends)

// los objetos (y array) son MUTABLES
// PERO no todos los metodos de arrays mutan el array origin

friends.slice(1, 3) // copiar una sección del array
console.log(friends)

// metodos que si mutan el array original

// remover elementos

const removedElement = friends.pop() // remover el ultimo elemento del array
console.log(removedElement)
console.log(friends)

friends.shift() // remover el primero
console.log(friends)


friends.push("Janice") // añadir al final
console.log(friends)

friends.unshift("Gunther") // añadir al inicio
console.log(friends)

// .splice()

// 1. posición a iniciar el cambio
// 2. cantidad de elemento a remover
// 3 o más. Los elementos a añadir en esa posición
friends.splice(3, 2, "Robert", "Emily", "Marcel", "Ben")
console.log(friends)

friends.splice(2)
console.log(friends)

