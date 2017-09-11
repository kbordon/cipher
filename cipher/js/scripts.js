var sentence = prompt("Enter a sentence:");
alert(sentence);

var order = function(sentence) {
  return (sentence.charAt(0)).toUpperCase() + (sentence.charAt(sentence.length - 1)).toUpperCase();
};
alert("This is a redo function: " + order(sentence));

var sentenceLength = sentence.length;

var firstLetter = sentence.charAt(0);
var capFirstLetter = firstLetter.toUpperCase();

var newStart = sentence.replace(firstLetter, capFirstLetter);
//alert(newStart);

var lastLetter = sentence.charAt(sentenceLength - 1);
//alert(lastLetter);


var capLastLetter = lastLetter.toUpperCase();
//alert(capLastLetter);

//This part was due to mis-reading the assignment but was an attempt to capitalize beginning and end and replacing it back into the sentence
//var newSentence = sentence.replace(lastLetter/$/, capLastLetter);
//alert(newSentence);

//var example = RegExp(lastLetter, /$/);
//var newSentence = sentence.replace(example, capLastLetter);
//alert(newSentence);

var letters = function (capFirstLetter, capLastLetter) {
  return capFirstLetter + capLastLetter;
};

alert("These are the first and last letters: " + letters(capFirstLetter, capLastLetter)); //this will capitalize first and last letter

var revLetters = function(capFirstLetter,capLastLetter){
  return capLastLetter + capFirstLetter;
};

alert("This is the reverse order: " + revLetters(capFirstLetter, capLastLetter));

var regAndReverse = function (capFirstLetter, capLastLetter) {
  return letters(capFirstLetter, capLastLetter) + revLetters(capFirstLetter, capLastLetter);
};

alert("This is both orders together: " + regAndReverse(capFirstLetter, capLastLetter));

//This is a separate attempt at the functions

//var order = function (sentence) {
//  return (sentence.charAt(0)).toUpperCase + //((sentence.charAt(sentence.length - 1)).toUpperCase;
//};
