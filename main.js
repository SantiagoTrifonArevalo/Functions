// Ejercicio 1
// Escribe una función que muestre por consola "Hello World".
function sayHi () {
}
console.log("Hello World");
// Escribe una función que devuelva el cuadrado de un número.
function number(a, a) {
    return a**a;
}
console.log(number(2, 2));
// Ejercicio 3
// Escribe una función que acepte un nombre como parámetro y salude específicamente a esa persona.
// Ejemplo: "Hi, Anna".
function hi(Anna) {
    return ("hi, "+ "Anna")
}
console.log(hi("Anna"));
// Escribe una función que reciba dos parámetros, el nombre y el apellido, y devuelva el nombre completo.
function completName(name, surname) {
    return (name + " " + surname);
}
console.log(completName("Santiago", "Trifon"));
// Ejercicio 5
// Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3.
function area (height=3, width=5) {
return (height * width);
}
console.log(area());

// Ejercicio 6
// Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit.
function convertCelsius (celsius) {
    const fahrenheit =  (celsius * 1.8) + 32;
    return (fahrenheit);
}
console.log(convertCelsius(5));
// Ejercicio 7
// Escribe una función que acepte dos números, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = random(10, 5);
console.log(randomNumber);

// Ejercicio 8
    // Escribe una función que calcule el área de un círculo si se le proporciona el radio.
    function areaCirculo(radio) {
        const area = Math.PI * Math.pow (radio, 2);
        return area;
    }
    console.log(areaCirculo(1));
// Ejercicio 9
// El Índice de Masa Corporal (IMC) se calcula del siguiente modo: peso (en kilogramos) / altura al cuadrado (en metros). Escribe una función que acepte ambos datos y calcule el IMC. A countinuación, deberá devolver un log con lo recibido.
function IMC(peso, altura) {
    const indice = (peso / altura);
    return indice;
}
console.log(IMC(100,1.80));

// Ejercicio 10
// Escribe una función que acepte un dato y compruebe qué tipo de dato es. Tienes que usar un prompt para pedir dicho dato.
// function checkDataType(data) {
//     const dataType = typeof data;
//     alert(`Es un ${dataType}`);
// }

// const input = prompt('Introduce un dato:');
// checkDataType(input);

// Ejercicio 11
// Escribe una función que te adivine el futuro. Recibirá como parámetros:

// Número de hijos.
// Nombre de la pareja.
// Nombre de una ciudad.
// Un trabajo. La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>, y tendrás <<número de hijos>> hijos con <<pareja>>.". Deberás usar template literals para ello

// function future(numberOfSongs, nameWife, nameCity, work) {
//     const futurePrediction = `Trabajarás en ${nameCity}, trabajando como ${work}, y tendrás ${numberOfSongs} hijos con ${nameWife}.`;
//     return futurePrediction;
// }

// const numberOfSongs = 1;
// const nameWife = "Johanna";
// const nameCity = "Madrid";
// const work = "desarrollador";

// const myFuture = future(numberOfSongs, nameWife, nameCity, work);
// console.log(myFuture);

