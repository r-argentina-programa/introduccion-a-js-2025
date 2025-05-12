const persona = {
    nombre: 'Fabricio',
    edad: 37,
    saludar: function(aQuien){
        alert(`Hola ${aQuien}, me llamo ${this.nombre} y tengo ${this.edad}`)
    },
    despedir(aQuien) {
        alert(`Chau ${aQuien}`)
    },
    trabajo: {
        titulo: 'programador',
        empresa: 'pepito srl'
    }
};

function crearPersona(nombre, apellido){
    return {
        nombre,
        apellido,
        saludar(aQuien){
            alert(`Hola ${aQuien}`)
        }
    }
}

const personaNueva = crearPersona('pepe', 'perez');
console.log(personaNueva);

personaNueva.edad = 37;

// const edad = personaNueva.edad;
// const nombre = personaNueva.nombre;

const { edad, nombre } = personaNueva;

console.log(edad,nombre);

//

function cumplirAnios(persona) {
    persona.edad++;
}

function sumarUno(valor){
    valor = valor + 1;
    console.log(valor);
}

console.log('personaNueva.edad', personaNueva.edad);
cumplirAnios(personaNueva);
console.log('personaNueva.edad', personaNueva.edad);

const nuevaEdad = 37;
console.log('nuevaEdad', nuevaEdad);
sumarUno(nuevaEdad);
console.log('nuevaEdad', nuevaEdad);

console.log('personaNueva.edad', personaNueva.edad);
sumarUno(personaNueva.edad); // 38
console.log('nuevaPersona.edad', personaNueva.edad);

/////////


console.log(Object.keys(personaNueva));
console.log(Object.values(personaNueva));
