/*
// Exercici 1.1
Mostra per la consola el resultat d'una arrow function autoinvocable
que sumi dos nombres.
*///Consultar IIFE

let c = ((a, b) => {
    const result = a + b
    return result
})(5, 10)
console.log(c)

/* - Exercici 2.1
Crea una arrow function que, rebent un paràmetre, retorni un objecte
 amb un atribut que tingui com a valor el paràmetre rebut.*/

let definirCabell = color => ({
    cabell: color
})
console.log(definirCabell('ros'));

/* - Exercici 2.2 
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada.
La classe inclourà un mètode dirNom que imprimeixi per consola 
el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.*/

class Persona {

    constructor(nom, edat, colorCabell) {
        this.nom = nom;
        this.edat = edat;
        this.colorCabell = colorCabell;
    };
    dirNom() {
        console.log(this.nom);
    };
};

const usuari = new Persona('Aitor');

usuari.dirNom();



/* - Exercici 3.1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
Invoca-la amb diferents definicions.


// no he pogut millorar-lo....*/

class UfoProtocol {
    constructor() {

        this.name = "UFO Protocol"
        if (this.constructor === UfoProtocol) {
            throw new Error("Should be initiated in case of UFO sighting")
        }
    }
    displayName() { return "The flying thing is" + this.sight }
};

class Sighting {
    constructor(flyingThing) {
        this.sight = flyingThing
    }
};

Sighting.prototype = Object.create(UfoProtocol.prototype)

let newFlyingThing1 = new Sighting("just an airplane")
console.log(newFlyingThing1.displayName());

let newFlyingThing2 = new Sighting("not an airplane, start the UFO protocol.")
console.log(newFlyingThing2.displayName());
