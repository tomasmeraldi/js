let nombreUsuario = prompt ('🇦🇷 BIENVENIDO A MENSAJERIA ALL DAY en CABA y GBA, ¿cual es tu nombre?')



// PROMPT DE BIENVENIDA DONDE PERMITE Aa hasta la Zz

while (nombreUsuario.match(/[^aA-zZ]/g)) {
    nombreUsuario = prompt('Reintente sin simbolos ni caracteres especiales')
    .toLowerCase();
}

alert('Bienvenido, ' + nombreUsuario)



let seleccionInicial = prompt ('¿Que servicio estabas buscando? A- Motos inmediatas en CABA y GBA, B- Fletes, mini fletes inmediatos en CABA y GBA, C- Programar un servicio fijo mensual/semanal').toLowerCase()

let catalogo = [
  {
    nombre: "Tarjeta de regalo para cumpleaños",
    precio: 10,
  },
  {
    nombre: "Tarjeta de regalo para aniversario",
    precio: 20,
  },
  {
    nombre: "Tarjeta de regalo para navidad",
    precio: 15,
  },
  {
    nombre: "Tarjeta de regalo para graduación",
    precio: 8,
  },
  {
    nombre: "Tarjeta de regalo para día de la madre",
    precio: 40,
  },
  {
    nombre: "Tarjeta de regalo para día del padre",
    precio: 30,
  },
  {
    nombre: "Tarjeta de regalo para san valentin",
    precio: 5,
  },
];


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