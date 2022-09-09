let numeroIngresado = parseInt(prompt("Ingresa un número menor a 20. Te vamos a mostrar los números siguientes hasta llegar al tope."));

for (let i=1; i <20; i++){
    let resultado = numeroIngresado+i;
    if (resultado >20){
        break;
    }
    alert (`El resultado es ${resultado}.`);
}