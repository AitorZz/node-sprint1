/*- Exercici 1.1
Crea una funció que retorni una Promise que invoqui la funció resolve()
 o reject() que rep. Invoca-la passant-li les dues funcions de manera 
 que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
*/
const itRains = true;

let doesItRain = (itRains) => new Promise((resolve, reject) => {
    if (!itRains) {
        const sunnyDay = ('The weather is good so you shoul go out an do sport.')
        resolve(sunnyDay);
    } else {
        reject(new Error(`It rains so you should stay at home and study`))
    }
});

doesItRain(!itRains)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err.message);
    })

/* - Exercici 1.2
Crea una arrow function que rebi un paràmetre i una funció callback i 
li passi a la funció un missatge o un altre (que s'imprimirà per consola) 
en funció del paràmetre rebut.
*/

const datosSaludo = (nombre, apellido, callback) => {

    if (nombre === 'Aitor' && apellido !== 'Zamora') {
        let result = 'Aitor'
        callback(result)
    } if (nombre !== 'Aitor' && apellido === 'Zamora') {
        let result = 'Zamora'
        callback(result)
    } if (nombre === 'Aitor' && apellido === 'Zamora') {
        let result = 'Aitor Zamora'
        callback(result)
    } else {
        throw Error('Introduce a correct name')
    }
}

let imprimirSaludo = (result) => console.log(`Hola ${result}!`);

datosSaludo('Aitor', 'Zamora', imprimirSaludo);

/* - Exercici 2.1 - Employees & Salaries */

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

/* - Exercici 2.1 
Donats els objectes employees i salaries, crea una arrow function getEmployee()
que retorni una Promise efectuant la cerca en l'objecte pel seu id.*/

let getEmployee = (selectedEmployee) => new Promise((resolve, reject) => {

    const correctEmployee = employees.find(x => x.id == selectedEmployee)

    if (selectedEmployee < 4 && selectedEmployee > 0) {
        resolve(correctEmployee)

    } else {
        reject(new Error('This Id does not exist.'))
    }
})

getEmployee(2)
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) })


/*- Exercici 2.2
Crea una altra arrow function getSalary() similar a l'anterior que rebi com
 a paràmetre un objecte employee i retorni el seu salari.*/

let getSalary = (employeesObject) => new Promise((resolve, reject) => {

    const salariesObject = salaries.find(x => x.id == employeesObject.id)

    const employeeSalary = salariesObject.salary

    if (employeesObject.id < 4 && employeesObject.id > 0) {
        resolve(employeeSalary)
    } else {
        reject(new Error('This Id does not exist.'))
    }
})

getSalary(employees[1])
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) })

/*- Exercici 2.3
Invoca la primera funció getEmployee() i després getSalary() niant 
l'execució de les dues promises de manera que es retorni per la consola 
el nom de l'empleat/da i el seu salari.*/

getEmployee(3)
    .then(res => {
        console.log(res)
        getSalary(res)
        .then(res => { console.log(res) })

    })
    .catch(err => { console.log(err) })
    
/* - Exercici 3.1
Fixa un element catch a la invocació del nivell anterior que capturi
qualsevol error i el mostri per la consola.*/



