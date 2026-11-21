const auto = {
    color: 'blanco',
    marca: 'Toyota Yaris', 
    modelo: '2026',
    estado :true,
    encender: function () {
        console.log(this)//devuelve objeto auto
        console.log(`El auto ${this.marca} se encuentra encendido`)
    },
    apagar: function () {
        console.log(this)//devuelve objeto auto
        console.log(`El auto ${this.marca} se encuentra apagado`)
    }
}
if (auto.estado===true){
  auto.encender()
}
else{
  auto.apagar()
  auto.estado=false
}
