var sentence = prompt("Enter a sentence:");
alert(sentence);

var sentenceLength = sentence.length;

var firstLetter = sentence.charAt(0);
var capFirstLetter = firstLetter.toUpperCase();

var newStart = sentence.replace(firstLetter, capFirstLetter);
alert(newStart);

var lastLetter = sentence.charAt(sentenceLength - 1);
alert(lastLetter);

var capLastLetter = lastLetter.toUpperCase();
alert(capLastLetter);

var newSentence = sentence.replace(lastLetter, capLastLetter);
alert(newSentence);

//var example = RegExp(lastLetter, "$&");
//var newSentence = sentence.replace(example, capLastLetter);
//alert(newSentence);

alert(capFirstLetter + capLastLetter); //this will capitalize first and last letter

var revLetters = (capLastLetter + capFirstLetter);
alert(revLetters);
