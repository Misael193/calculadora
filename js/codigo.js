// Objeto con propiedades

var p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null
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
        m.calculadora(p.accion);
    },
    calculadora: function(accion){
        switch(accion){
            case "numero":
            console.log("numero");

            case "signo":
            console.log("signo");

            case "decimal":
            console.log("decimal");

            case "igual":
            console.log("igual");

        }
    }
}

m.inicio();