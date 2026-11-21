const rectangulos = {
    alto: 100,
    ancho: 300,
    perimetro: 0, 
    superficie: 0,
    calculaperimetro: function () {
        rectangulos.perimetro= 2 * (rectangulos.alto + rectangulos.ancho)
    },
    calculasuperficie: function () {
        rectangulos.superficie=rectangulos.alto * rectangulos.ancho
    },
    informar: function(){
        console.log(this)//devuelve objeto rectangulos
        console.log(`El perimetro es ${this.perimetro}`)
        console.log(`El area es ${this.superficie}`)
    }
}
rectangulos.informar()
rectangulos.calculaperimetro()
rectangulos.calculasuperficie()
rectangulos.informar()