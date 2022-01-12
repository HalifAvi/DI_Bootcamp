
// The value of the variable should be a string that contains the words “not” and “bad”
let sentence = "";

let idxOfNot = sentence.indexOf("not");
let idxOfBad = sentence.indexOf("bad");

// First check if 'sentence' string contains these words
if(idxOfNot!=-1 && idxOfBad!=-1){

	// The value is the first appearance of the substring “not” (from the sentence variable).
	let wordNot = sentence.substring(idxOfNot, idxOfNot+3);

	// The value is the first appearance of the substring "bad" (from the sentence variable).
	let wordBad = sentence.substring(idxOfBad, idxOfBad+3);

	// If the word “bad” comes after the word “not”
	if(idxOfBad > idxOfNot){

		// Get the string part to replace
		let strToReplace = sentence.substring(idxOfNot, idxOfBad+3);
		let newStr = sentence.replace(strToReplace,"good");

		// Overwrite the origin string with the new one
		sentence = newStr.slice();
	}
}

console.log(sentence);





