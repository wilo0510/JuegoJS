
//Funcion que permite generar la ubicacion aleatoria
let obtenerNumerosAleatorios=limite=>{
    return Math.floor(Math.random()*limite);
}
//Funcion que permite medir el punto en el que el usuario hace click y donde esta el tesoro, recibe como parametro el punto seleccionado por el usuario e y el tesoro objetivo
let medirDistancia=(e,objetivo)=>{
    let diferenciaX=e.offsetX-objetivo.x;
    let diferenciaY=e.offsetY-objetivo.y;
    return Math.sqrt((diferenciaX*diferenciaX)+(diferenciaY*diferenciaY));
}
//Funcion para que el usuario tenga la pista de donde esta el tesoro
let obtenerPista=distancia=>{
    if(distancia<30){
        return "Esta hirviendo";
    }else if(distancia<40)
    {
        return "Realmente caliente";
    }else if(distancia <60){
        return "Caliente";
    }else if(distancia <100){
        return "Calido";
    }else if(distancia<180){
        return "frio";
    }else if(distancia<360){
        return "muy frio";
    }else{
        return "Congelado";
    }
    
}