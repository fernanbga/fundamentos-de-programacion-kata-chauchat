
const cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];

function chauchat(cargador) {

  if (Math.random() < 0.2) { //solo tenia 20 de prob de disparar
    for (let i = 0; i < cargador.length; i++) {
      console.log(cargador[i]);
     

      if ((i + 1) % 3 === 0) {
        console.log('');
      }
    }
  } else {
    console.log("Illo, me he quedao pillá!"); // se quedo pillada :c
  }
}

chauchat(cargador);