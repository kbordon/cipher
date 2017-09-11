var sentence = prompt("Enter a sentence:");
alert(sentence);

var sentenceLength = sentence.length;

var lastLetter = sentence.charAt(sentenceLength - 1);
alert(lastLetter);

var capLastLetter = lastLetter.toUpperCase();
alert(capLastLetter);

var newSentence = sentence.replace(lastLetter, capLastLetter);
alert(newSentence);
