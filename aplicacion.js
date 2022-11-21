let nombreUsuario = prompt ('🇦🇷 BIENVENIDO A MENSAJERIA ALL DAY en CABA y GBA, ¿cual es tu nombre?')



// PROMPT DE BIENVENIDA DONDE PERMITE Aa hasta la Zz

while (nombreUsuario.match(/[^aA-zZ]/g)) {
    nombreUsuario = prompt('Reintente sin simbolos ni caracteres especiales')
    .toLowerCase();
}

alert('Bienvenido, ' + nombreUsuario)

alert(
    `Estos son los servicios que tenemos disponibles ${nombreUsuario}. Por favor ingresa el numero del servicio el cual desees adquirir`
  );
  
  
  // creamos un arreglo de objetos con los productos que queremos vender
  let catalogo = [
    {
      nombre: "Motos para hoy en CABA y GBA",
      precio: 650,
    },
    {
      nombre: "Flete o mini flete para hoy en CABA y GBA",
      precio: 1300,
    },
    {
      nombre: "Moto express en menos de 3 horas",
      precio: 1200,
    },
    {
      nombre: "Flete express en menos de 3 horas",
      precio: 2500,
    },
  ];
  
  
  // creamos un arreglo vacio donde se van a ir agregando los productos que el usuario elija 'carrito'
  let carrito = [];
  
  
  // funcion que recorre el catalogo para imprimirlo en un prompt
  const imprimirCatalogo = () => {
    let catalogoString = "";
    for (let i = 0; i < catalogo.length; i++) {
      catalogoString += `${i} - ${catalogo[i].nombre} - $${catalogo[i].precio} \n`;
    }
    return catalogoString;
  };
  let productoElegido = prompt(imprimirCatalogo());
  
  
  // funcion que verifica si el producto elegido es un numero, que no sea un espacio en blanco y que sea un numero valido
  const verificadorDeProducto = () => {
    while (isNaN(productoElegido)) {
      alert("Por favor ingresa un numero");
      productoElegido = prompt(imprimirCatalogo());
    }
    while (productoElegido == "") {
      alert(
        "Lo Sentimos. No se permiten campos vacios. Por favor ingrese un numero"
      );
      productoElegido = prompt(imprimirCatalogo());
    }
    while (productoElegido < 0 || productoElegido > catalogo.length - 1) {
      alert(
        "Lo sentimos, ese producto no existe. Por favor ingrese un numero valido"
      );
      productoElegido = prompt(imprimirCatalogo());
    }
  };
  verificadorDeProducto();
  
  //añadimos productos al carrito 
  carrito.push(catalogo[productoElegido]);
  console.log(carrito);
  
  alert(`${nombreUsuario} has elegido ${catalogo[productoElegido].nombre} por $${catalogo[productoElegido].precio}`);
  
  let compraOtroProducto = prompt("¿Deseas comprar otro producto? Responde si o no");
  //funcion que verifica si la respuesta es si o no
  const verificadorDeRespuesta = () => {
    while (compraOtroProducto != "si" && compraOtroProducto != "no") {
      compraOtroProducto = prompt(
        "¿Desea comprar otro producto? Responda si o no"
      );
    }
    while (compraOtroProducto == "") {
      compraOtroProducto = prompt(
        "Lo Sentimos. No se permiten campos vacios. ¿Desea comprar otro producto? Responda si o no"
      );
    }
  };
  verificadorDeRespuesta();
  
  
  //funcion que permite volver a mostrar el catalogo y elegir otro producto y en caso de que no se quiera comprar mas nada se muestra el carrito y el valor total de la compra
  const comprarOtroProducto = () => {
    if (compraOtroProducto == "si") {
      productoElegido = prompt(imprimirCatalogo());
      verificadorDeProducto();
      carrito.push(catalogo[productoElegido]);
      console.log(carrito);
      alert(`${nombreUsuario} has elegido ${catalogo[productoElegido].nombre} por $${catalogo[productoElegido].precio}`);
      compraOtroProducto = prompt("¿Deseas comprar otro producto? Responda si o no");
      verificadorDeRespuesta();
      comprarOtroProducto();
    } else { 
      const mostrarCarrito = () => { //funcion que muestra lo que hay en el carrito
        let texto = `${nombreUsuario} usted ha comprado: \n`;
        carrito.forEach((producto) => {
          texto += `${producto.nombre} - $${producto.precio} \n`;
        });
        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        texto += `el total a pagar es $${total}`;
        return texto;
      };
      alert(mostrarCarrito());
    }
  };
  comprarOtroProducto();
  