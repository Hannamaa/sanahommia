var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

//GET pyyntö, kun käyttäjä syöttää sanan
router.get('/:haku', function (req, res) {
  const haku = req.params.haku //document.getElementById("haku").value
  fetch('https://googledictionaryapi.eu-gb.mybluemix.net/?define=' + haku)
  .then(function(response) {
    console.log("status", response.status)
    return response.json()
  })
  .then(function(data) {
    console.log(data);
    res.json(data)
  }) ;

})
module.exports = router;