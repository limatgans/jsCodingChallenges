/* 
Problem:
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Expected Output:
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/

function translatePigLatin(str = "") {
	const re = /[aeiou]/ig;
	const temp = re.exec(str);
	if(!temp) {
		return str + "ay";
	}
	console.log("temp", temp, "index", temp.index);

	if(temp.index === 0) {
		return str+ "way" 
	}
	const pigLatin = str.slice(temp.index) + str.slice(0, temp.index) + "ay";
	console.log("pigLatin", pigLatin);
	return pigLatin;
}

translatePigLatin("consonant");