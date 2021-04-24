
// Create a new Set called mySet and preload it with values using an array/iterable
// Removes duplicates
const mySet = new Set(['one', 'two', 'three', 'four', 'five', 'one', 'five']);

// .forEach()
// loop over each value in the Set using Set's forEach() method
mySet.forEach((value) => console.log(value));

console.log(mySet.size)

mySet.add('six');
mySet.add('six');
mySet.add('seven').add('eight').add('nine').add('ten');

// Note this uses each value as both the key and the value.
// List of all value entries, spreading into console log
console.log(...mySet.entries());

// List of all keys (same func as values()), spreading into console log
console.log(...mySet.keys());

// List of all values, spreading into console log
console.log(...mySet.values()); 

console.log(mySet.has('three')); // logs true

mySet.delete('four');
console.log(mySet.has('four'));
console.log(mySet.size);

mySet.clear();
console.log(mySet.size);

mySet.add("MISSISSIPPI");
mySet.forEach((value) => console.log(value));
console.log(mySet.size);

let unique = new Set("MISSISSIPPI");
unique.forEach((value) => console.log(value));

let s = new Set();
s.add([1, 2, 3]);
console.log(s.has(1)); // logs false.
console.log(s.has([1, 2, 3])); // logs false.

let t = new Set([1, 2, 3, 1, 2]); // create a set with different element as 1, 2, 3.
console.log(t.has(1)); // logs true.
console.log(t.has([1, 2, 3])) // logs false.
t.forEach((value) => console.log(value));
