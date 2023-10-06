requestUrl = 'https://www.dnd5eapi.co/api/classes'; //classes

requestUrl1 = 'https://www.dnd5eapi.co/api/races'; //Races
requestUrl2 = 'https://api.fungenerators.com/name/generate?category=dragon&limit=10'; //Names
var charButton = $("#classGen");
var raceButton = $("#raceGen");

var statButton = $("#statGen");

var nameButton = $("#nameGen");


let degreesToRotate = 90;

var progressValue = $('progress').val(); //getting a handle on progress bar value.
var charButton = $("#classGen");
var raceButton = $("#raceGen");
var rerollButton = $("#rerollButton")
var savedCharacter = $("#savedCharacter")
var progressBar = {}; //evalutes if we have already updated the progress bar for this section.

//Section for localStorage, need to change to an array later on.
var characterClass = localStorage.getItem("characterClass");




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
        charButton.text("Reroll") //rename create to reroll
        var buttonText = $("#classText");
        buttonText.text(chosenClass.name);


        if (!progressBar[0]){ //We update the progress bar but only one time per section.
          incrementProgressBar();
          progressBar[0] = true;
        }

        localStorage.setItem("characterClass",chosenClass.name);
  
        
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
        raceButton.text("Reroll") //rename create to reroll
        var buttonText = $("#raceText");
        buttonText.text(chosenRace.name);

      if (!progressBar[1]){ //We update the progress bar but only one time per section.
        incrementProgressBar();
        progressBar[1] = true;
      }

  });
}


statStandardGen = function(event) { // Stat Random Generator Function (Standard Array)

var maxRand = 5;
  var standardArray = [15,14,13,12,10,8];
=======
 statRollGen = function(event) { // Stat Roll Generator Function (4d6 drop lowest roll)

>>>>>>> dd93cc762fca205f8a816c7b6799b6e70c27b7b9
  var statArray  = new Array(5);
  for(var i = 0; i < 6; i++){
      statArray[i] = statRoll();
      console.log(statArray[i]);
  }
  //Renders the stat name and abilityScore
  for(var i = 0; i < 6; i++){
<<<<<<< HEAD
    var attributes = ["Strength: ", "Wisdom: ","Constitution: ", "Intelligence: ", "Wisdom: ", "Charisma: "];
    console.log("this is the stat array: "  + statArray[i]);
    statIndex = i +1;
    var stat = $("#stat-" + statIndex);
      stat.text(attributes[i] + statArray[i]);
      
  }


}

  charButton.on("click", charClass)
  raceButton.on("click", charRace)
  statButton.on("click", statStandardGen)


  var scores = new Array(3);
  for(var i = 0; i < 4; i++){
      var d6Roll  = (Math.floor((Math.random() * 6) + 1));
      scores[i] = (d6Roll);
      var rollNumber = i + 1;
      console.log("Roll " + rollNumber + ": " + scores[i]);
  }

  var lowestRoll = getLowRoll(scores);
  console.log("Lowest Roll Dropped: " + lowestRoll);

  var abilityScore = 0;

  for(var i = 0; i < 4; i++){
      abilityScore += scores[i];
  }

  abilityScore -= lowestRoll;
  
  return abilityScore;
};
  
function getLowRoll(scores){
  var lowestRoll = 6;
  var lowRoll;
  for(var i = 0; i <= 3; i ++){
      for(var j = 0; j <= 3; j++){
          if(scores[i] < scores[j]){
              lowRoll = scores[i];
              if (lowRoll < lowestRoll){
                  lowestRoll = lowRoll;
              }
          }
      }
  }

  return lowestRoll;
};
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




savedCharacters = function(){ //beginging of saving characters. We need to add an array of things to append. Right now it will only append one item from our last. We also want to append a paragraph for each character.
  savedCharacter.append(characterClass)

}

reroll = function(event){
  console.log("rerolling")
  charClass(event);
  charRace(event);
  statRollGen(event);
  // Add your functions in here to run when we hit reroll.
}

function diceRoll(){
  
  degreesToRotate++;
  $(".rollDice").css({
    'transform': 'rotate(' + degreesToRotate + 'deg)'
  });
}

function incrementProgressBar() { //progress bar functionality, we call this after we generate.
  progressValue += 25;
  $('progress').val(progressValue);
}

setInterval(diceRoll, 10);


charButton.on("click", charClass)
raceButton.on("click", charRace)
statButton.on("click", statRollGen)
nameButton.on("click", charName)

  diceRoll();

  savedCharacters();

