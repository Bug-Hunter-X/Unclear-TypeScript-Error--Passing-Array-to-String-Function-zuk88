function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = "Jane Doe";
let users = ["Jane Doe", "John Smith"];

console.log(greeter(user)); // Works correctly
console.log(greeterArray(users)); // Works correctly, handles array of strings