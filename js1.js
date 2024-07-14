function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";
    
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
  }
}
  
scopeTest();