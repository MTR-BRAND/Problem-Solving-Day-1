function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }
  
  console.log(greet("Alice")); // "Hello, Alice!"
  console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"
  