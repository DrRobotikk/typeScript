function greeting(name) {
  console.log("Hello " + name);
}

let greet = (name) => {
  console.log("Hello " + name);
};

function squares(number) {
  return number * number;
}

let square = (number) => number * number;

greet("Robin");

console.log(square(5));
