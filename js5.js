const name = "John";
const age = 30;

const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
};

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."
