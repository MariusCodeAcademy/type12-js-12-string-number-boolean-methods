'use strict';
console.log('main.js');

const str1 = 'Brown fox jumped over the lazy dog.';
// str.slice(nuoIndex, ikiIndex) =====================================

// gauti 'Brown'
const firstWord = str1.slice(0, 5);
console.log('firstWord ===', firstWord);

// gauti 1 paskutini zodi.
const lastWord = str1.slice(-5, -1);
console.log('lastWord ===', lastWord);
// gauti 3 paskutinius zodzius

// gauti sakinio dali pradziu iki 'jumped'
const jumpedWordIndex = str1.indexOf('jumped');
console.log('jumpedWordIndex ===', jumpedWordIndex);
const ikiJumped = str1.substring(0, jumpedWordIndex);
console.log('ikiJumped ===', ikiJumped);

// gauti zodi esanti pries 'over'

// str.substr(nuoIndex, length) =====================================

// gauti 11 simboliu nuo 'jumped'
const elevin = str1.substr(jumpedWordIndex, 11); // depricated - bus pasalintas tolimesnese versijose.

// string.toUpperCase()
const did = str1.toUpperCase();
console.log('did ===', did);
console.log('str1 ===', str1);

// string.concat()

const str2 = str1.concat(' ', 'Sun', ' ', 'is ', 'shining.');
console.log('str2 ===', str2);
