let text = "You may write me down in history With your bitter, twisted lies, You may trod me in the very dirt But still, like dust, I'll rise. Does my sassiness upset you? Why are you beset with gloom? ’Cause I walk like I've got oil wells Pumping in my living room. Just like moons and like suns, With the certainty of tides, Just like hopes springing high, Still I'll rise. Did you want to see me broken? Bowed head and lowered eyes? Shoulders falling down like tear drops, Weakened by my soulful cries?"
let newPoem = document.getElementById('newPoem')
let newPoemTxt = '';

// ***** STARTS HERE ********
//write a function that set text varaible to preselect dropdown menu text options: 
let texts = { 
  'Maya Angelou': "You may write me down in history With your bitter, twisted lies, You may trod me in the very dirt But still, like dust, I'll rise. Does my sassiness upset you? Why are you beset with gloom? ’Cause I walk like I've got oil wells Pumping in my living room. Just like moons and like suns, With the certainty of tides, Just like hopes springing high, Still I'll rise. Did you want to see me broken? Bowed head and lowered eyes? Shoulders falling down like tear drops, Weakened by my soulful cries?",
  'Toni Morrison': 'Now these cool hands guide what they once caressed; Lips forget what they have kissed. My eyes now pool their light Better the summit to see.'
}


const selectText = () => {
  let text; 
  let select = document.getElementById('textSelect').selectedIndex;
  let option = document.getElementsByTagName('option')[select].value;
  switch(option){
    case 'Toni Morrison':
      // console.log('toni')
      text = texts["Toni Morrison"];
      submitText(text);
      break;
    case 'Maya Angelou':
      // console.log('maya')
      text = texts["Maya Angelou"];
      submitText(text);
      break;
  }
}


// sumbitText prints new poem on p tag with id "newPoem':
const submitText = (text) => {
// envoke randomNum lines 
  randomNumLines(text)
// get id and print text 
  newPoem.innerHTML = newPoemTxt;
}

const resetText = () => {
  // newPoem p tag to empty str:
  newPoem.innerHTML = '';
}

const parseText = (str) => {
  // use the replace method with regex to eliminate commas that appear in some strings in the array:
  let arr = str.toLowerCase().replace(/[^a-z\s]/ig, '').split(' ');
  return arr;
}


const generateWordPairs = (arr) => {
  const wordPairs = {};

  for (let i = 0; i < arr.length - 1; i++){
    let element = arr[i];
    let nextWord = arr[i + 1];
    if (wordPairs[element]) {
        wordPairs[element].push(nextWord);
    }
    else {
        wordPairs[element] = [nextWord];
    }
  }

  return wordPairs;
}

function random(arr) {  
  let idx = Math.floor(arr.length * Math.random());
  return arr[idx];
}

const writeLine = (corpus, textLength) => {
  // store each word in text in arr
  let corpusArr = parseText(corpus);
  // store an object with word pairs
  let wordPairs = generateWordPairs(corpusArr);
  // select random word with random number for index
  let randomWord = random(corpusArr);
  // create a new arr with radomWord as the first element
  let newTextArr = [randomWord]

  while(wordPairs[randomWord]) {
    let next = wordPairs[randomWord];
    randomWord = random(next);
    newTextArr.push(randomWord);

    if(newTextArr.length > textLength) {
      break;
    }
  }

  let addPunctuation = randomPunctuation(newTextArr);
  let capitalizeFirst = capitalize(addPunctuation)
  return capitalizeFirst.join(' ');
}
const capitalize = (arr) => { 
  const arrCopy = arr.slice();
  const firstWord = arrCopy[0];
  const firstLetter = firstWord[0].toUpperCase();
  const removeFirstLetter = firstWord.slice(1 , (firstWord.length));
  const addFirstLetter = firstLetter + removeFirstLetter;
  arrCopy[0] = addFirstLetter;

  return arrCopy; 
}

// Add new punction randomly: 
const randomPunctuation = (arr) => {
  let punctuation = [ '. ', '! ', '? '];  
  let random = Math.floor(Math.random() * 2) + 1;
  arr.push(punctuation[random])
  // join together the last two elements in the arr :
  let concat = arr[arr.length - 2] + arr[arr.length - 1];
  arr.pop();
  arr.pop();
  arr.push(concat);

  return arr;
}


const writeLineHelper = (numlines, corpus) => {
// loop to the number of lines:
  for (let i  = 0; i < numlines; i++){
    // radomly determine how long each line will be:
    let randomTextLength = Math.floor(Math.random() * 10) + 1; 
    // add lines to newPoemTxt variable: 
    newPoemTxt += '' + writeLine(corpus, randomTextLength);
  }
}


// pass a random number (within a reasonable range) into writeLine:
const randomNumLines = (corpus) => { 
  let passText = corpus;
  // create random number: 
  let randomNum = Math.floor(Math.random() * 5) + 1; 
  // pass random number and text to writeLineHelper function: 
  return writeLineHelper(randomNum, passText);
} 

