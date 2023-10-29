function calculate(num1, num2) {
    // Genereer twee willekeurige getallen tussen 1 en 12
    //var randomNum1 = Math.floor(Math.random() * 12) + 1;
    //var randomNum2 = Math.floor(Math.random() * 12) + 1;
    randomNum1 = 12;
    randomNum2 = 1;
  
    // Bereken de optelsom van de twee willekeurige getallen
    var result = randomNum1 + randomNum2;
  
    // Geef het antwoord weer met console.log()
    console.log("Antwoord: " + result);
  }
  
  // Roep de functie aan met willekeurige getallen
  calculate(1, 12);
  