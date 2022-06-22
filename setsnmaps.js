new Set([1,1,2,2,3,4])
//[1,2,3,4]

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

{[1,2,3]: false}


const hasDuplicate = arr => (new Set(arr)).size < arr.length;

const vowelCount = str => {
    const numVowels = new Map();
    const vowels  = [..."aeiou"];
    [...str.toLowerCase()].forEach((next) => {
        if(vowels.includes(next))
            numVowels.has(next) ? numVowels.set(next, numVowels.get(next)+1) : numVowels.set(next, 1);
    })
    return numVowels;
}