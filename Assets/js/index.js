//task 01
function abc(num,amount)
{
    let res = ''
    res = amount * (num/100)
    return res
}

console.log(abc(50,10000))

// Task 2
const people = [
    {
        id: 1,
        personName: "Fahad",
        personAge: 23,
        personIncome: "2000000"
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: 23,
        personIncome: "3000000"
    }
];

console.log("Names of all people:");
people.forEach((person) => {
  console.log("Person ",person.id, "name is ",person.personName," having salary ",person.personIncome);
});

//task 03
  console.log("Properties of the objects:");
people.forEach((person) => {
  for (const property in person) {
    console.log(property);
  }
});

  




