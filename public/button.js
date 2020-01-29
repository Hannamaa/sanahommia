const haku = document.getElementById("haku");
const button = document.getElementById("button");

function hae() {
    console.log(haku.value);
    fetch(`http://localhost:3000/api/users/${haku.value}`)//tekee haun linkistä
         .then(resp => {
              return resp.json()  //palauttaa merkkijonon ja muunnetaan se js-olioksi
         })
         .then(data => { //palauttaa js-olion
              for (let d of data) {
                   vastaus.innerHTML = `word: ${d.word} <br> phonetic: ${d.phonetic} <br> origin: ${d.origin}`;
              }
       
         })
}