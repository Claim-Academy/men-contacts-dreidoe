// As a warmup this morning, write a function that takes in a string (like a name) and returns out a capitalized version of it. Use slice toUpperCase and toLowerCase

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("jOe"));
