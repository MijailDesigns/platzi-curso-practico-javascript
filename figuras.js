//Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado){
    return lado * lado;
} 
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1  + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;

// console.log("El altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 +base;
} 

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del circulo
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + "cm");
//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo mide: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
// console.log("El valor de PI es: " + PI);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aqui intereactuamos con el HTML

//Cuadrados

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulos

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const lado1 = parseInt(input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const lado2 = parseInt(input2.value);

    const inputb = document.getElementById("InputBase");
    const base = parseInt(inputb.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){

    const inputh = document.getElementById("InputAltura");
    const altura = inputh.value;

    const inputb = document.getElementById("InputBase");
    const base = parseInt(inputb.value);

    const area = areaTriangulo(base, altura);
    alert(area);

}

//funcion altura triangilo isósceles
function alturaTrianguloIsosceles(A, B, C){
    let ladosIguales;
    let base;
    let altura;
    if(A === B && C >= 2*B || A === C && B >= 2*C || B === C && A >= 2*C || A === B && B === C || A != B && B != C && A != C){
        return alert("Este no es un triangulo isósceles")
    }else{
        switch(true){
            case A === B:
                ladosIguales = A;
                base = C;
                break;
            case B === C:
                ladosIguales = B;
                base = A;
                break;
            case C === A:
                ladosIguales = C;
                base = B;
                break;
        }
        return Math.sqrt(ladosIguales**2 - (base**2 / 4));
    }
}

function calcularAlturaTriangulo(){
    const ladoA = document.getElementById("iso-ladoA");
    A = ladoA.value;

    const ladoB = document.getElementById("iso-ladoB");
    B = ladoB.value;

    const ladoC = document.getElementById("iso-ladoC");
    C = ladoC.value;

    const altura = alturaTrianguloIsosceles(A, B, C);
    alert("La altura de tu triangulo isósceles es: " + altura);


}

//Circulos

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    value = input.value;

    const area = areaCirculo(value);
    alert(area);
}