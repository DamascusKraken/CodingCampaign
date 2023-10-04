requestUrl1 = 'https://www.dnd5eapi.co/api/races'; //Races
requestUrl = 'https://www.dnd5eapi.co/api/classes'; //classes
var charButton = $("#classGen");
var raceButton = $("#raceGen");
var statButton = $("#statGen");

charClass = function(event) { //class random creation function.
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

        var classes = data.results;
        var randomIndex = Math.floor(Math.random() * classes.length); 
        var chosenClass = classes[randomIndex];
        console.log(chosenClass.name);

        var buttonText = $("#classText");
        buttonText.text(chosenClass.name);
       
  });
}


charRace = function(event) {

  fetch(requestUrl1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    var races = data.results;
        var randomIndex = Math.floor(Math.random() * races.length); 
        var chosenRace = races[randomIndex];
        console.log(chosenRace.name);

        var buttonText = $("#raceText");
        buttonText.text(chosenRace.name);

  });
}

statStandardGen = function(event) { // Stat Random Generator Function (Standard Array)
  // var str = 8, dex = 8, con = 8;
  // var int = 8, wis = 8, cha = 8;

  standardArray = [15,14,13,12,10,8];
  for(var i = 0; i < 28; i++){
    var result = Math.floor((Math.random() * 6) + 1);
    
  }

  console.log("str: " + str + "dex: "  + dex + "con: " + con);
    console.log("int: " + int + "wis: " + wis + "cha: " + cha);
}

  charButton.on("click", charClass)
  raceButton.on("click", charRace)
  statButton.on("click", statStandardGen)