
export let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

export let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

export let getSalary = (employeesObject) => new Promise((resolve, reject) => {

    const salariesObject = salaries.find(x => x.id == employeesObject.id)

    if (typeof employeesObject == "object" && employeesObject.id > 0) {
        resolve(salariesObject.salary)
    } else {
        reject('This Id does not exist.')
    }
})

getSalary(employees[1])
    .then(res => { return (res) })
    .catch(err => { return (err) })