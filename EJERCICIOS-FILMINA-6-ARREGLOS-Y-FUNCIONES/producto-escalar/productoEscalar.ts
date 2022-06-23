//Producto Escalar
let vector1:number[];
let vector2:number[];
let productoEscalar:number = 0;

function pedirDimensionArray():number[] {
    let dimension:number = Number(prompt("Ingrese la dimensión de los array:"))
    let array: number[] = new Array(dimension);
    return array;
}

function cargarArrayManualmente():number[]{
    let vector:number[] = pedirDimensionArray();
    for(let i : number = 0; i < vector.length; i++) {
        vector[i] = Number(prompt("Ingrese un numero para la posicion " + i + ": "));
    }
    return vector;
}

function calcularProductoEscalar (v1:number[],v2:number[]): number {
    let pEscalar:number = 0;
    for (let i:number = 0; i< v1.length; i++) {
        pEscalar += v1[i] * v2[i];
    }
    return pEscalar;
}



alert("Cargar Vector 1");
vector1 = cargarArrayManualmente();
alert("Cargar Vector 2");
vector2 = cargarArrayManualmente();
productoEscalar = calcularProductoEscalar(vector1,vector2);

console.log(`Producto Escalar = ${productoEscalar}`);