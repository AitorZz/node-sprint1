
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

export let getEmployee = (selectedEmployee) => new Promise((resolve, reject) => {

    const correctEmployee = employees.find(x => x.id == selectedEmployee)

    if (typeof selectedEmployee == "number"  && selectedEmployee > 0) {
        resolve(correctEmployee)

    } else {
        reject('This Id does not exist.')
    }
})

getEmployee(2)
    .then(res => { return (res) })
    .catch(err => { return (err) })