
// Create a new map initialized with strings associated with numbers.
const myMap = new Map([
   ["zero", 1],
   ["one", 1],
   ["two", 2],
   ["three", 3]
]);
console.log("Size of map is : "+ myMap.size);

// .forEach()
// loop over each entry in the Map using Map's forEach() method
myMap.forEach((value, key) => {
   console.log(`${key} = ${value}`);
}); // logs "key1 = value1 " "key2 = value2 "

// .entries()
// List of all key-value pairs, spreading into console log
console.log(...myMap.entries()) // logs ["key1", "value1"] ["key2", "value2"]

// .keys()
// List of all keys, spreading into console log
console.log(...myMap.keys()) // logs "key1" "key2 "

// .values()
// List of all values, spreading into console log
console.log(...myMap.values()) // logs "value1" "value2 "

// .has()
// Does a key have a value yet
console.log(myMap.has('three')); // logs true

// .delete()
//Delete a key-value pair, by key
myMap.delete('three');
console.log(myMap.has('key3')); // logs false

myMap.forEach((value, keys) => {
   console.log("key : " + keys + " value : " + value);
});

console.log( "Getting value associated with one :" + myMap.get("one"));
myMap.get("four");
myMap.set("four", 4);
console.log("Size of myMap is : " + myMap.size);

myMap.set("zero", 0); //Change value associated with key 'Zero'.

myMap.clear(); //deleting every entries in myMap.
console.log("myMap size after clear() : " + myMap.size);  

const n = new Map([
   ["isLoving", true],
   ["isBeautiful", false]
]);

let copyMap = new Map(n); // A new map with the same keys and values as map n.
let o = { x: 1, y: 2};    // An object with two properties
let p = new Map(Object.entries(o));  // Same as new map([["x",1], ["y", 2]]).

console.log(copyMap);
console.log(p);




let newMap = new Map();  // Start with an empty map.
    newMap.set({}, 1);   // Map one empty object to the number 1.
    newMap.set({}, 2);   // Map a different empty object to the number 2.
    newMap.size;          // => 2: there are two keys in this map
    newMap.get({});       // => undefined: but this empty object is not a key
    newMap.set(newMap, undefined); // Map the map itself to the value undefined.
    newMap.has(newMap);        // => true: m is a key in itself 
	 newMap.get(newMap);         // => undefined: same value we'd get if m wasn't a key


let m = new Map([["x", 1], ["y", 2]]);
    [...m];   // => [["x", 1], ["y", 2]]
   for(let [key, value] of m) {
      console.log("key : " + key + ", value : " + value);
 }
 