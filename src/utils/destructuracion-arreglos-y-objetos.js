/*
Destructuración de Arreglos
Extraer valores de un arreglo y asignarlos a variables individuales.
*/
const colores = ['rojo', 'verde', 'azul'];

const [color1, color2, color3] = colores;

console.log(color1); // 'rojo'
console.log(color2); // 'verde'
console.log(color3); // 'azul'

/*
Saltar elementos
Puedes omitir elementos del arreglo usando comas.
*/
const numeros = [1, 2, 3, 4, 5];
const [, , tercerNumero] = numeros;

console.log(tercerNumero); // 3

/*
Valores Predeterminados
Al igual que con los arreglos, puedes asignar valores predeterminados.
*/
const colores2 = ['rojo'];
const [primerColor, segundoColor = 'verde'] = colores2;

console.log(primerColor);  // 'rojo'
console.log(segundoColor); // 'verde'

/*
Uso de Rest Operator
Puedes usar el operador rest (...) para capturar el resto de los elementos en un arreglo.
*/
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

/*
Destructuración de Objetos
Extraer propiedades de un objeto y asignarlas a variables individuales.
*/
const persona = {
    nombre: 'Juan',
    edad3: 30,
    ciudad: 'Madrid'
};

const { nombre, edad3, ciudad } = persona;

console.log(nombre); // 'Juan'
console.log(edad2);   // 30
console.log(ciudad); // 'Madrid'

/*
Alias para Variables
Puedes asignar un nombre diferente a la variable utilizando : alias.
*/
const persona2 = {
    nombre: 'Ana',
    edad: 25
};

const { nombre: nombrePersona, edad: edadPersona } = persona2;

console.log(nombrePersona); // 'Ana'
console.log(edadPersona);   // 25

/*
Valores Predeterminados
Al igual que con los arreglos, puedes asignar valores predeterminados.
*/
const persona3 = {
    nombre: 'Pedro'
};

const { nombre: nombrePersona2, edad = 25 } = persona3;

console.log(nombrePersona2); // 'Pedro'
console.log(edad);           // 25

/*
Destructuración Anidada
Puedes extraer propiedades de objetos anidados.
*/
const persona4 = {
    nombre: 'María',
    direccion: {
        ciudad: 'Barcelona',
        pais: 'España'
    }
};

const { nombre: nombrePersona3, direccion: { ciudad: ciudadPersona, pais: paisPersona } } = persona4;

console.log(nombrePersona3); // 'María'
console.log(ciudadPersona);  // 'Barcelona'
console.log(paisPersona);    // 'España'

/*
Usos Combinados
Puedes combinar la destructuración de arreglos y objetos.
*/
const personas = [
    { nombre: 'Carlos', edad: 30 },
    { nombre: 'Laura', edad: 28 }
];

const [{ nombre: nombre1, edad: edad1 }, { nombre: nombre2, edad: edad2 }] = personas;

console.log(nombre1); // 'Carlos'
console.log(edad1);   // 30
console.log(nombre2); // 'Laura'
console.log(edad2);   // 28

/*
Funciones y Destructuración
La destructuración también se puede utilizar en los parámetros de las funciones.
*/
const mostrarInfo = ({ nombre, edad }) => {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
};

const mostrarInfo2 = (objetoPersona) => {
    console.log(`Nombre: ${objetoPersona.nombre}, Edad: ${objetoPersona.edad}`);
};

const persona5 = {
    nombre: 'Jorge',
    edad: 35
};

mostrarInfo(persona5); // 'Nombre: Jorge, Edad: 35'


/*
Destructuración de Props en Componentes de React
En React, puedes desestructurar props directamente en los parámetros de un componente funcional.
*/
const MyComponent = ({ nombre, apellido }) => {
    return (
        <div>
            <p>Propiedad 1: {nombre}</p>
            <p>Propiedad 2: {apellido}</p>
        </div>
    );
};

// Uso del componente con props
<MyComponent nombre="Carla" apellido="Garcia" />;



const MyComponent2 = (props) => {
    return (
        <div>
            <p>Propiedad 1: {props.nombre}</p>
            <p>Propiedad 2: {props.apellido}</p>
        </div>
    );
};

// Uso del componente con props
<MyComponent2 nombre="Carla" apellido="Garcia" />;