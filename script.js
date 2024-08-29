
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


// REFERENCIAS
// un valor id que se asigna a cada objeto o array o funcion creado en JS.

let age1 = 30;
let age2 = 30;

console.log(age1 === age2)

let agesArr1 = [20, 42, 53, 80] // ref. 1234
let agesArr2 = [20, 42, 53, 80] // ref. 5678

console.log(agesArr1 === agesArr2) // ref 1234 === ref 5678 => false
// cuando comparamos tipos de data objetos, js los compara por su referencia

console.log(agesArr1)

console.log( agesArr1[0] === agesArr2[0] )

let agesArr3 = agesArr1 // asignando la misma referencia a la nueva variable ref 1234
console.log(agesArr1 === agesArr3) // true. ref 1234 === ref 1234

// una forma de como clonar arrays
// let agesArr3 = agesArr1.slice(0)

// otras formas de clonar:
// .map()
// .filter()
// JSON.parse y JSON.stringify
// operador spread

agesArr3.pop()
agesArr3.pop()

console.log("clone",agesArr3)
console.log("orginal", agesArr1)

// Actividad que uno todos los conceptos

//* crear una funcion allNamesStartWith que reciba un array de nombres, tambien reciba una letra y nos vuelva la cantidad de nombres que empiezan por esa letra

// example: ["ana", "juan", "david", "diego", "albert"], "d" => 2
// example: ["ana", "juan", "david", "diego", "albert"], "j" => 1
// example: ["ana", "juan", "david", "diego", "albert"], "x" => 0

function allNamesStartWith( arrayDeNombres, letraInicial ) {
  
  if (arrayDeNombres === undefined || arrayDeNombres === null) {
    return "ERRROR debes pasar los argumentos con sus valores"
  }

  if (arrayDeNombres.length === 0) {
    return "ERRROR el array está vacio"
  }

  if (letraInicial.length > 1) {
    return "ERRROR la letra a verificar debe tener solo un caracter"
  }

  // SIEMPRE TRABAJAR CON PARAMETROS
  // console.log(arrayDeNombres)
  // console.log(letraInicial)

  let cantidad = 0;

  for (let i = 0; i < arrayDeNombres.length; i++) {
    let cadaNombre = arrayDeNombres[i]
    if (cadaNombre[0] === letraInicial) {
      // console.log(`${cadaNombre} empieza por la letra ${letraInicial}`)
      cantidad++
    }
  }

  // console.log(cantidad)
  return cantidad
}

let names = ["ana", "juan", "david", "diego", "albert"]
console.log( allNamesStartWith(names, "d") ) // 2
console.log( allNamesStartWith(names, "j") ) // 1
console.log( allNamesStartWith(names, "x") ) // 0
console.log( allNamesStartWith(["núria", "loreta"], "l") ) // 1
console.log( allNamesStartWith(undefined, "l") ) // "debes pasar los argumentos con sus valores"
console.log( allNamesStartWith([], "l") ) // "el array está vacio"
console.log( allNamesStartWith(["núria"], "la") ) // "el array está vacio"