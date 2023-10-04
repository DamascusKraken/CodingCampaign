requestUrl1 = 'https://www.dnd5eapi.co/api/races'; //Races
requestUrl = 'https://www.dnd5eapi.co/api/classes'; //classes

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

savedCharacters = function(){ //beginging of saving characters. We need to add an array of things to append. Right now it will only append one item from our last. We also want to append a paragraph for each character.
  savedCharacter.append(characterClass)

}

reroll = function(event){
  console.log("rerolling")
  charClass(event);
  charRace(event);
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
  rerollButton.on("click", reroll)
  diceRoll();

  savedCharacters();