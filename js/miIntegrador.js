
    function validarUsu() {

        let usu=document.getElementById("correo").value
        
        if (usu.length==0) {
            document.getElementById("mensaje").innerHTML="El usuario no puede estar vacío"
            document.getElementById("mensaje").className="text-danger ps-1"
        } 
        else if(usu.indexOf("@")==-1) { //indexOf busca @, si no la encuentra devuelve -1
            document.getElementById("mensaje").innerHTML="El usuario debe contener @"
            document.getElementById("mensaje").className="text-danger ps-1"
        } 
        else if((usu.indexOf("codoacodo.edu.ar")==-1)&&(usu.indexOf("gmail.com")==-1)&&(usu.indexOf("outlook.com")==-1)&&(usu.indexOf("yahoo.com")==-1)&&(usu.indexOf("hotmail.com")==-1)) { 
            document.getElementById("mensaje").innerHTML="El usuario debe contener un dominio correcto";
            document.getElementById("mensaje").className="text-danger ps-1"
        }
        else {
            document.getElementById("mensaje").innerHTML=""
            document.getElementById("mensaje").className=""
        }
    }

    
    let precioFinal=0
    function total(){

        let cantidad=document.getElementById("cantidad").value
        let categoria=document.getElementById("categoria").value

        if (categoria==1) {
            precioFinal=(200*cantidad)*0.2
            document.getElementById("mensajePrecio").innerHTML=`Total a pagar: $${precioFinal}`
        }
        else if (categoria==2) {
            precioFinal=(200*cantidad)*0.5
            document.getElementById("mensajePrecio").innerHTML=`Total a pagar: $${precioFinal}`
        }
        else if (categoria==3) {
            precioFinal=(200*cantidad)*0.85
            document.getElementById("mensajePrecio").innerHTML=`Total a pagar: $${precioFinal}`
        }
        else { 
            document.getElementById("mensajePrecio").innerHTML="CATEGORIA ERRONEA"
            document.getElementById("mensajePrecio").className="fs-5 p-2 rounded anchoTotal colorAzul bg-danger text-dark"
        }

    }

    function borrar() {

        document.getElementById("nombre").value=""
        document.getElementById("apellido").value=""
        document.getElementById("correo").value=""
        document.getElementById("cantidad").value=""
        document.getElementById("categoria").value="1"
        document.getElementById("mensajePrecio").innerHTML=`Total a pagar: $0`


    }