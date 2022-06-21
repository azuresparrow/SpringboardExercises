const filterOutOdds = (...args) => args.filter(num=> num%2===0)

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (a, b) => ({...a, ...b});

const doubleAndReturnArgs = (original, ...doubled) => [...original, ...doubled.map(value => value*2)];

const removeRandom = (items) => {
    let randomIndex = Math.floor(Math.random()*items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex+1)]
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

const removeKey = (obj, key) => {
    let updatedObj = {...obj}
    delete updatedObj[key];
    return updatedObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) =>({...obj, [key]: val});
//overwrites the previous key/value no problem.