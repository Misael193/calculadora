// Objeto con propiedades

var p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0
}

// objeto con los metodos

var m = {
    inicio: function(){
        for( var i = 0; i < p.teclas.length; i++ ){
            p.teclas[i].addEventListener("click", m.oprimirTecla)
        }

    },
    oprimirTecla: function(tecla){
        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        m.calculadora(p.accion, p.digito);
    },
    calculadora: function(accion, digito){
        switch(accion){
            case "numero":
            p.cantidadSignos = 0;
            if (p.operaciones.innerHTML == 0){
                p.operaciones.innerHTML = digito;
            } else {
                p.operaciones.innerHTML += digito;
            }
            

            case "signo":
            p.cantidadSignos++
            if(p.cantidadSignos == 1){
                if(p.operaciones.innerHTML == 0){
                    p.operaciones.innerHTML = 0;
                } else {
                    p.operaciones.innerHTML += digito;
                }
            }

            case "decimal":
            console.log("decimal");

            case "igual":
            console.log("igual");

        }
    },
    borrarCalculadora: function(){
        p.operaciones.innerHTML = 0;
    }
}

m.inicio();