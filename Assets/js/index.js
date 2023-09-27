//task 01
function abc(num,amount)
{
    let res = ''
    res = amount * (num/100)
    return res
}

console.log(abc(50,10000))

//task 2
const people = [
    {
        id: 1
      personName: "Fahad",
      personAge: 23,
      personIncome: "2000000"
    },
    {
        id: 2
        personName: "Zoya",
        personAge: 23,
        personIncome: "3000000",
    }
    
  ];
  
  
  // Print the names of all people in the array
console.log("Names of all people:");
people.forEach((person) => {
  console.log(person.name);
});

// Print the ages of all people in the array
console.log("\nAges of all people:");
people.forEach((person) => {
  console.log(person.age);
});

// Print the cities of all people in the array
console.log("\nCities of all people:");
people.forEach((person) => {
  console.log(person.city);
});





