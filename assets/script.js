// ===================
//      GLOBAL
// ===================
const btnStart          = document.getElementById("btnStart");
const OUTPUT            = document.getElementById("numbersContainerOutput");
const numeriInseriti    = [];
// ===================
//      EVENTS
// ===================


btnStart.addEventListener("click", function(){
  
  const livello = document.querySelector("select").value

  numeriGenerati = generateRandomNumbers(livello);

  console.log('numeriGenerati',numeriGenerati);

  for (let i = 0 ; i < numeriGenerati.length; i++) {
    
    OUTPUT.innerHTML += `<h3 class="fw-bolder">${numeriGenerati[i]}</h3>`;
  }

  setTimeout( function(){
    OUTPUT.innerHTML = [];

    while (numeriInseriti.length < numeriGenerati.length) {
      const numeroInserito = prompt("Inserisci un numero")

      if (isNaN(numeroInserito)) {
       console.warn("non e un numero")
      }else{
         numeriInseriti.push(numeroInserito)
         console.log("questo e un numero")
      }
   }




    let counter = 0;
  
   for (let i = 0; i < numeriGenerati.length; i++) {
     if (!numeriGenerati.includes(numeriInseriti[i])){
      continue
     }else{
       counter++
      }
      
    }
    console.log("numeriInseriti",numeriInseriti)
    console.log('punteggio',counter)
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