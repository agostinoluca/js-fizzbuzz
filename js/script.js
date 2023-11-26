/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
-per i multipli di 3 stampi “Fizz” al posto del numero;
-per i multipli di 5 stampi “Buzz”;
-Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

  ##Tools
  -
  -let / const (variabili)
  -console.log() / .querySelector / .getElementById / .createElement / .add / .append (metodi)
  -.classList / .innerText (proprietà)
  -for (iterazione,istruzione)
  -if / if else / else (condizioni)
  -< > / % / === / && (operatori)
*/

// seleziono il div.container del file HTML e lo inserisco in una costante
const container = document.querySelector('.container');

// creo un ciclo per inserire 100 quadratini nel container
for (let i = 1; i <= 100; i++) {

  // costruisco il singolo box
  const box = document.createElement('div');

  // assegno la classe CSS al box creato
  box.classList.add('square_css');
  
  // identifico i numeri multipli di 3 e li inserisco in una costante
  const fizz = i % 3;
  
  // identifico i numeri multipli di 5 e li inserisco in una costante
  const buzz = i % 5;
  
  // seleziono i quadratini che avranno la scritta fizzBuzz
  if (fizz === 0 && buzz === 0) {

    // applico ai box selezionati il testo 'fizzBuzz'
    box.innerText = 'fizzBuzz';
  
    // aggiungo i box al container
    container.append(box);
  
    // assegno la classe CSS al box
    box.classList.add('fizzbuzz_css');
  }

  // seleziono i quadratini che avranno la scritta fizz
  else if(fizz === 0){

    // applico il testo 'fizz'
    box.innerText = 'fizz';

    // aggiungo i box al container
    container.append(box);

    // assegno la classe CSS al box
    box.classList.add('fizz_css');
  }
  
  // seleziono i quadratini che avranno la scritta buzz
  else if(buzz === 0){
  
    // applico il testo 'buzz'
    box.innerText = 'buzz';
    
    // aggiungo i box al container
    container.append(box);
    
    // assegno la classe CSS al box
    box.classList.add('buzz_css');
  }
  
  // applico la condizione 'else' per gli altri quadratini
  else{

    // applico il testo contenuto nella costante [i]
    box.innerText = i;

    // aggiungo i box al container
    container.append(box);
  }
};