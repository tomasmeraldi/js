/* Ejercicio de memoria, estas son las maneras de ESCRIBIR VARIABLES:

var variableVar

Pero se utilizan mas...

let variableLet
const variableConst = VARIABLE CONSTANTE

LAS VARIABLES TIENEN NOMBRES UNICOS

-- ! PRACTICA ! --

let nombreTomas

nombreTomas = 'Tomas Meraldi'

console.log(nombreTomas)



 DATOS BOOLEANOS 

let valorVerdadero = true
let valorNegativo = false

if (true) {
    console.log('Log desde el IF')
}

--- "PRUEBA" 1ER PRE-ENTREGA ---



let nombreUsuario = prompt('🇦🇷 BIENVENIDO A STORE GAMING #1 en ARG, tu usuario por defecto es: ADMIN o USER, ¡no te preocupes por las mayusculas y minusculas!.')

if (nombreUsuario.toUpperCase == 'user'.toLowerCase) {
    alert('Hola ' + nombreUsuario)  
} else if (nombreUsuario.toUpperCase == 'admin'.toLowerCase) {
    alert('Hola ' + nombreUsuario)  
} else {
    alert('Nombre de usuario incorrecto')
}

let compraUsuario = prompt ('Nuestra tienda es para PC gamers armadas y funcionales al 100%, por lo tanto recomendamos estrictamente un presupuesto de $50000 o mas para garantizar calidad. Vamos a pedirte que nos digas con que presupuesto contas para saber como ayudarte.')

if (compraUsuario >= 50000) {
    alert('Vemos que contas con mas de 50000, prosigamos con las mejores opciones del mercado!')
} else {
    alert('No hay problema si estas debajo de los 50000, contamos con opciones competitivas!')
}

let marcaProcesador = prompt('¿Preferis INTEL o AMD?')

if (marcaProcesador.toUpperCase == 'intel'.toLowerCase) {
    alert('Muy buena eleccion de tu parte los ' + marcaProcesador)  
} else if (marcaProcesador.toUpperCase == 'amd'.toLowerCase) {
    alert('Muy buena eleccion de tu parte los ' + marcaProcesador)  
} else {
    alert('Error de tipeo!, intentar nuevamente')
}

*/

/*

--- "PRUEBA" 1ER PRE-ENTREGA ---


// ESTRUCTURA FOR

//for (desde; hasta; actualizacion) {
//    Codigo a ejecutar en cada vuelta
//}



//  FOR UTILIZADO EN TABLA MATEMATICA

let numeroIngresado = Number(prompt('Ingrese cantidad del 1 al 5')) 

for (let i = 1; i <= 5; i++) {
    let resultado = numeroIngresado * i ;
    alert(numeroIngresado +" X "+ i +"="+ resultado);
}

*/

// INTENTO DE PRIMER PRE-ENTREGA CON USUARIO, deje los console logs en conjunto con las alertas por "gusto".//

let nombreUsuario = prompt ('🇦🇷 BIENVENIDO A STORE GAMING #1 en ARGENTINA, tu usuario por defecto es: user')

while (nombreUsuario != 'user') {
    alert('Nombre de usuario incorrecto')
    nombreUsuario = prompt('Reintente por favor')
}

alert('Bienvenido, ' + nombreUsuario)

let seleccionInicial = prompt ('¿Cual es su presupuesto destinado? A- Desde 25000 hasta 45000, B- Desde 45000 hasta 65000, C- Desde 65000 hasta 85000').toLowerCase()

while (seleccionInicial != 'A' || seleccionInicial != 'a' || seleccionInicial != 'B' || seleccionInicial != 'b' || seleccionInicial != 'C' || seleccionInicial != 'c') {
    switch (seleccionInicial) {
        case 'A':
        case 'a':
                console.log("Presupuesto de 25000 a 45000, exploremos las opciones")
                    alert('Okey, presupuesto de 25000 a 45000 prosigamos')
                    if (seleccionInicial == 'A' ) {
                        seleccionInicial = '25000 a 45000'}



                        break;
        case 'B':
        case 'b':
                console.log = ("Presupuesto de 45000 a 65000, exploremos las opciones")
                    alert('Okey, presupuesto de 45000 a 65000 prosigamos')
                    if (seleccionInicial == 'B' ) {
                        seleccionInicial = '45000 a 65000'}



                        break;
        case 'C':
        case 'c':
                console.log = ("Presupuesto de 65000 a 85000, exploremos las opciones")
                    alert('Okey, presupuesto de 65000 a 85000 prosigamos')
                    if (seleccionInicial == 'C' ) {
                        seleccionInicial = '65000 a 85000'}



                        break; 
    
        default:
            console.log('Error de tipeo, pruebe elijiendo entre A, B y C.')
            seleccionInicial = prompt ('Error de tipeo, pruebe elijiendo entre A, B y C.').toLowerCase()
            break;
    }
}