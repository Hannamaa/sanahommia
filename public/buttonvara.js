const haku = document.getElementById("haku");
const button = document.getElementById("button");


const haku = document.getElementById("haku");
const button = document.getElementById("button");

function hae() {
    console.log(haku.value);
    fetch(`http://localhost:3000/api/users/${haku.value}`)
         .then(resp => {
              return resp.json()
         })
         .then(data => {
              for (let d of data) {
                   vastaus.innerHTML = `word: ${d.word} <br> phonetic: ${d.phonetic} <br> meaning: ${d.meaning}  <br> origin: ${d.origin}`;
              }
         })
}