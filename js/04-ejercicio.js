const productos = [];

const producto1 = { codigo: 1, nombre: "Remera", precio: 38000 };
const producto2 = { codigo: 2, nombre: "Bermuda", precio: 45000 };
const producto3 = { codigo: 3, nombre: "Vestido", precio: 60000,
        imprimedatos: function () {
          productos.forEach(p => console.log(p.codigo,p.nombre, p.precio))
        }
}
productos.push(producto1, producto2, producto3);
producto3.imprimedatos()