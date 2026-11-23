const persona = {
    nombre: "Myriam",
    edad: 61,
    dni: 0, 
    sexo: "F",
    peso: 78,
    altura: 1.65,
    anionacimiento: 1965,
    mostrargeneracion: function (anionacimpersona) {
      switch (true) {
        case anionacimpersona >= 1930 && anionacimpersona<= 1948:
          console.log(`La persona pertenece a la Silent generación Posguerra y el rasgo característico es la Austeridad`)
          break;
      case anionacimpersona >= 1949 && anionacimpersona<= 1968:
          console.log(`La persona pertenece a la generación Baby Boom y el rasgo característico es la Ambición`)
          break;
      case anionacimpersona >= 1969 && anionacimpersona<= 1980:
          console.log(`La persona pertenece a la generación X y el rasgo característico es la Obsesión por el éxito`)
          break;
      case anionacimpersona >= 1981 && anionacimpersona<= 1993:
          console.log(`La persona pertenece a la generación Y (Milenials) y el rasgo característico es la Frustración`)
          break;
      case anionacimpersona >= 1994 && anionacimpersona<= 2010:
          console.log(`La persona pertenece a la generación Z y el rasgo característico es la Irreverencia`)
          break;
      case anionacimpersona >= 2011 && anionacimpersona<= 2024:
          console.log(`La persona pertenece a la generación Alfa y el rasgo característico es la Hiperconectividad`)
          break;
      case anionacimpersona >= 2025 && anionacimpersona<= 2039:
          console.log(`La persona pertenece a la generación Beta y el rasgo característico es la Adaptabilidad`)
          break;    
      default:
          break;
      } 
    },
    esmayordeedad: function (edadpersona) {
        if (edadpersona>=18){
            console.log(`La persona es mayor de edad`)
        }
    },
    generardni: function(){
        persona.dni = String(Math.floor(Math.random() * 100000000)).padStart(8, "0")
    },
    mostrardatos: function(){
        console.log(`Los datos de la persona son: ${persona.nombre}, DNI: ${persona.dni}, sexo: ${persona.sexo}`)
        console.log(`Año de nacimiento: ${persona.anionacimiento}, edad ${persona.edad}, peso en kilos: ${persona.peso}, altura en metros y centímetros: ${persona.altura}`)
    }
}
persona.mostrargeneracion(persona.anionacimiento)
persona.esmayordeedad(persona.edad)
persona.generardni()
persona.mostrardatos()