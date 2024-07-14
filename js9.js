const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const number of innerArray) {
      sum += number;
    }
    console.log(sum);
  }
  