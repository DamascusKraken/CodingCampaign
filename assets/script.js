requestUrl = 'https://www.dnd5eapi.co/api/classes'; //classes
requestUrl1 = 'https://www.dnd5eapi.co/api/races'; //Races
requestUrl2 = 'https://api.fungenerators.com/name/generate?category=dragon&limit=10'; //Names
var charButton = $("#classGen");
var raceButton = $("#raceGen");
var nameButton = $("#nameGen");

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

charButton.on("click", charClass)
raceButton.on("click", charRace)



charName = function(event) {

  fetch(requestUrl2)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var names = data.contents.names;
    console.log(names);
        var randomIndex = Math.floor(Math.random() * names.length);
        var randomName = names[randomIndex];
        console.log(randomName);
      var buttonText = $("#nameText");
      buttonText.text(randomName);
});
}

nameButton.on("click", charName)

