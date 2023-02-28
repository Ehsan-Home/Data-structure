let map = new Map();

// Set
map.set("name", "Ehsan");
map.set("age", 24);
map.set("isSingle", true);
map.set("sex", "M");
map.set(23, 34);

// Get
const value = map.get("age");

// Delete
const res = map.delete("isSingle");

// has
const isAvailable = map.has("name2");

// loop
map.forEach((value, key) => console.log(key, value));

// other forms of for
console.log("****");
for (let keyVal of [...map.entries()]) {
  const key = keyVal[0];
  const value = keyVal[1];
  console.log(key, value);
}
console.log("****");

// keys
const keys = [...map.keys()];
console.log("keys", keys);

// values
const values = [...map.values()];
console.log("values", values);

// Check if a key,value exists in the map
function hasKeyValue(key, value, map) {
  if (!map.has(key)) {
    return false;
  }
  if (map.get(key) === value) {
    return true;
  }
  return false;
}
console.log(hasKeyValue(23, "34", map));
