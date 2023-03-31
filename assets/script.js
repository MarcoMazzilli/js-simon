// ===================
//      GLOBAL
// ===================
const btnStart          = document.getElementById("btnStart");
const OUTPUT            = document.getElementById("numbersContainerOutput");
const numeriIndovinati  = [];


// ===================
//      EVENTS
// ===================


btnStart.addEventListener("click", function(){

  numeriInseriti = [];
  OUTPUT.innerHTML = "";
  
  const livello = document.querySelector("select").value

  numeriGenerati = generateRandomNumbers(livello);

  console.log('numeriGenerati',numeriGenerati);

  for (let i = 0 ; i < numeriGenerati.length; i++) {
    
    OUTPUT.innerHTML += `<h3 class="fw-bolder">${numeriGenerati[i]}</h3>`;
  }

  setTimeout( function(){
    OUTPUT.innerHTML = [];
      numeriInseriti = [];
    while (numeriInseriti.length < numeriGenerati.length) {
      const numeroInserito = prompt("Inserisci un numero")

      if (isNaN(numeroInserito)) {
       console.warn("is not a number")
      }else{
         numeriInseriti.push(parseInt(numeroInserito))
         console.log("yes is a number")
         console.log(numeriInseriti)
      }
   }


    let counter = 0;
  
   for (let i = 0; i < numeriGenerati.length; i++) {
     if (!numeriGenerati.includes(numeriInseriti[i])){
       console.warn("non lo continene")
      }else{
        counter++
        numeriIndovinati.push(numeriInseriti[i])
        console.log("lo contiene")
      }
      
    }

    console.log("numeriInseriti",numeriInseriti)
    console.log('punteggio',counter)

    OUTPUT.innerHTML  = `<h3 class="fw-bolder">Hai totalizzato ${counter} punti e hai indovinato i numeri ${numeriIndovinati}</h3>`;
  },5000)


})


// ===================
//      FUNCTION
// ===================

function generateRandomNumbers(livello) {     //Max sarà determinato dal livello.

  const numeri = []; //Questo è l'array che contiente i numeri.
  
  while (numeri.length < livello) {
    
    const numero = Math.floor(Math.random()* 50 - 1 + 1) + 1;

    if (!numeri.includes(numero)) numeri.push(numero);

  }

  return numeri;
}