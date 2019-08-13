const ancho=400;
const alto=400;
let ubicacionTesoro={
    x:obtenerNumerosAleatorios(ancho),
    y:obtenerNumerosAleatorios(alto)
}
//referencia a un objeto html
let $mapa=document.getElementById('mapa');
let $distancia=document.getElementById('distancia');
let numeroClicks=0;

$mapa.addEventListener('click',function(e){
    numeroClicks++;
    let distancia=medirDistancia(e,ubicacionTesoro);
    let pistaDistancia=obtenerPista(distancia);
    $distancia.innerHTML=`<h1>${pistaDistancia}</h1>`;
    if(distancia<20){
        alert(`Has encontrado el tesoro en ${numeroClicks} clicks!`);
        location.reload();
    }
});