const cuenta= {
    titular: 'Alex',
    saldo: 0, 
    ingresar: function (cantidad) {
        cuenta.saldo=cuenta.saldo+cantidad
    },
    extraer: function (cantidad) {
        cuenta.saldo=cuenta.saldo-cantidad
    },
    informar: function(){
        console.log(this)//devuelve objeto cuenta
        console.log(`El saldo es ${this.saldo}`)
    }
}
cuenta.informar()
const ingresadinero=parseInt(prompt("Ingrese el monto a agregar al saldo"))

if (!isNaN(ingresadinero)){
      cuenta.ingresar(ingresadinero)
      cuenta.informar()
    }
else
    {
      alert("Ingrese solamente numeros")
    }

const extraerdinero=parseInt(prompt("Ingrese el monto a extraer del saldo"))

if (!isNaN(extraerdinero)){
      cuenta.extraer(extraerdinero)
      cuenta.informar()
    }
else
    {
      alert("Ingrese solamente numeros")
    }
