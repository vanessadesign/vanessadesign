
var siguiente;
var proyectos;
var puntosNavegacion;
var dir;

document.addEventListener("DOMContentLoaded", function(){
    var btnSiguiente = document.getElementById("btn-siguiente");
    var btnAnterior = document.getElementById("btn-anterior");
    proyectos = document.getElementsByClassName("proyecto");
    puntosNavegacion = document.getElementsByClassName("punto-navegacion");
    
    dir = window.localStorage.getItem("numProyecto");
    if(dir == null){
        dir = 0;
    }
    navegarAProyecto(dir);
    console.log(siguiente);
    
    btnSiguiente.addEventListener("click", function() {
        if(siguiente < proyectos.length){
            btnSiguiente.disabled = true;
            btnAnterior.disabled = true;
            proyectos[siguiente-1].classList.remove("activo");
            proyectos[siguiente-1].classList.add("pasado");
            
            proyectos[siguiente].classList.remove("proximo");
            proyectos[siguiente].classList.add("activo");
            
            puntosNavegacion[siguiente].classList.remove("punto-proximo");
            puntosNavegacion[siguiente].classList.add("punto-actual");
            puntosNavegacion[siguiente-1].classList.remove("punto-actual");
            puntosNavegacion[siguiente-1].classList.add("punto-proximo");
            setTimeout(function(){
                proyectos[siguiente-1].scrollTo(0,0);
                siguiente++;
                btnSiguiente.disabled = false;
                btnAnterior.disabled = false;
            }, 500);
            console.log(siguiente);
        }
    });
    
    btnAnterior.addEventListener("click", function() {
        if(siguiente > 1){
            btnSiguiente.disabled = true;
            btnAnterior.disabled = true;
            proyectos[siguiente-2].classList.remove("pasado");
            proyectos[siguiente-2].classList.add("activo");
            
            
            proyectos[siguiente-1].classList.remove("activo");
            proyectos[siguiente-1].classList.add("proximo");
            
            puntosNavegacion[siguiente-2].classList.remove("punto-proximo");
            puntosNavegacion[siguiente-2].classList.add("punto-actual");
            puntosNavegacion[siguiente-1].classList.remove("punto-actual");
            puntosNavegacion[siguiente-1].classList.add("punto-proximo");
            setTimeout(function(){
                proyectos[siguiente-1].scrollTo(0,0);
                siguiente--;
                btnSiguiente.disabled = false;
                btnAnterior.disabled = false;
            }, 500);
            console.log(siguiente);
        }
    });
    
    
});

function navegarProyectos(e){
        if(siguiente-1 != e){
            if(e>= siguiente){ //SI VOY A UN PROYECTO PRÓXIMO
                var i;
                for(i = 0; i < e; i++){
                    proyectos[i].classList.remove("activo");
                    proyectos[i].classList.remove("proximo");
                    proyectos[i].classList.add("pasado");
                    setTimeout(function(){
                        proyectos[i].scrollTo(0,0);
                    }, 500);
                }
                proyectos[e].classList.remove("proximo");
                proyectos[e].classList.add("activo");
                
            }else{  //SI VOY A UN PROYECTO ANTERIOR
                var i;
                for(i = siguiente-1; i > e; i--){
                    proyectos[i].classList.remove("activo");
                    proyectos[i].classList.remove("pasado");
                    proyectos[i].classList.add("proximo");
                    setTimeout(function(){
                        proyectos[i].scrollTo(0,0);
                    }, 500);
                }
                proyectos[e].classList.remove("pasado");
                proyectos[e].classList.add("activo");
            }
            
            puntosNavegacion[e].classList.remove("punto-proximo");
            puntosNavegacion[e].classList.add("punto-actual");
            puntosNavegacion[siguiente-1].classList.remove("punto-actual");
            puntosNavegacion[siguiente-1].classList.add("punto-proximo");
            siguiente = e+1;
        }
}

function navegarAProyecto(e){
    var i;
    
    puntosNavegacion[0].classList.remove("punto-actual");
    puntosNavegacion[0].classList.add("punto-proximo");
    
    for(i = 0; i < e; i++){
        proyectos[i].classList.remove("activo");
        proyectos[i].classList.remove("proximo");
        proyectos[i].classList.add("pasado");
    }
    proyectos[e].classList.remove("proximo");
    proyectos[e].classList.add("activo");
    
    puntosNavegacion[e].classList.remove("punto-proximo");
    puntosNavegacion[e].classList.add("punto-actual");
    
    siguiente = parseInt(e) + 1;
}
