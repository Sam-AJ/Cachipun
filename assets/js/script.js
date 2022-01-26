var resultado = "Inicio"
var puntajeHumano = 0;
var puntajeIa = 0;

function generarJugadaIa(){
    const opciones = ("✊", "✋", "✌");
    let jugadaIa = opciones(Math.floor(Math.random()*opciones.length));
    return jugadaIa;
}

function calculoResultado(humano, ia){
    if (humano === ai){
        resultado = "Empate"
        return;
    }else if ((humano === "✊" && ia === "✌") || (humano === "✋" && ia === "✊") || (humano === "✌" && ia === "✋")){
        puntajeHumano += 1;
        if (puntajeHumano >= ((resultado /2) + 1)){
            resultado = "Has Ganado";
        }else{
            resultado = "Victoria"
            return;
        }

        }else{
            puntajeIa += 1;
        }
        
    }
}


$(function(){

    function jugar(jugadaHumano){
    let jugadaHumano = jugadaHumano.textContent;
    let jugadaIa = generarJugadaIa();
    resultado = calculoResultado(jugadaHumano, jugadaIa)
})