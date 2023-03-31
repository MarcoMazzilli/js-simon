// ===================
//      GLOBAL
// ===================
const btnStart          = document.getElementById("btnStart");
const OUTPUT            = document.getElementById("numbersContainerOutput");

// ===================
//      EVENTS
// ===================


btnStart.addEventListener("click", function(){
  
  const livello = document.querySelector("select").value

  const numbers = generateRandomNumbers(livello);

  console.log(numbers);

  for (let i = 0 ; i < numbers.length; i++) {
    
    OUTPUT.innerHTML += `<h3 class="fw-bolder">${numbers[i]}</h3>`;
  }

  setTimeout( function(){
    OUTPUT.innerHTML = [];
    
  },5000)
})


// ===================
//      FUNCTION
// ===================

function generateRandomNumbers(livello) {     //Max sarà determinato dal livello.

  const numeri = []; //Questo è l'array che contiente i numeri.
  
  while (numeri.length < livello) {
    
    const numero = Math.floor(Math.random()* 100 - 1 + 1) + 1;

    if (!numeri.includes(numero)) numeri.push(numero);

  }

  return numeri;
}