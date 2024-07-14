function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(10, 20, 30, 40)); // 100
  console.log(sum(5)); // 5
  