var person = {
  name: "Andrew",
  age: 21
};

function updatePerson(obj) {
  // obj = {
  //   name: "Dj",
  //   age: 27
  // };
  obj.name = "Derek";
  obj.age = 27;
}

updatePerson(person);
console.log(person);

var grades = [15, 37];

function addGrades(grades) {
  grades = [55, 22, 12];
  debugger;
}

addGrades(grades);
console.log(grades);
