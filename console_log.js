const abhay = { name: 'abhay', age: 24, telephone: '11223344' };
const soham = { name: 'soham', age: 2, telephone: null };
const manik = { name: 'manik', age: 24, telephone: '66778899' };

console.log('%c Me and Family', 'color: purple; font-weight: bold');
console.log({ abhay, soham, manik });

const people = [abhay, soham, manik];
console.table(people);

console.time('blip');
let i = 0;
while (i < 1000000) {
  i++;
}
console.timeEnd('blip');

console.info(console.memory);

console.todo = function(msg) {
  console.log(' %c %s %s %s', 'color: green; background - color: black; ', '–', msg, '–');
};

console.important = function(msg) {
  console.log(' %c %s %s %s', 'color: brown; font - weight: bold; text - decoration: underline; ', '–', msg, '–');
};

console.todo('This is something thats need to be fixed');
console.important('This is an important message');
