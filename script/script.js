document.addEventListener("DOMContentLoaded", function() {
  
  var generateButton = document.getElementById("generateButton");
  var spiritAnimalButton = document.getElementById("spiritAnimalButton");
  var factOutput = document.getElementById("factOutput");
  var spiritAnimalOutput = document.getElementById("spiritAnimalOutput");
  var userInput = document.getElementById("userInput");

  // Random facts here
  var randomFacts = [
      "Honey never spoils; archaeologists have found pots of honey in ancient Egyptian tombs over 3,000 years old and still perfectly edible.", "A chef's hat has 100 pleats. This is to represent the 100 ways to cook an egg", "A nurdle is the blob of toothpaste you put on your toothbrush.", "Pidgeons can't fart.", "The first computer mouse was made from wood.", "Bananas are berries, but strawberries are not.", "The average weight of a hummingbird is less than a nickel"
  ];

  // Spirit animals here
  var spiritAnimals = [
      "Wolf",
      "Eagle",
      "Dolphin",
      "Lion",
      "Shrew",
      "Owl",
      "Fox",
      "Hawk",
      "Tiger",
      "Bear",
      "Salamander",
      "Anteater"
  ];

  
  generateButton.addEventListener("click", function() {
      var randomIndex = Math.floor(Math.random() * randomFacts.length);
      var randomFact = randomFacts[randomIndex];
      factOutput.innerHTML = "Hey " + userInput.value + "! Here's a random fact for you: " + randomFact;
  });

  
  spiritAnimalButton.addEventListener("click", function() {
      var randomIndex = Math.floor(Math.random() * spiritAnimals.length);
      var randomSpiritAnimal = spiritAnimals[randomIndex];
      spiritAnimalOutput.innerHTML = "Your spirit animal is: " + randomSpiritAnimal;
  });
});

