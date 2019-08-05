const arr = [1, 2, 3, 4, 5];

const newArra = arr.map(function(item, index) {
  return item + index;
});

console.log(newArra);

const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
  return item === 2;
});

console.log(find);
