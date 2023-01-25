
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

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(employees);
        }, 1500)
    })
};

 async function fetchedData() {
    try {
        const allData = await getData();
        return (allData);
    }
    catch (error) {
        return (error);
    }
};

fetchedData();

module.exports.fetchedData = fetchedData
module.exports.employees = employees

