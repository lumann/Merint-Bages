var again = true;
while (again == true) {
  var tng = null;
  var sentString = null;
  var sent = [];
  var toReplace = 0;
  var replIndex = null;
  var replacments = [];
  var replacment = null;
  var newSent = null;
  authorSetup();
  playerPopulate();
  displayResult();
  again = confirm("would you like to play again?");
}
alert("thank you for playing madlibs.");

function authorSetup() {
  tng = prompt("imput a sentence for a madlib");
  sent = tng.split(" ");
  toReplace = parseInt(prompt("how many words would you like to remove?"));
  for (i = 0; i < toReplace; i++) {
    replIndex = parseInt(
      prompt("enter the word would you like to remove(first word is 1, second is 2 etc)"));
    replIndex--;
    replacments[i] = replIndex;
    let partOfSpeech = prompt("what part of speech is " + sent[replIndex]);
    sent[replacments[i]] = partOfSpeech;
  } 
  alert("thanks, Auther please Get a Player");
}

function playerPopulate() {
  for (let i = 0; i < toReplace; i++) {
    replacment = prompt("enter a " + sent[replacments[i]]);
    sent[replacments[i]] = replacment;
  }
}

function displayResult() {
  newSent = sent.join(" ");
  alert("get the Author, then press OK or enter to see new sentence");
  alert(newSent);
}
