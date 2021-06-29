//let words = ['apple', 'mall', 'dog', 'Maria'];

//let random_index = Math.floor(Math.random()*4);
//console.log(`The 1st random word with index ${random_index} : ${words[random_index]}`);

//random_index = Math.floor(Math.random()*4);
//console.log(`The 2nd random word with index ${random_index} : ${words[random_index]}`);

//random_index = Math.floor(Math.random()*4);
//console.log(`The 3rd random word with index ${random_index} : ${words[random_index]}`);


let nouns = ['bubble', 'throne', 'rose', 'stamp'];
let adjectives = ['wealthy', 'sour', 'wasteful', 'used'];
let nouns2 = ['attention', 'chemistry', 'piano', 'baseball'];

let random_index1 = Math.floor(Math.random()*4);

let random_index2 = Math.floor(Math.random()*4);

let random_index3 = Math.floor(Math.random()*4);

let result = nouns[random_index1] + ' wants ' + adjectives[random_index2] + ' ' + nouns2[random_index3];
console.log('result:', result);