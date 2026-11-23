const libros = [];

const libro1 = { isbn: 1, titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez", cantpaginas: 280 };

const libro2 = { isbn: 2, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", cantpaginas: 280,
        mostrarlibro: function () {
        libros.forEach(p => console.log(`El libro ${p.titulo}, con ISBN ${p.isbn}, creado por el autor ${p.autor}, tiene ${p.cantpaginas} páginas`))
        },
        tienemaspaginas: function (paginas1, paginas2) {
        if (paginas1>paginas2) {
          console.log(`El libro ${libro1.titulo}, tiene más páginas que ${libro2.titulo}`)
        }
        else {if (paginas2>paginas1) {
          console.log(`El libro ${libro2.titulo}, tiene más páginas que ${libro1.titulo}`)
          }
          else {console.log(`Los libros ${libro1.titulo} y ${libro2.titulo}, tienen la misma cantidad de páginas`)}
        }
        }
}
libros.push(libro1, libro2)
libro2.mostrarlibro()
libro2.tienemaspaginas(libros[0].cantpaginas, libros[1].cantpaginas)