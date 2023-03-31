// ===================
//      GLOBAL
// ===================




// ===================
//      EVENTS
// ===================




// ===================
//      FUNCTION
// ===================

function generateRandomNumbers(max) { //Max sarà determinato dal livello.

  const randomNumber = Math.floor(Math.random()* max - 1 + 1) + 1

  return randomNumber
}
