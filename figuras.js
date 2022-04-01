// Codigo del cuadrado
console.group("Cuadrado");

// Perimetro Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}
// Area Cuadrado
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");

// Perimetro Triangulo
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
} 

// Area Trinangulo
function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulo");

// Diametro circulo
function diametroCirculo(radio){
    return radio*2;
}

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*Math.PI;
}

// Area
function areaCirculo(radio){
    return (radio*radio)*Math.PI;
}

console.groupEnd();

//Funcion boton del cuadrado, interaccion con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); // getElemento para llamar el id imput creado
    const value = input.value; // transformar el input a valor con la variable value
    const perimetro = perimetroCuadrado(value); // llamar la funcion ya creada con una nueva variable en este caso perimetro
    alert(perimetro); // mensaje mas visual con alert
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); // getElemento para llamar el id imput creado
    const value = input.value; // transformar el input a valor con la variable value
    const area = areaCuadrado(value); // llamar la funcion ya creada con una nueva variable en este caso area, se reutiliza el codigo del perimetro
    alert(area);
}