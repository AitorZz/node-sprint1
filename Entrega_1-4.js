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

let getEmployee = (selectedEmployee) => new Promise((resolve, reject) => {

    const correctEmployee = employees.find(x => x.id == selectedEmployee)

    if (selectedEmployee < 4 && selectedEmployee > 0) {
        resolve(correctEmployee)

    } else {
        reject(new Error('This Id does not exist.'))
    }
});

let getSalary = (employeesObject) => new Promise((resolve, reject) => {

    const salariesObject = salaries.find(x => x.id == employeesObject.id)

    const employeeSalary = salariesObject.salary

    if (employeesObject.id == salariesObject.id) {
        resolve(employeeSalary)
    } else {
        reject(new Error('This Id does not exist.'))
    }
})


/*- Exercici 1.1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi
 per pantalla el nom de l'empleat/da i el seu salari, usant les funcions 
 getEmployee() i getSalary() que has definit a la tasca anterior.
*/


async function useId(idIntroduced) {
    try {
        const fetchedEmployeee = await getEmployee(idIntroduced);
        const fetchedSalary = await getSalary(employees[idIntroduced - 1]);
        console.log(fetchedEmployeee);
        console.log(fetchedSalary);
    } catch (error) {
        console.error(error);
    }

}
useId(2);

/*- Exercici 1.2
Crea una nova funció asíncrona que cridi a una altra que retorni una 
Promise que efectuï la seva funció resolve() després de 2 segons de la 
seva invocació.*/

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(employees);
        }, 1500)
    })
};
// Pregunta: Com puc fer perquè getData em retorni tant employees com salaries?

async function fetchedData() {
    try {
        const allData = await getData();
        console.log(allData);
    }
    catch (error) {
        console.error(error);
    }
};

fetchedData();

/*- Exercici 2.1
Crea una funció que retorni el doble del número que li passa 
com a paràmetre després de 2 segons.*/

const riseDouble = (introducedNumber) => {
    return new Promise((resolve, reject) => {
        if (typeof introducedNumber == "number") {
            let doubledNumber = introducedNumber * 2
            setTimeout(() => {
                resolve(doubledNumber);
            }, 2000)
        } else {
            reject(new Error('This is not a number'))
        }
    })
};



async function syncNumbers(inputNumber) {
    try {
        const risedNumbers = await riseDouble(inputNumber);
        console.log(risedNumbers);

    } catch (error) {
        console.error(error);
    }
};

syncNumbers(10);

/*Crea una altra funció que rebi tres números i calculi 
la suma dels seus dobles fent servir la funció anterior.*/


async function syncNumbers2(x, x1, x2) {
    try {
        let threeNumbers = [x,x1,x2];
        threeNumbers.forEach(element => {
            riseDouble(element);
        });
    }
    catch (error) {
        console.error(error)
    }
};

syncNumbers2(10, 20, 30);

/*- Exercici 3.1
Força i captura tants errors com puguis dels nivells 1 i 2.*/



