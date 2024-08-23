function encriptar () {
    let texto = document.getElementById("texto").value
    let tituloMensaje = document.getElementById ("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    
    


    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (texto.length !=0)  {
        document.getElementById('texto').value = textoCifrado;
        console.log(texto)
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent ="";
        imagen.src = "person.jpg";
    }


    else {
       imagen.src = "nosearch.jpg";
        tituloMensaje.textContent = "Ningun mensaje fue encontado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    
        alert('Ingrese algun texto');
         }

        }

        function desencriptar() {
            let texto = document.getElementById("texto").value
            let textoCifrado = texto
           .replace(/enter/gi, "e")
           .replace(/imes/gi, "i")
           .replace(/ai/gi, "a")
           .replace(/ober/gi, "o")
           .replace(/ufat/gi, "u")

           if (texto.length !=0) {
            document.getElementById ("texto").value = textoCifrado;
            document.getElementById ("titulo-mensaje").textContent = "Texto desencriptado con exito";
            parrafo.textContent ="";
            imagen.src = "lock.jpg";

          
           
           } else {
             imagen.src = "nosearch.jpg";
             tituloMensaje.textContent = "Ningun mensaje fue encontado";
             parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
         
             alert('Debes ingresar algun texto');
              }

        }