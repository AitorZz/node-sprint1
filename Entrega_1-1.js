// Exercici 1.1 i 2.1

function printUserFullName(userName, userSurname) {
  console.log(
    `El nom del usuari és ${userSurname}, ${userName} ${userSurname}.`
  );
}
printUserFullName("Aitor", "Zamora");

// Exercici 2.2

function returnName() {
  return "Aitor";
}
console.log(`L'usuari es diu ${returnName()}.`);

//Exercici 3.1

let arrayOfFunctions = [];

function loopZeroNine() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

for (let i = 0; i < 10; i++) {
  arrayOfFunctions.push(loopZeroNine);
}

for (let i = 0; i < arrayOfFunctions.length; i++) {
  arrayOfFunctions[i]();
}

console.log(arrayOfFunctions);

// Exercici 3.2

let userFullName = (function (userName, userSurname) {
  let result = `${userName}${userSurname}`;
  console.log(result);
})("Aitor", " Zamora");
